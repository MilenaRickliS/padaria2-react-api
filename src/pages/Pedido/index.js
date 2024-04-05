import React, { useContext } from 'react';

import './style.css';
import CartItem from '../CartItem/index';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Pedido() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Pedido;