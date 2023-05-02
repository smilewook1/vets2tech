import React, {useState} from 'react'
import {Snackbar, TextField, Button, Typography, Box, Container, Grid} from '@mui/material/'
import axios from 'axios'
import MuiAlert from '@mui/material/Alert';

export default function AdmCreateProfile(){
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const[lastname, setLastname] = useState('')
  const[firstname, setFirstname] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const [barOpen, setBarOpen] = useState(false);
  const handlebarClose = () => setBarOpen(false);

  const handleAdd = () => {
    const url = "https://localhost:44439/api/student"
    const data = {
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "passwordHash": password
    }
    
    axios.post(url, data)
      .then((result)=>{
        console.log('Added')
        clear();
        setBarOpen(true)
        console.log(data)
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
            Create Profile for Student
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
          href='/'
          >GO BACK
          </Button>
        </Box>
      </Box>

      <Grid>
        {barOpen === true
          ?
          <Snackbar open={barOpen} autoHideDuration={6000} onClose={handlebarClose}>
            <Alert onClose={handlebarClose} severity="success" sx={{ width: '100%' }}>
              Successfully Added!
            </Alert>
          </Snackbar>
          : 
          <Snackbar open={barOpen} autoHideDuration={6000} onClose={handlebarClose}>
            <Alert onClose={handlebarClose} severity="error" sx={{ width: '100%' }}>
              Error!
            </Alert>
          </Snackbar>
        }
      </Grid> 
    </Container>

  )
}
