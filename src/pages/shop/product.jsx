import React from 'react';

export const Product = (props) => {
     const {id, productName, price} = props.data;
    return <div>{productName}</div>;
    };

