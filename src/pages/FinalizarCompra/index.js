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
function FinalizarCompra() {
// Estado para armazenar o ID do post a ser editado ou excluído.
  const [idEndereco, setIdEndereco] = useState('');
  // Estado para armazenar o nome completo do cliente.
  const [nomeCompleto, setNomeCompleto] = useState('');
  // Estado para armazenar o cep
  const [cep, setCep] = useState('');
  // Estado para armazenar o cidade
  const [cidade, setCidade] = useState('');
  // Estado para armazenar o estado
  const [estado, setEstado] = useState('');
  // Estado para armazenar o bairro
  const [bairro, setBairro] = useState('');
  // Estado para armazenar o rua
  const [rua, setRua] = useState('');
  // Estado para armazenar o numero da casa
  const [numero, setNumero] = useState('');
  // Estado para armazenar o complemento endereço
  const [complemento, setComplemento] = useState('');
  // Estado para armazenar o telefone
  const [telefone, setTelefone] = useState('');
 
  // Estado para armazenar a lista de endereços.
  const [enderecos, setEnderecos] = useState([]);

  // Efeito que carrega os posts do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadPosts(){
    const unsub = onSnapshot(collection(db, "padariaCompra"), (snapshot) => {
    let listaEndereco = [];
    snapshot.forEach((doc) => {
      listaEndereco.push({
        id: doc.id,
        nomeCompleto: doc.data().nomeCompleto,
        cep: doc.data().cep,
        cidade: doc.data().cidade,
        estado: doc.data().estado,
        bairro: doc.data().bairro,
        rua: doc.data().rua,
        numero: doc.data().numero,
        complemento: doc.data().complemento,
        telefone: doc.data().telefone,       
    })
    })
    setEnderecos(listaEndereco);
    })
    }
    loadPosts();
  }, [])


  // Função para adicionar um novo endereço ao Firestore.

  async function handleAddEndereco(){
    await addDoc(collection(db, "padariaCompra"), {
      nomeCompleto: nomeCompleto,
      cep: cep,
      cidade: cidade,
      estado: estado,
      bairro: bairro,
      rua: rua,
      numero: numero,
      complemento: complemento,
      telefone: telefone,
    })
    .then(() => {
      console.log("CADASTRADO COM SUCESSO")
      setNomeCompleto('');
      setCep('');
      setCidade('');
      setEstado('');
      setBairro('');
      setRua('');
      setNumero('');
      setComplemento('');
      setTelefone('');
    })
    .catch((error) => {
      console.log("ERRO " + error);
    })
  }

  // Função para buscar todos os endereços do Firestore.
  async function buscarEndereco(){
    const postsRef = collection(db, "padariaCompra");
    await getDocs(postsRef)
    .then((snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        nomeCompleto: doc.data().nomeCompleto,
        cep: doc.data().cep,
        cidade: doc.data().cidade,
        estado: doc.data().estado,
        bairro: doc.data().bairro,
        rua: doc.data().rua,
        numero: doc.data().numero,
        complemento: doc.data().complemento,
        telefone: doc.data().telefone, 
    })
    })
    setEnderecos(lista);
    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR");
    })
  }

  // Função para editar um endereco existente no Firestore.
  async function editarEndereco(){
    const docRef = doc(db, "padariaCompra", idEndereco);
    await updateDoc(docRef, {
        nomeCompleto: nomeCompleto,
        cep: cep,
        cidade: cidade,
        estado: estado,
        bairro: bairro,
        rua: rua,
        numero: numero,
        complemento: complemento,
        telefone: telefone,
    })
    .then(() => {
      console.log("POST ATUALIZADO!");

      setNomeCompleto('');
      setCep('');
      setCidade('');
      setEstado('');
      setBairro('');
      setRua('');
      setNumero('');
      setComplemento('');
      setTelefone('');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // Função para excluir um endereco do Firestore.
  async function excluirEndereco(id){
    const docRef = doc(db, "padariaCompra", id);
    await deleteDoc(docRef)
  .then(() =>{
    alert("POST DELETADO COM SUCESSO!");
  })
  }

// Renderização do componente React.
return (
  <div className='container' id='finalizarCompra'>
    <h1>Adicione o seu Endereço para processar a Compra</h1>        
      <br/><br/>      
      <hr/>
      
      <div className='container' id='endereco'>
      <h2>Endereços:</h2>
      <label>ID do Endereço:</label>
      <input
      placeholder='Digite o ID do Endereço'
      value={idEndereco}
      onChange={ (e) => setIdEndereco(e.target.value) }
      /> <br/>
      <label>Nome Completo:</label>
      <input
      type="text"
      placeholder='Digite seu nome completo'
      value={nomeCompleto}
      onChange={ (e) => setNomeCompleto(e.target.value) }
      />
      <label>CEP:</label>
      <input
      
      placeholder="Digite o seu CEP"
      value={cep}
      onChange={(e) => setCep(e.target.value) }
      />
      <label>Estado:</label>
      <input
      type="text"
      placeholder='Digite o estado'
      value={estado}
      onChange={ (e) => setEstado(e.target.value) }
      />
      <label>Cidade:</label>
      <input
      type="text"
      placeholder='Digite a cidade'
      value={cidade}
      onChange={ (e) => setCidade(e.target.value) }
      />
      <label>Bairro:</label>
      <input
      type="text"
      placeholder='Digite o bairro'
      value={bairro}
      onChange={ (e) => setBairro(e.target.value) }
      />
      <label>Rua/Avenida:</label>
      <input
      type="text"
      placeholder='Digite seu nome da rua ou avenida'
      value={rua}
      onChange={ (e) => setRua(e.target.value) }
      />
      <label>Número:</label>
      <input
      
      placeholder='Digite o número da moradia'
      value={numero}
      onChange={ (e) => setNumero(e.target.value) }
      />
      <label>Complemento:</label>
      <input
      type="text"
      placeholder='Digite seu um complemento para o endereço'
      value={complemento}
      onChange={ (e) => setComplemento(e.target.value) }
      />
      <label>Telefone:</label>
      <input
      
      placeholder='Digite seu telefone (xx)xxxxxxxxx'
      value={telefone}
      onChange={ (e) => setTelefone(e.target.value) }
      />
      <div>
        <button onClick={handleAddEndereco} className='btn-contato3'>Adicionar Endereço</button>
        <button onClick={buscarEndereco} className='btn-contato3'>Buscar Endereço</button>
        <button onClick={editarEndereco} className='btn-contato3'>Editar Endereço</button>
      </div>

      <ul>
        {enderecos.map( (endereco) => {
          return(
          <li key={endereco.id}>
            <strong>ID: {endereco.id}</strong> <br/>
            <span>Nome Completo: {endereco.nomeCompleto} </span> <br/>
            <span>CEP: {endereco.cep}</span> <br/>
            <span>Estado: {endereco.estado}</span> <br/>
            <span>Cidade: {endereco.cidade}</span> <br/>
            <span>Bairro: {endereco.bairro}</span> <br/>
            <span>Rua/Avenida: {endereco.rua}</span> <br/>
            <span>Número: {endereco.numero}</span> <br/>
            <span>Complemento: {endereco.complemento}</span> <br/>
            <span>Telefone: {endereco.telefone}</span> <br/>
            <button onClick={ () => excluirEndereco(endereco.id) } className='btn-contato3'>Excluir</button> <br/> <br/>
          </li>

          )
        })}
        <Link to='/pagamento' className='proximo'>Próxima Etapa ---</Link>
      </ul>
    </div>
  </div>
);
}
export default FinalizarCompra;