import React, { Fragment } from 'react';
import { Grid, CardMedia } from '@material-ui/core';

const CartProduct = ({ name, image, price, count }) => {
    return (
        <Fragment>
            <Grid container>
                <Grid item>
                   <img src={image} />
                </Grid>
                <Grid item>
                    {name}
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    {price}$
                </Grid>
                <Grid item>
                    {count}
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default CartProduct;