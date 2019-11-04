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



const Navbar = () => {
    return (
        <header>
            <p>Webshop</p>
            <nav>
                <ul>
                    <li>search</li>
                    <li><Button>My Cart</Button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
