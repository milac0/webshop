import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/dataActions";
import { Link } from "react-router-dom";
//mui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useState } from "react";

const useStyles = makeStyles({
  button: {
    background: "var(--primaryBlue)",
    "&:hover": {
      background: "var(--secondaryBlue)"
    },
    color: "white",
    padding: "0.75em 2em",
    width: "100%"
  }
});

const AddToCart = ({ product, addProduct }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClick = product => {
    setOpen(!open);
    addProduct(product);
  };

  const handleClose = () => {
    setOpen(!open);
    window.location.pathname="/"

  };

  return (
    <Fragment>
      <Button className={classes.button} onClick={() => handleClick(product)}>
        <ShoppingCartIcon /> ADD TO CART
      </Button>
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

export default connect(
  null,
  { addProduct }
)(AddToCart);
