import React, {useState, useEffect} from 'react';
import { Table, TableContainer, TableCell, TableHead, TableRow, TableBody, Paper } from '@mui/material';

const initialValue = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export default function ApprvRgst(){
  
  const [values, setValue] = useState(initialValue);

  const handleChange = (e) =>{
    const {name, values} = e.target
    setValue({
      [name]: values
    }) 
  }

  return (
  <form>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        </TableBody>
      </Table>
    </TableContainer>

  </form>
  )
}
