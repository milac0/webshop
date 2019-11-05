import React, { Fragment } from 'react';
//mui
import { Grid, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {

    },
    media: {
        height: 50
    }
}))

const CartProduct = ({ name, image, price, count }) => {
    const classes = useStyles()
    return (
        <Fragment>
            <Grid container>
                <Grid item>
                <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
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