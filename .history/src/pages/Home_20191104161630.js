import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Product from "../components/Product";
//mui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json&page=${page}`
      );
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    };

    fetchData();
  }, [page]);

  const handleClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div style={{width: '90%'}} >
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
      <Typography>{page}</Typography>
      <Button onClick={handleClick}>next page</Button>
    </div>
  );
};

export default Home;
