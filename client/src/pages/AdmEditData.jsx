import React, {useState, useEffect} from 'react';
import { Grid, Snackbar, Container, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import MuiAlert from '@mui/material/Alert';

const AdmEditData = () => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    
      const[lastname, setLastname] = useState('')
      const[firstname, setFirstname] = useState('')
      const[email, setEmail] = useState('')
      const[password, setPassword] = useState('')
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

      const handleUpdate=()=>{
        const url = `https://localhost:44439/api/admin`
        const data = {
          "firstName": firstname,
          "lastName": lastname,
          "email": email,
          "passwordHash": password
        }
        
        axios.put(url,data)
        .then((result)=>{
          clear()
          setBarOpen(true)
          setMod('Edited')
        })
        .catch((error)=>{
          console.log(error)
        })
        console.log(data)
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
                Update Profile for Admin
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                  <Grid item xs={6}>
                      <TextField
                          required
                          fullWidth
                          label="CHANGE FIRST NAME"
                          value={firstname}
                          onChange={(event) => {
                              setFirstname(event.target.value);
                          }}/>
                  </Grid>
                  <Grid item xs={6}>
                      <TextField
                          required
                          fullWidth
                          label="CHANGE LAST NAME"
                          value={lastname}
                          onChange={(event) => {
                              setLastname(event.target.value);
                          }} />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          required
                          fullWidth
                          label="CHANGE EMAIL ADDRESS"
                          value={email}
                          onChange={(event) => {
                              setEmail(event.target.value);
                          }} />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          required
                          fullWidth
                          label="CHANGE PASSWORD"
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
                  onClick={handleUpdate}
                  > CREATE
              </Button>
              
              <Button
              type="submit"
              fullWidth
              variant="contained" sx={{ mt: 3, mb: 2 }}
              href='/dash'
              >GO BACK
              </Button>
            </Box>
          </Box>
    
          {setBar(mod)}
        </Container>
    
      )
};
  
  export default AdmEditData;
