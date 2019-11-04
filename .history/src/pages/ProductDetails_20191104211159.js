import React, { useEffect } from "react";
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
    margn: '0 auto'
  },
  media: {
    maxWidth: 300,
    height: 0,
    paddingTop: '56.25%', // 16:9
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
