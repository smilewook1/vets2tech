import React, {useState, useEffect} from 'react';
import { Grid, Modal, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Input } from '@mui/material';
import axios from 'axios';


const EditData = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const ddata = [{
    id:1,
    firstname:'das',
    lastname:'dd',
    email:'asd',
    password:'1234'

  }]

  const[lastname, setLastname] = useState('')
  const[firstname, setFirstname] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState(0)

  const[data, setData] = useState([])

  useEffect(()=>{
    setData(ddata);
  },[])

  const getData = () =>{
    axios.get()
  }

  const handleEdit=(id)=>{
    
    handleOpen()
  }

  const handleDelete=(id)=>{
    if(window.confirm("Are you sure?") == true){
      alert(id)
    }
    
  }

  const handleUpdate=(id)=>{
    
    }
    
  

  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align='right'>First name</TableCell>
            <TableCell align='right'>Last name</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Password</TableCell>
            <TableCell align='right'>Edit</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((index)=>(
            <TableRow key={index.id}>
              <TableCell component="th" scope="row">
                {index.id}
              </TableCell>
              <TableCell align='right'>{index.firstname}</TableCell>
              <TableCell align='right'>{index.lastname}</TableCell>
              <TableCell align='right'>{index.email}</TableCell>
              <TableCell align='right'>{index.password}</TableCell>
              <TableCell align='right' colSpan={2}>
                <Button className='btn btn-primary' onClick={()=> handleEdit(index.id)}>Edit</Button>
                <Button className='btn btn-danger' onClick={()=> handleDelete(index.id)}>delete</Button>
              </TableCell>
            </TableRow>
          ))

          }
        </TableBody>
      </Table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Input type='text' className='form-control' placeholder='Enter first name'
                value={firstname} onChange={(e)=> setFirstname(e.target.value)}></Input>
              </Grid>

              <Grid item xs={4}>
                <Input type='text' className='form-control' placeholder='Enter last name'
                value={lastname} onChange={(e)=> setLastname(e.target.value)}></Input>
              </Grid>

              <Grid item xs={8}>
                <Input type='text' className='form-control' placeholder='Enter email'
                value={email} onChange={(e)=> setEmail(e.target.value)}></Input>
              </Grid>

              <Grid item xs={8}>
                <Input type='text' className='form-control' placeholder='Enter password'
                value={password} onChange={(e)=> setPassword(e.target.value)}></Input>
              </Grid>
            </Grid>
          </Typography>
          <Button onClick={handleUpdate}>Save Changes</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </TableContainer>
  );
        };

export default EditData;