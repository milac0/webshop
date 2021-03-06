import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/actions/dataActions";
import { connect } from "react-redux";
//mui
import Image from 'material-ui-image'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProductDetails = props => {
  const { skuId } = useParams();
  console.log(props.product);
  useEffect(() => {
    props.getProductDetails(skuId);
  }, []);
  const classes = useStyles();
  const { name, plot, image } = props.product;
  
  return !props.product ? (
    <h3>Loading</h3>
  ) : (
    <Paper className={classes.root}>
      <img src={image} alt="product" />
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
