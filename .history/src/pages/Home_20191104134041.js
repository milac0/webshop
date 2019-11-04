import React, { useEffect, useState } from 'react';
import Product from './../components/Product';
import axios from 'axios'
//mui
var bby = require('bestbuy')(process.env.REACT_APP_API_KEY);
    bby.categories('(name=Music)', {pageSize: 1}, function(err, data) {
      if (err) console.warn(err);
      else if (data.total === 0) console.log('No categories found');
      else console.log('Found %d categories. First category (%s): %s', data.total, data.categories[0].id, data.categories[0].name);
    });

const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://api.bestbuy.com/v1/categories?format=json&apiKey=${process.env.REACT_APP_API_KEY}&show=name`)
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