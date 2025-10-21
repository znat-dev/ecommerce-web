import React, {useContext} from 'react';
import ShopContext from '../../context/shop-context';

const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemNumber } = useContext(ShopContext);

  return (
    <div className='cart-item-div'>
      <img src={productImage} />
      <div className='cart-info'>
        <b> 
            <p>{productName}</p>
            <p>{price}</p>
         </b>

         <div className='cart-quantity'>
            <button onClick={() => removeFromCart(id)} > - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemNumber(Number(e.target.value), id)} />
            <button onClick={() => addToCart(id)} > + </button>
         </div>
       </div>
    </div>
  );
};

export default CartItem;