// src/pages/CartPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map(item => (
          <CartItem 
            key={item.product._id} 
            item={item} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateCartItemQuantity} 
          />
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p><strong>Total: ${getTotal()}</strong></p>
          <Link to="/checkout">
            <button className="btn btn-primary">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
