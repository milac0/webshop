import React from 'react';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const AddToCart = () => {
    return (
        <Button style={{width: '95%', margin: '0 auto'}}>
          <ShoppingCartIcon /> ADD TO CART
        </Button>
    );
};

export default AddToCart;