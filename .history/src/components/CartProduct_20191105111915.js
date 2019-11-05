import React, { Fragment } from 'react';
//mui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';




const useStyles = makeStyles(theme => ({
    card: {
        width: '90%',
        maxWidth: 420,
        margin: '0 auto',
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      '& h5': {
          fontSize: '1rem'
      }
    },
    cover: {
      width: '15em',
      objectFit: 'cover'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

const CartProduct = ({ name, image, price, count }) => {
    const classes = useStyles()
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
          <IconButton aria-label="previous">
          <RemoveIcon />
          </IconButton>
            {count}
          <IconButton aria-label="next">
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

export default CartProduct;