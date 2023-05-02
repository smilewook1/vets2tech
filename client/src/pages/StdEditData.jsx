import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { AppBar, Snackbar, Button, Box, Modal, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SearchBar from '../components/SearchBar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MuiAlert from '@mui/material/Alert';

const StdEditData = () => {
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
  
  

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [mod, setMod] = useState('');
  const [barOpen, setBarOpen] = useState(false);
  const handlebarClose = () => setBarOpen(false);
  const [searchResults, setSearchResults] = useState([]);

  const [editId, setEditid] = useState(0)
  const [editlname, setEditlname] = useState('')
  const [editfname, setEditFname] = useState('')
  const [editemail, setEditemail] = useState('')
  const [editpassword, setEditpassword] = useState('')

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
    getData()
  },[])

  const getData = () =>{
    axios.get("https://localhost:44439/api/student")
    .then((result)=>{
      setData(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const handleEdit=(id)=>{
    handleOpen()
    
    axios.get(`https://localhost:44439/api/student/${id}`)
    .then((result)=>{
      setEditFname(result.data.firstName)
      setEditlname(result.data.lastName)
      setEditemail(result.data.email)
      setEditpassword(result.data.passwordHash)
      setEditid(result.data.internalId)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  const handleUpdate=()=>{
    const url = `https://localhost:44439/api/student/${editId}`
    const data = {
      "internalId": editId,
      "firstName": editfname,
      "lastName": editlname,
      "email": editemail,
      "passwordHash": editpassword
    }
    
    axios.put(url,data)
    .then((result)=>{
      getData()
      clear()
      handleClose()
      setBarOpen(true)
      setMod('Edited')
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log(data)
  }

  const handleDelete=(id)=>{
    if(window.confirm("Are you sure?") === true){
      axios.delete(`https://localhost:44439/api/student/${id}`)
      .then((result)=>{
        if(result.status === 200)
        {
          getData()
          setBarOpen(true)
          setMod('Deleted')
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }
  
  const clear=()=>{
    setEditFname('')
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
            data.length > 0  
            ? data
            .filter((index) => {
              return (searchResults === '' 
              ? index
              : index.firstName.toLowerCase().includes(searchResults)
              || index.lastName.toLowerCase().includes(searchResults)
              )
            })
            .map((index) => {
                return (
                  <TableRow key={index.internalId}>
                    <TableCell component="th" scope="row">
                      {index.internalId}
                    </TableCell>
                    <TableCell align='right'>{index.firstName}</TableCell>
                    <TableCell align='right'>{index.lastName}</TableCell>
                    <TableCell align='right'>{index.email}</TableCell>
                    <TableCell align='right'>{index.passwordHash}</TableCell>
                    <TableCell align='right' colSpan={2}>
                      <Button startIcon={<SendIcon />} 
                      onClick={()=> handleEdit(index.internalId)}></Button>
                      <Button endIcon={<DeleteIcon />}
                      onClick={()=> handleDelete(index.internalId)}></Button>
                    </TableCell>
                  </TableRow>
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
                    value={editfname} onChange={(e)=> setEditFname(e.target.value)}></TextField>
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

export default StdEditData;