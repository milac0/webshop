import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/dataActions";
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
    width: "90%",
    maxWidth: 420,
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
  const { name, image, regularPrice: price, count } = props.product;

  useEffect(() => {
    
  }, [count]);
  const classes = useStyles();

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
          <IconButton aria-label="remove">
            <RemoveIcon />
          </IconButton>
          {count}
          <IconButton
            aria-label="add"
            onClick={() => props.addProduct(props.product)}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Card>
  );
};

export default connect(
  null,
  { addProduct }
)(CartProduct);
