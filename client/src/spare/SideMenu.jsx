import React from 'react';
import { Button, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <Link to='/registration'>
                <Button
                    fullWidth
                    variant="outlined" sx={{ mt: 3, mb: 2 }}
                    color='secondary'
                    > Approve Registration </Button>
                </Link>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <Link to='/profile'>
                <Button
                    fullWidth
                    variant="outlined" sx={{ mt: 3, mb: 2 }}
                    color='success'
                    > Create Profile </Button>
                </Link>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <Link to='/data'>
                <Button
                    fullWidth
                    variant="outlined" sx={{ mt: 3, mb: 2 }}
                    color='error'
                    > Edit Data </Button>
                </Link>
            </ListItemButton>
        </React.Fragment>
    )
}

export default SideMenu;