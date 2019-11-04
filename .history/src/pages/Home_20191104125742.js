import React, { useEffect, useState } from 'react';
import Product from './../components/Product';
import axios from 'axios'
//mui
// const bby = require('bestbuy')('ZCwkqvoihaTeEEKDARrc5ske');
// bby.categories('',{show:'id'}).then(function(data){
//   console.log(data);
// });

const Home = () => {
    const [categories, setCategories] = useState({})
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('https://api.bestbuy.com/v1/categories?format=json&apiKey=ZCwkqvoihaTeEEKDARrc5ske&show=id')
        setCategories(response.data.categories)
      }
      fetchData()
    }, [])
    console.log(categories)
    return (
        <div>
            <Product />
            
        </div>
    );
};

export default Home;