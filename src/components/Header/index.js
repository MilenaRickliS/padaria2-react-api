import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo-padaria.png'
import { useEffect, useRef, useState, useContext} from "react";
import {AuthContext} from '../../contexts/auth'


function Header(){
    const { logout } = useContext(AuthContext);
   
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


    return(
        <header>
            <div className="interface-header">
                <div className="logo">
                    <Link to = '/cardapio'>
                        <img src={logo} alt="Logo da Padaria" width="100%"/>
                    </Link>
                </div>

                <nav ref={navRef}>
                    <ul>
                        <li><Link to = '/cardapio'>Cardápio</Link></li>
                        <li><Link to = '/pedido'>Pedido</Link></li>
                        <li><Link to = '/conta'>Conta</Link></li>
                    </ul>
                    <div onClick={showNavbar} className="nav-btn nav-close-btn">
                        <i className="bi bi-x-lg"></i>
                    </div>

                </nav>
                <div className="btn-contato">
                    <Link to = '/'>
                        <button onClick={ () => logout() }>Sair</button>
                    </Link>
                </div>
                

                <div  onClick={showNavbar} className="nav-btn">
                        <i className="bi bi-list"></i>
                </div>                
                
            </div>
        </header>      
    );
}

export default Header;