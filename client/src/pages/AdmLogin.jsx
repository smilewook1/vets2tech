import React, {useState} from 'react';
import {TextField, Snackbar, Button, FormControlLabel, Typography, Box, Container, Grid} from '@mui/material/';
import axios from 'axios'
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const AdmLogin = () => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      const navigate = useNavigate();
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

    const handleAdd = () => {
        const url = "https://localhost:44439/api/admin/login"
        const data = {
            "Admin": {
            "email": email,
            "passwordHash": password}
            
        }
        
        axios.post(url, data)
          .then((result)=>{
            console.log('Added')
            setBarOpen(true)
            navigate("/dash")
          })
          .catch((error) => {
            console.log(error)
          })
      }

  return(
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
            Log In for Admin
        </Typography>
        <Box sx={{ mt: 3 }}>
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
          
          <Button
              type="submit"
              fullWidth
              variant="contained" sx={{ mt: 3, mb: 2 }}
              onClick={handleAdd}
              > LOG IN
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

      {setBar(mod)}
    </Container>
  );

}

export default AdmLogin;