import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
//mui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  card: {
    width: 190,
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price: {
    textAlign: 'left',
    fontWeight: 500
  },
  link: {
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  header: {
    color: 'black',
    fontSize: 16
  },
  subheader: {
    color: 'grey',
    fontSize: 12
  }
}));

const Product = props => {
  const classes = useStyles();
  const { image, name, regularPrice, categoryPath, sku } = props.product;
  const slicedName = name.length > 20 ? `${name.slice(0, 17)}...` : name;
  const categoryPathName =
    categoryPath[2].name.length > 27
      ? `${categoryPath[2].name.slice(0, 24)}...`
      : categoryPath[2].name;
  return (
    <Card className={classes.card}>
      <Link to={`/product/${name}/${sku}`} className={classes.link}>
        <Typography className={classes.header}>{slicedName}</Typography>
        <Typography className={classes.subheader}>{categoryPathName}</Typography>
        <CardMedia className={classes.media} image={image} title={name} />
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.price}
          >
            Price: {regularPrice}
          </Typography>
      </Link>
      <AddToCart product={props.product}/>
    </Card>
  );
};

export default Product;
