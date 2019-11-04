import React from "react";
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart';
//mui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  contentPrice: {
    padding: 0
  },
  card: {
    width: 190
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price: {
    padding: 12,
    paddingLeft: 0
  },
  link: {
    textDecoration: 'none'
  }
  
}));

const Product = props => {
  const classes = useStyles();
  const { image, name, regularPrice, categoryPath, sku } = props.product;
  const slicedName = name.length > 25 ? `${name.slice(0,25)}...` : name;
  const categoryPathName = categoryPath[2].name.length > 17 ? `${categoryPath[2].name.slice(0,17)}...` : categoryPath[2].name;
  return (
    <Link to={`/product/${name}/${sku}`} className={classes.link}>
    <Card className={classes.card} >
      <CardHeader title={slicedName} subheader={categoryPathName} />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
 
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.price}
            >
              Price: {regularPrice}
            </Typography>

      </CardContent>
      <AddToCart />
    </Card>
    </Link>
  );
};

export default Product;
