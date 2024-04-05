import React from 'react';
import CartButton from '../../pages/CartButton/index';

import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <CartButton />
      </div>
    </header>
  );
}

export default Header;