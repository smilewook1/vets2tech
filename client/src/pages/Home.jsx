import React from 'react'
import Dashboard from '../components/Dashboard';
import { useState } from 'react';
import { Button } from '@mui/material';
import ModalDialog from '../style/ModalDialog';

export default function Home() {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>

      <Button variant="contained" color="primary" onClick={handleOpen}>
        Signup
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />

      <Dashboard/>
    </React.Fragment>
  )
}
