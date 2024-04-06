import React, { useContext } from 'react';

import './style.css';
import CartItem from '../CartItem/index';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import Header from "../../components/Header";

function Pedido() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section>
      <div><Header/></div>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

// className={`cart ${isCartVisible ? 'cart--active' : ''}`}

export default Pedido;