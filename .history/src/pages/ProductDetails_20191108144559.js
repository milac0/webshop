import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
//mui
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
  },
  card: {
    maxWidth: 345,
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

  const { name, plot, image } = product;
  console.log(product)
  return (<Fragment>
        
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  </Fragment>

  );
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps)(ProductDetails);
