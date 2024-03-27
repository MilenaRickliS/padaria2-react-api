import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from "../../components/Header";


function Pedido(){
  return(
    <div>
        <Header/>
    <div className="meus-filmes">
      <h1>Meu Pedido</h1>
      

    </div>
    </div>
  )
}

export default Pedido;