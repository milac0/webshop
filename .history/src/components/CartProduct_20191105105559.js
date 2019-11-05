import React, { Fragment } from 'react';
import { Grid, CardMedia } from '@material-ui/core';

const CartProduct = ({ name, thumbnail, price, count }) => {
    return (
        <Fragment>
            <Grid container>
                <Grid item>
                   <CardMedia image={thumbnail} />
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