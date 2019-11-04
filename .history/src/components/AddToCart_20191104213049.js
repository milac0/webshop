import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    root: {
      background: '#3F51B5',
      color: 'white',
      padding: '0.75em 2em',
      width: '100%',
      '& :hover': {
          background: '#233072'
      }
    }

  });

const AddToCart = () => {
    const classes = useStyles();

    return (
        <Button className={classes.root}>
          <ShoppingCartIcon /> ADD TO CART
        </Button>
    );
};

export default AddToCart;