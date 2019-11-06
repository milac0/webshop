import React, { Fragment } from "react";
import { useState } from "react";
import { connect } from 'react-redux';
import { clearCart } from '../redux/actions/dataActions'
import { getCartFromLocalStorage } from './../util/funcs';
//mui
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: '1em',
        background: "var(--primaryBlue)",
        "&:hover": {
          background: "var(--secondaryBlue)"
        },
        color: "white",
        padding: "0.75em 2em",
        width: "5em"
      }
})

const CheckoutButton = ({ clearCart, updateCart}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles()
  const handleCheckout = () => {
    setOpen(!open);
    clearCart()
    updateCart(getCartFromLocalStorage())
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Button onClick={handleClose} className={classes.root}>Checkout</Button>
      <Dialog onClose={handleClose} aria-labelledby="added-to-cart" open={open}>
        <DialogTitle>Added to cart</DialogTitle>
        <List>
          <ListItem autoFocus button onClick={handleCheckout}>
            <ListItemText primary="Proceed" align="center"/>
          </ListItem>
          <ListItem autoFocus button onClick={handleClose}>
            <ListItemText primary="Cancel" align="center"/>
          </ListItem>
        </List>
      </Dialog>
    </Fragment>
  );
};

export default connect(null, { clearCart }) (CheckoutButton);
