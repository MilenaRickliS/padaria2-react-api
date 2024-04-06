import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inicio from '../pages/Inicio'
import Cardapio from '../pages/Cardapio'
import Pedido from '../pages/Pedido'

import Private from './private'
import Detalhes from '../pages/Detalhes';
import Conta from '../pages/Conta';
import FinalizarCompra from '../pages/FinalizarCompra';


function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<Inicio/>}/>

      <Route path="/signin" element={ <SignIn/> } />

      <Route path="/signup" element={ <SignUp/> } />
      
      <Route path="/cardapio" element={ <Private><Cardapio/></Private> } />

      <Route path="/pedido" element={<Private><Pedido/></Private>} />

      <Route path="/conta" element={<Private><Conta/></Private>} />

      <Route path="/finalizarCompra" element={<Private><FinalizarCompra/></Private>} />
    
    </Routes>
  )
}

export default RoutesApp;