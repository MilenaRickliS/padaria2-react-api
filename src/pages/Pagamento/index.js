import './style.css';
import { Link } from "react-router-dom";

// Importa os hooks useState e useEffect do React, que são essenciais para o funcionamento do componente.
import { useState, useEffect } from 'react';
// Importa as funções de conexão com o Firebase e as operações de banco de dados do Firestore.
import { db, auth } from '../../services/firebaseConnection';
// Importa funções específicas do Firestore para manipulação de documentos e coleções.
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';

// Função principal do componente React, que será renderizada na página.
function Pagamento() {
// Estado para armazenar o ID do post a ser editado ou excluído.
  const [idCartao, setIdCartao] = useState('');
  // Estado para armazenar o nome completo do cliente.
  const [nomeCartao, setNomeCartao] = useState('');
  // Estado para armazenar o numero do cartão
  const [numeroCartao, setNumeroCartao] = useState('');
  // Estado para armazenar a data de vencimento
  const [dataV, setDataV] = useState('');
  // Estado para armazenar o cvv
  const [cvv, setCVV] = useState('');
   
  // Estado para armazenar a lista de cartoes.
  const [cartoes, setCartoes] = useState([]);

  // Efeito que carrega os posts do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadPosts(){
    const unsub = onSnapshot(collection(db, "padariaPaga"), (snapshot) => {
    let listaC = [];
    snapshot.forEach((doc) => {
      listaC.push({
        id: doc.id,
        nomeCartao: doc.data().nomeCartao,
        numeroCartao: doc.data().numeroCartao,
        dataV: doc.data().dataV,
        cvv: doc.data().cvv,       
    })
    })
    setCartoes(listaC);
    })
    }
    loadPosts();
  }, [])


  // Função para adicionar um novo cartão Firestore.

  async function handleAddC(){
    await addDoc(collection(db, "padariaPaga"), {
      nomeCartao: nomeCartao,
      numeroCartao: numeroCartao,
      dataV: dataV,
      cvv: cvv,
    })
    .then(() => {
      console.log("CADASTRADO COM SUCESSO")
      setNomeCartao('');
      setNumeroCartao('');
      setDataV('');
      setCVV('');
    })
    .catch((error) => {
      console.log("ERRO " + error);
    })
  }

  // Função para buscar todos os endereços do Firestore.
  async function buscarC(){
    const postsRef = collection(db, "padariaPaga");
    await getDocs(postsRef)
    .then((snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        nomeCartao: doc.data().nomeCartao,
        numeroCartao: doc.data().numeroCartao,
        dataV: doc.data().dataV,
        cvv: doc.data().cvv, 
    })
    })
    setCartoes(lista);
    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR");
    })
  }

  // Função para editar um cartão existente no Firestore.
  async function editarC(){
    const docRef = doc(db, "padariaPaga", idCartao);
    await updateDoc(docRef, {
      nomeCartao: nomeCartao,
      numeroCartao: numeroCartao,
      dataV: dataV,
      cvv: cvv,
    })
    .then(() => {
      console.log("POST ATUALIZADO!");
      setNomeCartao('');
      setNumeroCartao('');
      setDataV('');
      setCVV('');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // Função para excluir um cartão do Firestore.
  async function excluirC(id){
    const docRef = doc(db, "padariaPaga", id);
    await deleteDoc(docRef)
  .then(() =>{
    alert("POST DELETADO COM SUCESSO!");
  })
  }

// Renderização do componente React.
return (
  <div className='container' id='finalizarCompra'>
    <h1>Adicione o seu Cartão de crédito para processar a Compra</h1>        
      <br/><br/>      
      <hr/>
      
      <div className='container' id='endereco'>
      <h2>Cartão de crédito:</h2>
      <label>ID do Cartão:</label>
      <input
      placeholder='Digite o ID do Cartão'
      value={idCartao}
      onChange={ (e) => setIdCartao(e.target.value) }
      /> <br/>
      <label>Nome no cartão:</label>
      <input
      type="text"
      placeholder='Digite o nome no cartão'
      value={nomeCartao}
      onChange={ (e) => setNomeCartao(e.target.value) }
      />
      <label>Número do cartão:</label>
      <input
      
      placeholder="Digite o número do cartão"
      value={numeroCartao}
      onChange={(e) => setNumeroCartao(e.target.value) }
      />
      <label>Data de vencimento:</label>
      <input
      type="date"
      placeholder='Digite a data de vencimento do cartão'
      value={dataV}
      onChange={ (e) => setDataV(e.target.value) }
      />
      <label>CVV:</label>
      <input
      type="number"
      placeholder='Digite o CVV'
      value={cvv}
      onChange={ (e) => setCVV(e.target.value) }
      />
      
      <div>
        <button onClick={handleAddC} className='btn-contato3'>Adicionar Cartão</button>
        <button onClick={buscarC} className='btn-contato3'>Buscar Cartão</button>
        <button onClick={editarC} className='btn-contato3'>Editar Cartão</button>
      </div>

      <ul>
        {cartoes.map( (cartao) => {
          return(
          <li key={cartao.id}>
            <strong>ID: {cartao.id}</strong> <br/>
            <span>Nome no cartão: {cartao.nomeCartao} </span> <br/>
            <span>Número do cartão: {cartao.numeroCartao}</span> <br/>
            <span>Data de vencimento: {cartao.dataV}</span> <br/>
            <span>CVV: {cartao.cvv}</span> <br/>
            <button onClick={ () => excluirC(cartao.id) } className='btn-contato3'>Excluir</button> <br/> <br/>
          </li>

          )
        })}
        <Link to='/pagamento' className='proximo'>Próxima Etapa ---</Link>
      </ul>
    </div>
  </div>
);
}
export default Pagamento;