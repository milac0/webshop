import React, { useEffect, useState, Fragment } from 'react';
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
        const response = await axios.get(`https://api.bestbuy.com/v1/categories?apiKey=ZCwkqvoihaTeEEKDARrc5ske&page=4`)
        setCategories(response.data.categories)
      }
      fetchData()
    }, [])
    console.log(categories)
    return (
        <div>
            {categories ? categories.map((cat, i) => {return (
                <Fragment key={i}>
                <h1>{cat.name}</h1>
                </Fragment>

            )}) : <h1>Loading</h1>}
        </div>
    );
};

export default Home;