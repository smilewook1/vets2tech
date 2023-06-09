import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import {Snackbar, TextField, Button, Typography, Box, Container, Grid} from '@mui/material/'
import axios from 'axios'
import MuiAlert from '@mui/material/Alert';

export default function EmpCreateProfile(){
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const[lastname, setLastname] = useState('')
  const[firstname, setFirstname] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[companyId, setCompanyId] = useState(0)
  const[companyName, setCompanyName] = useState('')
  const[companyEmail, setCompanyEmail] = useState('')
  const[companyPhone, setCompanyPhone] = useState(0)

  const [mod, setMod] = useState('');
  const [barOpen, setBarOpen] = useState(false);
  const handlebarClose = () => setBarOpen(false);
  const setBar = (mod) => {
    return (
      <Snackbar open={barOpen} autoHideDuration={6000} onClose={handlebarClose}>
        <Alert onClose={handlebarClose} severity="success" sx={{ width: '100%' }}>
          Successfully {mod}!
        </Alert>
      </Snackbar>
    );
};
  useEffect(()=>{
    getData()
  },[])

  const getData = () =>{
    axios.get("https://localhost:44439/api/company")
    .then((result)=>{
      const lastInternalId = result.data.slice(-1)[0].internalId;
      const lastname = result.data.slice(-1)[0].companyName;
      const lastemail = result.data.slice(-1)[0].email;
      const lastphone = result.data.slice(-1)[0].phone;
      setCompanyPhone(lastphone)
      setCompanyName(lastname)
      setCompanyEmail(lastemail)
      setCompanyId(lastInternalId)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const handleAdd = () => {
    const url = "https://localhost:44439/api/employer"
    const data = {
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "passwordHash": password,
        "companyId": companyId,
        "company": {
        "companyname": companyName,
        "email": companyEmail,
        "phone": companyPhone
        }
    }
    console.log(companyId+1)
    console.log(companyName)
    console.log(companyEmail)
    axios.post(url, data)
    .then((result)=>{
      console.log('Added')
      clear();
      setBarOpen(true)
      setMod("Added")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const clear=()=>{
    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
          }}
      >

        <Typography component="h1" variant="h5">
            Create Profile for Employer
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <TextField
                      required
                      fullWidth
                      label="FIRST NAME"
                      value={firstname}
                      onChange={(event) => {
                          setFirstname(event.target.value);
                      }}/>
              </Grid>
              <Grid item xs={6}>
                  <TextField
                      required
                      fullWidth
                      label="LAST NAME"
                      value={lastname}
                      onChange={(event) => {
                          setLastname(event.target.value);
                      }} />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      type="email"
                      label="EMAIL ADDRESS"
                      value={email}
                      onChange={(event) => {
                          setEmail(event.target.value);
                      }} />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      label="PASSWORD"
                      value={password}
                      onChange={(event) => {
                          setPassword(event.target.value);
                      }} />
              </Grid>
          </Grid>
          
          <Button
              type="submit"
              fullWidth
              variant="contained" sx={{ mt: 3, mb: 2 }}
              onClick={handleAdd}
              > CREATE
          </Button>
          
          <Button
          type="submit"
          fullWidth
          variant="contained" sx={{ mt: 3, mb: 2 }}
          href='/cmpprofile'
          >GO BACK TO COMPANY PROFILE
          </Button>
          <Button
          type="submit"
          fullWidth
          variant="contained" sx={{ mt: 3, mb: 2 }}
          href='/dash'
          >HOME
          </Button>
        </Box>
      </Box>

      <Grid>
      {setBar(mod)}
      </Grid> 
    </Container>

  )
}
