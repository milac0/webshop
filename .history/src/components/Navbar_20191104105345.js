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
        color: 'white',
        display: 'block'
    }
}

const Navbar = ({ classes }) => {
    return (
       <AppBar position="static">
           <Toolbar>
                <Link to="/">
                    <Typography variant="h6" className={classes.title}>Webshop</Typography>
                </Link>
                <Button variant="contained" component={Link} to="/cart">My Cart</Button>
           </Toolbar>
       </AppBar>
    );
};

export default withStyles(styles)(Navbar);