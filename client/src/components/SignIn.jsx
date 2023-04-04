import React, {useState} from 'react';
import {TextField, Checkbox, Button, FormControlLabel, Typography, Box, Container, Grid} from '@mui/material/';

const Signin = () => {
  
  return(
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
                    Sign in
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="email address"
                                required
                                fullWidth
                                name="email"
                                autoComplete="email"
                                autoFocus />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="password"
                                type="password"
                                required
                                fullWidth
                                name="password"
                                autoComplete="current-password" />
                        </Grid>
                    </Grid>

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained" sx={{ mt: 3, mb: 2 }}> sign in
                    </Button>
                </Box>
            </Box>
        </Container>
  );

}

export default Signin;