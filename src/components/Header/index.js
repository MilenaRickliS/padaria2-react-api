import React from 'react';
import CartButton from '../../pages/CartButton/index';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo-padaria.png';
import {AuthContext} from '../../contexts/auth';
import { useContext} from "react";

function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <header>
         
      <div>
                <div className="logo">
                    <Link to = '/cardapio'>
                        <img src={logo} alt="Logo da Padaria" width="100%"/>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li><Link to = '/cardapio'>Cardápio</Link></li>
                        <li><Link to = '/conta'>Conta</Link></li>
                        <li><CartButton /></li>
                    </ul>
                </nav>
                <div className="btn-contato">
                    <Link to = '/'>
                        <button onClick={ () => logout() }>Sair</button>
                    </Link>
                </div>               
                
            </div>
              
    </header>
  );
}

export default Header;