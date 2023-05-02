import { Typography, Box, IconButton, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';



export default function Header() {
    return (
        
      <Box sx={{ flexGrow: 1, bgcolor: 'pink' }}>
        <AppBar position="static" sx={{bgcolor: 'text.secondary' }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              ADMIN
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }