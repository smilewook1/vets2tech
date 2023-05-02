import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'; 
import axios from 'axios';
import { Typography, IconButton, Collapse, AppBar, Snackbar, Button, Box, Modal, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SearchBar from '../components/SearchBar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiAlert from '@mui/material/Alert';

function Row(props) {
    const { row, cmpRow, deleteData, editData } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.internalId}
          </TableCell>
          <TableCell align="right">{row.firstName}</TableCell>
          <TableCell align="right">{row.lastName}</TableCell>
          <TableCell align="right">{row.email}</TableCell>
          <TableCell align="right">{row.passwordHash}</TableCell>
          <TableCell align='right' colSpan={2}>
            <Button startIcon={<SendIcon />}
                onClick={()=> editData(row.internalId)}></Button>
            <Button endIcon={<DeleteIcon />}
                onClick={()=> deleteData(row.internalId, row.companyId)}></Button>
        </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  COMPANY INFORMATION
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>PHONE</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cmpRow
                    .filter((companyRow) => {
                        return (companyRow.internalId.toString().includes(row.companyId)
                        )
                    })
                    .map((companyRow) => (
                      <TableRow key={companyRow.internalId}>
                        <TableCell component="th" scope="row">
                          {companyRow.internalId}
                        </TableCell>
                        <TableCell>{companyRow.companyName}</TableCell>
                        <TableCell>{companyRow.email}</TableCell>
                        <TableCell>{companyRow.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      internalId: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      companyId: PropTypes.number.isRequired,
    }).isRequired,

    cmpRow: PropTypes.arrayOf(
      PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

const EmpEditData = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const [empData, setEmpData] = useState([])
  const [cmpData, setCmpData] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [mod, setMod] = useState('');
  const [barOpen, setBarOpen] = useState(false);
  const handlebarClose = () => setBarOpen(false);
  const [searchResults, setSearchResults] = useState([]);
  
  const [editId, setEditid] = useState(0)
  const [editlname, setEditlname] = useState('')
  const [editfname, setEditfname] = useState('')
  const [editemail, setEditemail] = useState('')
  const [editpassword, setEditpassword] = useState('')
  const [companyId, setCompanyId] = useState(0)

  const setBar=(mod)=>{
    return(
      <Snackbar open={barOpen} autoHideDuration={6000} onClose={handlebarClose}>
        <Alert onClose={handlebarClose} severity="success" sx={{ width: '100%' }}>
          Successfully {mod}!
        </Alert>
      </Snackbar>
    )
  }

  useEffect(()=>{
    getCmpData()
  },[])

  const getCmpData = () =>{
    axios.get("https://localhost:44439/api/company")
    .then((result)=>{
        setCmpData(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getEmpData()
  },[])

  const getEmpData = () =>{
    axios.get("https://localhost:44439/api/employer")
    .then((result)=>{
        setEmpData(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const handleEdit=(id)=>{
    handleOpen()
    
    axios.get(`https://localhost:44439/api/employer/${id}`)
    .then((result)=>{
      setEditfname(result.data.firstName)
      setEditlname(result.data.lastName)
      setEditemail(result.data.email)
      setEditpassword(result.data.passwordHash)
      setEditid(result.data.internalId)
      setCompanyId(result.data.companyId)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  const handleUpdate=()=>{
    const url = `https://localhost:44439/api/employer/${editId}`
    const empData = {
        "internalId": editId,
        "firstName": editfname,
        "lastName": editlname,
        "email": editemail,
        "passwordHash": editpassword,
        "companyid": companyId,
        "company": {
          "email": "companyEmail",
          "companyname": "companyName"
      }
    };
    
    axios.put(url,empData)
    .then((result)=>{
        getEmpData()
        clear()
        handleClose()
        setBarOpen(true)
        setMod('Edited')
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log(empData)
  }

  const handleDelete=(id, cid)=>{
    if(window.confirm("Are you sure?") === true){
      axios.delete(`https://localhost:44439/api/employer/${id}`)
      .then((result)=>{
        if(result.status === 200)
        {
            getEmpData()
            axios.delete(`https://localhost:44439/api/company/${cid}`)
            .then((result)=>{
              if(result.status === 200)
              {
                  getCmpData()
                  setBarOpen(true)
                  setMod('Deleted')
        }
      })
      .catch((error)=>{
        console.log(error)
      })
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

  const clear=()=>{
    setEditfname('')
    setEditlname('')
    setEditemail('')
    setEditpassword('')
  }
  
  return (
    <TableContainer component={Paper}>
      
      <AppBar position="static" sx={{bgcolor: 'text.secondary' }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Button href='/dash'>
            <KeyboardBackspaceIcon sx={{ color: 'white' }}/>
          </Button>

          <SearchBar onSearch={setSearchResults}/>
        </Toolbar>
      </AppBar>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align='right'>FIRST NAME</TableCell>
            <TableCell align='right'>LAST NAME</TableCell>
            <TableCell align='right'>EMAIL</TableCell>
            <TableCell align='right'>PASSWORD</TableCell>
            <TableCell align='right'>EDIT</TableCell>  
          </TableRow>
        </TableHead>

        <TableBody>
          {
            empData.length > 0  
            ? empData
            .filter((index) => {
              return (searchResults === '' 
              ? index
              : index.firstName.toLowerCase().includes(searchResults)
              || index.lastName.toLowerCase().includes(searchResults)
              )
            })
            .map((row) => {
                return (
                    <Row key={row.internalId} row={row} cmpRow={cmpData} editData={handleEdit} deleteData={handleDelete}/>
                  )
                })
            :
            <TableRow>
              <TableCell colSpan={6} align="center">
                Loading...
              </TableCell>
            </TableRow>
          }
        </TableBody>
          
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
                <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField id="standard-basic" label="FIRST NAME" variant="standard" placeholder='Enter first name'
                    value={editfname} onChange={(e)=> setEditfname(e.target.value)}></TextField>
                </Grid>

                <Grid item xs={4}>
                    <TextField id="standard-basic" label="LAST NAME" variant="standard" placeholder='Enter last name'
                    value={editlname} onChange={(e)=> setEditlname(e.target.value)}></TextField>
                </Grid>

                <Grid item xs={8}>
                    <TextField id="standard-basic" label="EMAIL" variant="standard" placeholder='Enter email'
                    value={editemail} onChange={(e)=> setEditemail(e.target.value)}></TextField>
                </Grid>

                <Grid item xs={8}>
                    <TextField id="standard-basic" label="PASSWORD" variant="standard" placeholder='Enter password'
                    value={editpassword} onChange={(e)=> setEditpassword(e.target.value)}></TextField>
                </Grid>
                </Grid>
            <Button onClick={handleUpdate}>Save Changes</Button>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
        
      </Table>
          {setBar(mod)}
    </TableContainer>

  );
};

export default EmpEditData;