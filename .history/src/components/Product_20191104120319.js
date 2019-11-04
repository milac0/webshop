import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 }));

const Product = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title="Name of the product"
        subheader="Category"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KgyBnsZzssBH6xWAtd_R8I9KRlk2Fa3v5Duiym4Bu_FF0qcdpg&s"
        title="Title"
      />
      <CardActions spacing="1">
      <Typography variant="body2" color="textSecondary" component="p">
          Price: 18$
        </Typography>
        <IconButton aria-label="Add to Cart">
          <AddIcon />
        </IconButton>
        </CardActions>
    </Card>
  );
}

export default Product;