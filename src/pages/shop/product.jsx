import React from 'react';
import "../../App.css";

export const Product = (props) => {
     const {id, productName, price} = props.data;
    return (
          <div className='market'>
               <img />
               <div>
                    <p>{productName}</p>
                    <p>{price}</p>
               </div>
          </div>
    )
};

