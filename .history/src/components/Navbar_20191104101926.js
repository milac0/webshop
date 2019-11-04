import React from 'react';
import { NavLink } from 'react-router-dom';
//mui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const Navbar = () => {
    return (
       <AppBar>
           <Toolbar>
                <NavLink to="/">
                    <Typography variant="h6">Webshop</Typography>
                </NavLink>
                <Button component={NavLink} to="/cart">My Cart</Button>
           </Toolbar>
       </AppBar>
    );
};

export default Navbar;