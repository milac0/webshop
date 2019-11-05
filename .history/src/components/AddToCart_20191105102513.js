import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { addProduct } from '../redux/actions/dataActions'
//mui
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
      background: '#3F51B5',
      '&:hover': {
          background: '#263aa0'
      },
      color: 'white',
      padding: '0.75em 2em',
      width: '100%'
    },
  });

const AddToCart = ({ product, addProduct }) => {
  const [open, setOpen] = useState(false)
    const classes = useStyles();
    const handleClick = product => {
        addProduct(product)
    }

    const handleClose = () => {
      setOpen(!open)
    }

    return (
      <Fragment>
        <Button className={classes.root} onClick={() => handleClick(product)}>
          <ShoppingCartIcon /> ADD TO CART
        </Button>
<Dialog onClose={handleClose} aria-labelledby="added-to-cart" open={open}>
      <DialogTitle>Added to cart</DialogTitle>
      <List>
                <ListItem autoFocus button>
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

export default connect(null, { addProduct })(AddToCart);