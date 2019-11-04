import React from 'react';
import { Link } from 'react-router-dom';
//mui
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
    title: {
        textDecoration: 'none',
        color: 'white'
    }
}

const Navbar = ({ classes }) => {
    return (
       <AppBar position="static">
           <Toolbar>

                    <Typography variant="h6" className={classes.title} component={Link} to="/">Webshop</Typography>

                <Button variant="contained" >My Cart</Button>
           </Toolbar>
       </AppBar>
    );
};

export default withStyles(styles)(Navbar);