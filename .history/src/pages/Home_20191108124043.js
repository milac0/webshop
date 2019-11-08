import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "../components/Product";
import { connect } from "react-redux";
import { getProducts, setCartOnLoad } from "../redux/actions/dataActions";
import { getCartFromLocalStorage } from "./../util/funcs";
//mui
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  pagination: {
    width: '20em',
    margin: '0 auto',
    marginTop: '2em',
  },
  flex: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  form: {
    textAlign: 'center'
  },
  input: {
    width: '4em',
    padding: '0.25em',
    fontWeight: '600'
  }
}))

const Home = props => {
  const [page, setPage] = useState(1);
  const classes = useStyles()
  useEffect(() => {
    props.getProducts(page);
    if (getCartFromLocalStorage() !== null) {
      props.setCartOnLoad(getCartFromLocalStorage());
    }
  }, []);

  const handleClick = number => {
    if(page === 1 && number === -1 && page < props.totalPages) {
      return
    }
    setPage(page + number);
    props.getProducts(page + number);
    if (getCartFromLocalStorage() !== null) {
      props.setCartOnLoad(getCartFromLocalStorage());
    }
  };

  const handleInput = e => {
      e.preventDefault()
      props.getProducts(page) 
  }

  const handleChange = e => {
    if(!isNaN(e.target.value) && e.target.value >= 0){
      setPage(e.target.value)
    }
  }

  return (
    <div style={{ width: "95%", margin: "2em auto" }}>
      <Grid container spacing={1}>
        {props.products.length === 0 ? (
          <h5>Loading...</h5>
        ) : (
          props.products.map((product, index) => {
            return (
              <Grid item key={index}>
                <Product product={product} />
              </Grid>
            );
          })
        )}
      </Grid>
<div className={classes.pagination}>
<div className={classes.flex}>
      <Button onClick={() => handleClick(-1)}>previous</Button>
      <Typography>{`${page} of ${props.totalPages}`}</Typography>
      <Button onClick={() => handleClick(1)}>next</Button>
      </div>
      <form onSubmit={handleInput} className={classes.form}>
      <Button>Go to</Button>
      <input type="text" name="pageNumber" value={page} onChange={handleChange} className={classes.input}/>

      </form>
</div>


    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
  totalPages: state.totalPages
});

export default connect(
  mapStateToProps,
  { getProducts, setCartOnLoad }
)(Home);
