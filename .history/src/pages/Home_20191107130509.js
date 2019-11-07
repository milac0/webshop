import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Product from "../components/Product";
import { connect } from 'react-redux' 
import { getProducts, setCartOnLoad } from "../redux/actions/dataActions"
import { getCartFromLocalStorage } from './../util/funcs';
//mui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const Home = (props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
      handleClick(1)
  }, []);

  const handleClick = (number) => {
    setPage(page + number)
    props.getProducts(page);
      if(getCartFromLocalStorage() !== null ) {
        props.setCartOnLoad(getCartFromLocalStorage())
      }
  }

  // const previousPage = () => {
  //   setPage(page - 1)
  //   props.getProducts(page);
  //     if(getCartFromLocalStorage() !== null ) {
  //       props.setCartOnLoad(getCartFromLocalStorage())
  //     }
  // }
    
  return (
    <div style={{width: '95%', margin: '2em auto'}} >
      <Grid container spacing={3}>
        {!props.products ? (
          <h5>Loading</h5>
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
      
      <Button onClick={() => handleClick(-1)}>previous</Button><Typography display="inline">{page-1}</Typography><Button onClick={() => handleClick(1)}>next</Button>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.products
})


export default connect(mapStateToProps, { getProducts, setCartOnLoad })(Home);
