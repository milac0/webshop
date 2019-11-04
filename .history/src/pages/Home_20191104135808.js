import React, { useEffect, useState } from 'react';
import axios from 'axios'
//mui
// var bby = require('bestbuy')('ZCwkqvoihaTeEEKDARrc5ske');
// bby.categories('',{show:'id'}).then(function(data){
//   console.log(data);
// });


const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://api.bestbuy.com/v1/categories?format=json&apiKey=${process.env.REACT_APP_API_KEY}`)
        setCategories(response.data.categories)
      }
      fetchData()
    }, [])
    console.log(categories)
    return (
        <div>
            {categories ? categories.map((cat, i) => <h1 key={i}>{cat.name}</h1>) : <h1>Loading</h1>}
        </div>
    );
};

export default Home;