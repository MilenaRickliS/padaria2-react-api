import { Link } from 'react-router-dom';
import './style.css';
import cesto from '../../assets/cesto-pão.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Formulario from '../../components/Formulario';

function Contato(){
    return(
        <div>
            <div><Header/></div>
            <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>CONTATO<span></span></h1>
                        <p><strong>Endereço</strong><br/>Rua Bento Munhoz da Rocha Neto, n° 1028 
                            <br/>(42) 3625-1832<br/>(42) 98413-4953<br/><br/><strong>Segunda a Sábado</strong><br/>6:30h - 20h<br/><strong>Domingo</strong><br/>6:30h - 18h
                            <br/><br/>panificadora_vitoria@hotmail.com</p>

                            <div class="btn-social">
                                <a href="#"><button><i class="bi bi-instagram"></i></button></a>
                                <a href="#"><button><i class="bi bi-whatsapp"></i></button></a>
                                <a href="#"><button><i class="bi bi-facebook"></i></button></a>
                            </div>
                    </div>

                    <div className="img-topo-site">
                        <img src={cesto} alt="cesto-de-pão"/>
                    </div>
                </div>
            </div>
        </section>
        <Formulario/>
        <section className="portfolio">
            <div className="interface">
                <div className="flex">
                    <div className="video">
                        <iframe width="100%" height="300px" src="https://www.youtube.com/embed/vGchkqBDpdQ"
                            title="Portal RSN | Determinação faz a trajetória da Padaria Vitória em Entre Rios"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    <div className="video">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.1776740101436!2d-51.49240451891925!3d-25.565754980179392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef4fd942cd30a1%3A0x37922f66db5604a5!2sPanificadora%20Vit%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1697571468637!5m2!1spt-BR!2sbr"
                            width="100%" height="300px" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
        <div><Footer/></div>
        </div>       
    );
}

export default Contato;