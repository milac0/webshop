import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  contentPrice: {
    padding: 0
  },
  card: {
    width: 210
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  price: {
    padding: 12,
    paddingLeft: 0
  }
}));

const Product = props => {
  const classes = useStyles();
  const { image, name, regularPrice, categoryPath } = props.product;
  const slicedName = name.length > 25 ? `${name.slice(0,25)}...` : name;
  return (
    <Card className={classes.card}>
      <CardHeader title={slicedName} subheader={categoryPath[0].name} />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Grid container justify="center" alignContent="center" className={classes.contentPrice}>
          <Grid item xs={9}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.price}
            >
              Price: {regularPrice}
            </Typography>
          </Grid>
          <Grid item xs={3} align="right">
            <Tooltip title="Add to Cart">
              <IconButton aria-label="Add to Cart">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;
