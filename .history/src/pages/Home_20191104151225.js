import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Product from "../components/Product";
//mui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json&page=${page}`
      );
      setProducts(response.data.products);
      console.log(response.data);
    };

    fetchData();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Grid container>
        {!products ? (
          <h5>Loading</h5>
        ) : (
          products.map((product, index) => {
            return (
              <Grid item>
                <Product key={index} product={product} />
              </Grid>
            );
          })
        )}
      </Grid>
      <Typography>{page}</Typography>
      <Button onClick={handleClick}>next page</Button>
    </div>
  );
};

export default Home;
