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
        const response = await axios.get(`https://api.bestbuy.com/v1/categories?format=json&apiKey=${process.env.REACT_APP_API_KEY}&page=2`)
        setCategories(response.data.categories)
      }
      fetchData()
    }, [])
    console.log(categories)
    return (
        <div>
            {categories ? categories.map((cat, i) => {return (
                <Fragment key={i}>
                <Link to={cat.url}><h5>{cat.name}</h5></Link>
                </Fragment>

            )}) : <h1>Loading</h1>}
        </div>
    );
};

export default Home;