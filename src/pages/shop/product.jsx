import React, { useCallback, useContext } from 'react';
import "../../App.css";
import ShopContext from '../../context/shop-context'

export const Product = (props) => {
     const {id, productName, price, productImage} = props.data;
     const { addToCart } = useContext(ShopContext);
    
     return (
          <div className='product'>
               <img src={productImage} />
               <div>
                    <p>{productName}</p>
                    <p>{price}</p>
               </div>
               <button className="cart-button" 
                    onClick={() =>addToCart(id)}
               >
                    Add To Cart 
               </button>
          </div>
    )
};

