import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

const AddToCart = ({ product }) => {
    const classes = useStyles();
    const handleClick = product => {

    }

    return (
        <Button className={classes.root} onClick={handleClick(product)}>
          <ShoppingCartIcon /> ADD TO CART
        </Button>
    );
};

export default AddToCart;