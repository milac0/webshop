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
    padding: '1em'
  },
  media: {
    borderTop: '1px solid var(--primaryBlue)',
    borderBottom: '0.5px solid var(--primaryBlue)',
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price: {
    textAlign: 'center',
    fontWeight: 500,
    padding: '1em 0'
  },
  link: {
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  header: {
    marginTop: '0.5em',
    color: 'black',
    fontSize: '1rem'
  },
  subheader: {
    color: 'grey',
    fontSize: '0.75rem',
    marginBottom: '1em'
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
            {regularPrice}$
          </Typography>
      </Link>
      <AddToCart product={props.product}/>
    </Card>
  );
};

export default Product;
