import './style.css';
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
function Formulario() {
  // Estado para armazenar o nome completo.
  const [nomeC, setNomeC] = useState('');
  // Estado para armazenar o email.
  const [emailF, setEmailF] = useState('');
  // Estado para armazenar o telefone.
  const [telefone, setTelefone] = useState('');
  // Estado para armazenar o mensagem.
  const [mensagem, setMensagem] = useState('');
  
  // Estado para armazenar a lista de mensagens.
  const [mensagens, setMensagens] = useState([]);

  // Efeito que carrega os posts do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadPosts(){
    const unsub = onSnapshot(collection(db, "padariaForm"), (snapshot) => {
    let listaMensagem = [];
    snapshot.forEach((doc) => {
      listaMensagem.push({
        nomeC: doc.data().nomeC,
        emailF: doc.data().emailF,
        telefone: doc.data().telefone,
        mensagem: doc.data().mensagem        
    })
    })
    setMensagens(listaMensagem);
    })
    }
    loadPosts();
  }, [])
 
  // Função para adicionar um nova mensagem ao Firestore.
  async function handleAdd(){
    await addDoc(collection(db, "padariaForm"), {
      nomeC: nomeC,
      emailF: emailF,
      telefone: telefone,
      mensagem: mensagem
    })
    .then(() => {
      console.log("CADASTRADO COM SUCESSO")
      setNomeC('');
      setEmailF('');
      setTelefone('');
      setMensagem('');
    })
    .catch((error) => {
      console.log("ERRO " + error);
    })
  }

  // Função para buscar todos as mensagens do Firestore.
  async function buscarMensagem(){
    const postsRef = collection(db, "padariaForm");
    await getDocs(postsRef)
    .then((snapshot) => {
    let lista = [];
    snapshot.forEach((doc) => {
      lista.push({
        nomeC: doc.data().nomeC,
        emailF: doc.data().emailF,
        telefone: doc.data().telefone,
        mensagem: doc.data().mensagem 
    })
    })
    setMensagens(lista);
    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR");
    })
  }
  // Função para editar uma mensagem existente no Firestore.
  async function editarMensagem(){
    const docRef = doc(db, "padariaForm", emailF);
    await updateDoc(docRef, {
        nomeC: nomeC,
        emailF: emailF,
        telefone: telefone,
        mensagem: mensagem
    })
    .then(() => {
      console.log("POST ATUALIZADO!");
      setNomeC('');
      setEmailF('');
      setTelefone('');
      setMensagem('');
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // Função para excluir uma mensagem do Firestore.
  async function excluirMensagem(emailF){
    const docRef = doc(db, "padariaForm", emailF);
    await deleteDoc(docRef)
  .then(() =>{
    alert("POST DELETADO COM SUCESSO!");
  })
  }

// Renderização do componente React.
return (
  <div>
    <section className='formulario'>
    <div className='interface'>
      <h2 className="titulo">FALE <span>CONOSCO</span></h2>
      <hr/>
      
      <div>
      <label>Nome Completo:</label>
      <input
      placeholder='Digite o seu nome completo'
      value={nomeC}
      onChange={ (e) => setNomeC(e.target.value) }
      /> <br/>
      <label>E-mail:</label>
      <input
      type="text"
      placeholder='Digite seu e-mail'
      value={emailF}
      onChange={ (e) => setEmailF(e.target.value) }
      />
      <label>Telefone:</label>
      <input
      type="text"
      placeholder="Digite seu telefone"
      value={telefone}
      onChange={(e) => setTelefone(e.target.value) }
      />
      <label>Mensagem:</label>
      <textarea
      type="text"
      placeholder="Digite sua mensagem"
      value={mensagem}
      onChange={(e) => setMensagem(e.target.value) }
      />
      <div>
        <button onClick={handleAdd} className='btn-enviar'>Enviar Mensagem</button>
        {/* <button onClick={buscarMensagem} className='btn-enviar'>Buscar Mensagem</button> */}
        {/* <button onClick={editarMensagem} className='btn-enviar'>Editar Mensagem</button> */}
      </div>

      <ul>
        {mensagens.map( (mensagem) => {
          return(
          <li key={mensagem.emailF}>
            <span>Nome Completo: {mensagem.nomeC} </span> <br/>
            <span>E-mail: {mensagem.emailF}</span> <br/>
            <span>Telefone: {mensagem.telefone}</span> <br/>
            <span>Mensagem: {mensagem.mensagem}</span> <br/>
            {/* <button onClick={ () => excluirMensagem(mensagem.emailF) } className='btn-enviar'>Excluir</button> <br/> <br/> */}
          </li>

          )
        })}
      </ul>
    </div>
    </div>
    </section>
  </div>
);
}
export default Formulario;





