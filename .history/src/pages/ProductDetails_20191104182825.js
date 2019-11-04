import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../redux/actions/dataActions";
import { connect } from "../redux/actions/dataActions"
//mui
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ProductDetails = (props) => {
  const { productName, skuId } = useParams();
  console.log(productName, skuId, props.product);

  useEffect(() => {
    getProductDetails(skuId);
  },
  []);
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

const mapStateToProps = state => ({
  product: state.product
})

export default connect(mapStateToProps, getProductDetails)(ProductDetails);
