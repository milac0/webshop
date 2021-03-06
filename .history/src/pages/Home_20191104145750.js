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
        products.map((product, index) => {
            // const { image, name, categoryPath, regularPrice } = product;
            return (
                <Product key={index} product />
                // <Product title={name} image={image} price={regularPrice} category={categoryPath}/>
            )
        })
      )}
    </div>
  );
};

export default Home;
