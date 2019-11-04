import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Product from '../components/Product'
//mui
import Button from '@material-ui/core/Button'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
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
      setPage(page+1)
  }

  return (
    <div>
      {!products ? (
        <h5>Loading</h5>
      ) : (
        products.map((product, index) => {
            return (
                <Product key={index} product={product} />                
            )
        })
      )}
      <Button onClick={handleClick}>next page</Button>
    </div>
  );
};

export default Home;
