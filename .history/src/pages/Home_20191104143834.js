import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
//mui
var bby = require('bestbuy')('ZCwkqvoihaTeEEKDARrc5ske');
bby.recommendations('trendingViewed','abcat0106000').then(function(data){
  console.log(data);
});





const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json`)
        setCategories(response.data)
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