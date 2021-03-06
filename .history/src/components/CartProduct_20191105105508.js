import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const CartProduct = ({ name, thumbnail, price, count }) => {
    return (
        <Fragment>
            <Grid container>
                <Grid item>
                   {thumbnail}
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