import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//mui
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 400,
    margin: "0 auto"
  },
  media: {
    maxWidth: 300,
    margin: "0 auto",
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

const ProductDetails = props => {
  const isEmpty = obj => {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  };
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!isEmpty(props.product)) {
      setProduct(props.product);
    } else {
      try {
        const productString = localStorage.getItem("product");
        setProduct(JSON.parse(productString));
      } catch {
        setProduct({});
      }
    }
  }, []);

  const { name, plot, image, department, customerReviewAverage, shippingWeight, shortDescription, mpaaRating } = product;
console.log(product)
  return (
    <Card className={classes.root}>
<Typography variant="h5" component="h3">
        {name}
      </Typography>
      {image ? <CardMedia className={classes.media} image={image} title="Product" /> : <h1>Loading</h1>}
      
      <Typography variant="h5" component="h3">
        {department}
      </Typography>
      <Typography variant="h5" component="h3">
      Description: {shortDescription}
      </Typography>
      <Typography variant="h5" component="h3">
      {mpaaRating ? `MPAA rating: ${mpaaRating}` : null}
      </Typography>
      <Typography variant="h5" component="h3">
      Shipping weight: {shippingWeight} 
      </Typography>
      <Typography variant="h5" component="h3">
        Customer review: {customerReviewAverage ? customerReviewAverage : 'unrated'}/5
      </Typography>
     
        
      
      <Typography component="p">{plot}</Typography>
    </Card>
  );
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(ProductDetails);
