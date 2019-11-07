import React from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import { connect } from 'react-redux';
import { getProductDetails } from '../redux/actions/dataActions'
//mui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  card: {
    width: 180,
    padding: '0.5em'
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price: {
    textAlign: 'center',
    padding: '1em 0',
    fontSize: '1rem'
  },
  link: {
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
    }
  },
  header: {
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
  const skuId = useParams()
  const classes = useStyles();
  const { image, name, regularPrice, categoryPath, sku } = props.product;
  const slicedName = name.length > 20 ? `${name.slice(0, 17)}...` : name;
  const categoryPathName =
    categoryPath[2].name.length > 27
      ? `${categoryPath[2].name.slice(0, 24)}...`
      : categoryPath[2].name;

  const handleClick = () => {
    props.getProductDetails(skuId);
  }

  return (
    <Card className={classes.card}>
      <Link className={classes.link} onClick={handleClick}>
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

export default connect(null, { getProductDetails })(Product);
