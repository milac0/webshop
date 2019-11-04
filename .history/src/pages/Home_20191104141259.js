import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios'
//mui
var bby = require('bestbuy')('ZCwkqvoihaTeEEKDARrc5ske');
bby.products('customerReviewAverage>=4&customerReviewCount>100',{show:'customerReviewAverage,customerReviewCount,name,sku'}).then(function(data){
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
                <h5>{cat.name}</h5>
                </Fragment>

            )}) : <h1>Loading</h1>}
        </div>
    );
};

export default Home;