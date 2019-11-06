import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "../redux/actions/dataActions";
//mui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: '95%',
    margin: "1em auto",
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    "& h5": {
      fontSize: "1rem"
    }
  },
  cover: {
    width: "15em",
    objectFit: "cover"
  },
  controls: {
    display: "flex",
    alignItems: "center"
  }
}));

const CartProduct = props => {
  const { name, image, regularPrice: price } = props.product;
  const [count, setCount ] = useState(props.product.count)
  const classes = useStyles();

  const handleAdd = () => {
    setCount(count + 1)
    props.addProduct(props.product)
    const cartString = localStorage.getItem('cart')
      const cart = JSON.parse(cartString)
      props.updateCart(cart)
  }

  const handleSubtract = () => {
    if(count > 1) {
    setCount(count - 1)
    } 
      props.removeProduct(props.product)
      const cartString = localStorage.getItem('cart')
      const cart = JSON.parse(cartString)
      props.updateCart(cart)
    }
  }

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {price}$
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="remove"
          onClick={handleSubtract}>
            <RemoveIcon />
          </IconButton>
          {count}
          <IconButton
            aria-label="add"
            onClick={handleAdd}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="cart product"
      />
    </Card>
  );
};

export default connect(
  null,
  { addProduct, removeProduct }
)(CartProduct);
