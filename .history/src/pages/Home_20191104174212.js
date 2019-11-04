import React, { useEffect, useState, Fragment } from "react";
import Product from "../components/Product";
import { connect } from 'react-redux' 
import getProducts from "../redux/actions/dataActions"
//mui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
      getProducts();
  }, [page]);

  const handleClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div style={{width: '95%', margin: '2em auto'}} >
      <Grid container spacing={2}>
        {!products ? (
          <h5>Loading</h5>
        ) : (
          products.map((product, index) => {
            return (
              <Grid item key={index}>
                <Product product={product} />
              </Grid>
            );
          })
        )}
      </Grid>
      
      <Typography display="inline">{page}</Typography><Button onClick={handleClick}>next</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, getProducts)(Home);
