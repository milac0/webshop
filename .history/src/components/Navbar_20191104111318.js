import React from 'react';
import { Link } from 'react-router-dom';
//mui
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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
                <Link to="/">
                    <Typography variant="h6" className={classes.title}>Webshop</Typography>
                </Link>
                <div>
            <div>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                <Button variant="contained" >My Cart</Button>
           </Toolbar>
       </AppBar>
    );
};

export default withStyles(styles)(Navbar);