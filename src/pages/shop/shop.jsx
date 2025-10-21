import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './product';
import '../../App.css';

const Shop = (props) => {
  return (
    <div>
      <div className='shop-title'>
        <h1>Shopping Lists</h1>
      </div>
     <b> <div className='products'>
           {PRODUCTS.map((product) => (
            <Product data={product} /> ))} 
         </div>
     </b>
    </div>
  );
};

export default Shop;