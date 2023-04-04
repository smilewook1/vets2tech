import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
                <ListItemText primary="Approve Registration" />
                </Link>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <Link to='/profile'>
                <ListItemText primary="Create profile" />
                </Link>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <Link to='/data'>
                <ListItemText primary="Edit data" />
                </Link>
            </ListItemButton>
        </React.Fragment>
    )
}

export default SideMenu;