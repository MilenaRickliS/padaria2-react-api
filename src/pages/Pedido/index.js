import React, { useContext } from 'react';

import './style.css';
import CartItem from '../CartItem/index';
import AppContext from '../../contexts/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import Header from "../../components/Header";

function Pedido() {
  const { cartItems, setCartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce(
    (price,item) => price + item.quantity * item.price,0
)

  const handleClear = () =>{
    setCartItems([]);
  }

  return (
    <section>
      <div><Header/></div>
      <div className="cart-items">
            <div className="clear-cart">
                {cartItems.length >=1 &&(
                    <button className="clear-button" onClick={handleClear}>Limpar Carrinho</button>
                )}
            </div>
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
        {cartItems.length === 0 &&(
          <div className="cartitens-empty">Não há produtos adicionados</div>
        )}
      </div>
      
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>

      <button className="finalizar">Finalizar Compra</button>
    </section>
  );
}

// className={`cart ${isCartVisible ? 'cart--active' : ''}`}

export default Pedido;