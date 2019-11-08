import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddToCart from "../components/AddToCart";
//mui
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1em auto",
    padding: "1em",
    maxWidth: 400,
  },
  media: {
    maxWidth: 300,
    margin: "0.5em auto",
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  typo: {
    marginBottom: "0.75em",
    fontSize: "1rem"
  },
  review: {
    fontSize: "1rem",
    fontWeight: 500,
    margin: '1.5em 0 2em 0'
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

  const {
    name,
    plot,
    image,
    department,
    customerReviewAverage,
    shippingWeight,
    shortDescription,
    mpaaRating
  } = product;

  return (
    <Card className={classes.root}>
      <Typography variant="h5" component="h3">
        {name}
      </Typography>
      {image ? (
        <CardMedia className={classes.media} image={image} title="Product" />
      ) : (
        <h1>Loading</h1>
      )}

      <Typography className={classes.typo} variant="h3">
        {department ? department : null}
      </Typography>
      <Typography className={classes.typo} variant="h3">
        {shortDescription ? `Description: ${shortDescription}` : null}
      </Typography>
      <Typography className={classes.typo} variant="h3">
        {mpaaRating ? `MPAA rating: ${mpaaRating}` : null}
      </Typography>
      <Typography className={classes.typo} variant="h3">
        Shipping weight: {shippingWeight}
      </Typography>
      <Typography className={classes.typo} component="p">
        {plot ? `Plot: ${plot}` : null}
      </Typography>
      <Typography className={classes.review} variant="h3">
        Customer review:{" "}
        {customerReviewAverage ? customerReviewAverage : "unrated"}/5
      </Typography>
      <AddToCart product={product}/>
    </Card>
  );
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(ProductDetails);
