import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Snackbar, TextField, Button, Typography, Box, Container, Grid} from '@mui/material/'
import axios from 'axios'
import MuiAlert from '@mui/material/Alert';

export default function CmpCreateProfile(){
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const[name, setName] = useState('')
  const[phone, setPhone] = useState('')
  const[email, setEmail] = useState('')

  const [barOpen, setBarOpen] = useState(false);
  const handlebarClose = () => setBarOpen(false);
  const navigate = useNavigate();

  const handleAdd = () => {
    const url = "https://localhost:44439/api/company"
    const data = {
        "companyName": name,
        "phone": phone,
        "email": email,
    }
    axios.post(url, data)
    .then((result)=>{
      console.log('Added')
      clear();
      setBarOpen(true)
        navigate("/empprofile")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const clear=()=>{
    setEmail('')
    setName('')
    setPhone('')
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
            Create Profile for Company
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      label="COMPANY NAME"
                      value={name}
                      onChange={(event) => {
                          setName(event.target.value);
                      }}/>
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      required
                      fullWidth
                      label="PHONE"
                      value={phone}
                      onChange={(event) => {
                          setPhone(event.target.value);
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
