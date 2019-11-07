import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/actions/dataActions";
import { connect } from "react-redux";
//mui
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 400,
    margin: '0 auto'
  },
  media: {
    maxWidth: 300,
    margin: '0 auto',
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const ProductDetails = props => {
  const { skuId } = useParams();
  const [product, setProduct] = useState({})
  console.log(props.product);
  useEffect(() => {
    props.getProductDetails(skuId);
    localStorage.setItem('product', JSON.stringify(props.product))
    if(!props.product){
      const productString = localStorage.getItem('product')
      setProduct(JSON.parse(productString))
    }
  }, []);
  const classes = useStyles();
  const { name, plot, image } = props.product;
  
  return !props.product ? (
    <h3>Loading</h3>
  ) : (
    <Paper className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Product"
      />
      <Typography variant="h5" component="h3">
        {name}
      </Typography>
      <Typography component="p">{plot}</Typography>
    </Paper>
  );
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProductDetails }
)(ProductDetails);
