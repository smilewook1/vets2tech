import React, {useState} from 'react';
import {TextField, Button, Typography, Box, Container, Grid} from '@mui/material/';
import Axios from 'axios';

function Signup () {
    const [firstName, setFname] = useState("");
    const [lastName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPwd] = useState(0);


    const addEmployee = () => {
        Axios.post("http://localhost:3001/signup/aa", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then(() => {
            console.log("success");
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Create Profile
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus 
                                onChange={(event) => {
                                    setFname(event.target.value);
                                }}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                onChange={(event) => {
                                    setLname(event.target.value);
                                }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="email address"
                                required
                                fullWidth
                                name="email"
                                autoComplete="email"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="password"
                                type="password"
                                required
                                fullWidth
                                name="password"
                                autoComplete="current-password"
                                onChange={(event) => {
                                    setPwd(event.target.value);
                                }} />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained" sx={{ mt: 3, mb: 2 }}
                        onClick={addEmployee}
                        > sign up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Signup;