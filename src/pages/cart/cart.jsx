import React, {useContext} from 'react';
import { PRODUCTS } from '../../products';
import ShopContext from '../../context/shop-context';
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <div className='cart-title'> 
        <h1>Shopping List</h1> 
      </div>

      <div className='cart-content' >
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      
      <div className='cart' >
      {totalAmount > 0 ? (
          <div>
            <p> Sub-total: ${totalAmount} </p>
            <button onClick={() => navigate("/")} > Continue Shopping </button>
          </div> ) : (
            <h1> Your cart is Empty!</h1>
          )}
        </div>
    </div>
  );
};

export default Cart;