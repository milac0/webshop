import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router'
//mui
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const CheckoutButton = () => {
    const [open, setOpen] = useState(false)
        const handleCheckout = () => {
        //display an alert and clear the current cart
      };

      const handleClose = () => {
        setOpen(!open)
      }
    
    return (
        <Fragment>
        <Button onClick={handleCheckout}>Checkout</Button>
        <Dialog onClose={handleClose} aria-labelledby="added-to-cart" open={open}>
        <DialogTitle>Added to cart</DialogTitle>
        <List>
          <ListItem autoFocus button component={Link} to="/cart">
            <ListItemText primary="Go to Cart" />
          </ListItem>
          <ListItem autoFocus button onClick={handleClose}>
            <ListItemText primary="Continue shopping" />
          </ListItem>
        </List>
      </Dialog>
        </Fragment>
        
    );
};

export default CheckoutButton;