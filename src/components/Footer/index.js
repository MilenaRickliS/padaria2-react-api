import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo-padaria.png'

function Footer(){
    return(
        <footer>
            <div className="interface">
                <div className="line-footer">
                    <div className="flex">
                        <div className="logo-footer">
                            <img src={logo} alt="Logotipo Padaria Vitória" width="100%"/>
                        </div>
                        <nav className='bemvindo'>
                            <ul>
                                <li>Bem-vindo ao nosso site!</li>
                                <li>Conheça mais sobre nós ou mande uma mensagem!</li>
                            </ul>
                        </nav>
                        <nav className="menu-footer">
                            <ul>
                                <li><Link to = '/sobrenós'>Sobre</Link></li>
                                <li><Link to = '/contato'>Contato</Link></li>
                            </ul>
                        </nav>
                        <div className="btn-social">
                            <a href="#"><button><i class="bi bi-instagram"></i></button></a>
                            <a href="#"><button><i class="bi bi-whatsapp"></i></button></a>
                            <a href="#"><button><i class="bi bi-facebook"></i></button></a>
                        </div>
                    </div>
                </div>

                <div className="line-footer borda">
                    <p><i className="bi bi-envelope-fill"></i> <a
                            href="mailto:panificadora_vitoria@hotmail.com">panificadora_vitoria@hotmail.com</a>
                    </p>
                </div>
            </div>
        </footer>     
    );
}

export default Footer;