import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import { BsFillCartPlusFill } from 'react-icons/bs';


import './style.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../contexts/AppContext';
import { toast } from 'react-toastify';

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const ProductExist = cartItems.find((item) => item.id === data.id);
  const quantity = ProductExist ? ProductExist.quantity : 0;

  const handleRemoveItem = () => {
    if (quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== data.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id ? { ...ProductExist, quantity: quantity - 1 } : item
        )
      );
    }
    toast.error("Produto removido do carrinho!");
  };

  const handleAddCart = () => {
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id ? { ...ProductExist, quantity: quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>        
        <h3 className="cart-item-price">{quantity} * {formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >          
          <BsCartDashFill />
          </button>

          <button
        type="button"
        className="button__add-cart2"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
        
        
      
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;