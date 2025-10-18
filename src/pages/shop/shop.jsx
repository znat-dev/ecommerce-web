import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';

const Shop = (props) => {
  return (
    <div>
      <div>
        <h1>Shopping</h1>
      </div>
      <div className='products'>
            {PRODUCTS.map((product) => (
            <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;