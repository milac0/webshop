import React, { Fragment, useEffect } from "react";
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
//mui
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProductDetails = () => {
    const { productName, skuId } = useParams()
        console.log(productName, skuId)

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await axios.get(
                `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json&sku=${skuId}`)
                console.log(response.data)
        }
        fetchProductDetails()
    })
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  );
};

export default ProductDetails;
