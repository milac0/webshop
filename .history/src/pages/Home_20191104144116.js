import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
//mui

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json`)
        setProducts(response.data)
        console.log(response.data)
      }
      
      fetchData()
    }, [])

    return (
        <div>
            hej
        </div>
    );
};

export default Home;