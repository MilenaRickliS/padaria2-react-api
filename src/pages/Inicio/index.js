import { Link } from 'react-router-dom';
import './style.css';
import cesto from '../../assets/cesto-pão.png'
import Sobre from '../../components/Sobre';

function Inicio(){
    return(
        <div>
            <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>PANIFICADORA VITÓRIA<span></span></h1>
                        <p>Desde 1993 fazendo história, preparamos os melhores pães, tortas, bolos,
                                salgados e doces para saborear e compartilhar em todos os momentos. Visite nossa padaria na
                                Colônia Vitória, Entre Rios, Guarapuava-PR
                                ou faça a sua encomenda.</p>

                        <div className="btn-contato">
                            <strong>Entre agora e faça seu pedido!</strong>
                            <br></br>
                            <br></br>
                            <Link to = '/SignIn'>
                                <button>Fazer Login</button>
                            </Link>
                        </div>
                    </div>

                    <div className="img-topo-site">
                        <img src={cesto} alt="cesto-de-pão"/>
                    </div>
                </div>
            </div> 
        </section>
            <Sobre/>
        </div>
    );
}

export default Inicio;