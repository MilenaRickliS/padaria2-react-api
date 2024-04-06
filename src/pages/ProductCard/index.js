import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './style.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../contexts/AppContext';
import { toast } from 'react-toastify';

function ProductCard({ data }) {
  const { id, title, thumbnail, price } = data;

  const { cartItems, setCartItems} = useContext(AppContext);
  const ProductExist = cartItems.find((item) => item.id === data.id);
  const quantity = ProductExist ? ProductExist.quantity : 0;

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
    <section className="product-card">
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;