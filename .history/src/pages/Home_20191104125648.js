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
        console.log(response.data.categories)
        setCategories(response.data.categories)
      }
      fetchData()
    }, [])
    return (
        <div>
            <Product />
            {categories.map(cat => <h1>{cat.id}</h1>)}
        </div>
    );
};

export default Home;