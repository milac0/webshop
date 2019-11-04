import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Product from '../components/Product'
import { Link } from "react-router-dom";
//mui

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json`
      );
      setProducts(response.data.products);
      console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {!products ? (
        <h5>Loading</h5>
      ) : (
        products.map(product => <Product />)
      )}
    </div>
  );
};

export default Home;
