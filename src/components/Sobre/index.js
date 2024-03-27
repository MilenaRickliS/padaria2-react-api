import './style.css';
import padaria from '../../assets/padaria.jpeg'


function Sobre(){
    return(
        <section className="sobre">
            <div className="interface">
                <div className="flex">
                    <div className="img-sobre">
                        <img src={padaria} alt="padaria" width="100%"/>
                    </div>

                    <div className="txt-sobre">
                        <h2>TUDO<span>MUITO GOSTOSO</span></h2>
                        <p><strong>Assado Fresco Diariamente -</strong> Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit.</p>
                        <p><strong>Entregamos na sua porta -</strong> Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit.</p>
                        <p><strong>Nenhum pedido é muito grande! -</strong> Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit.</p>
                        <p><strong>Valor bom -</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className="btn-social">
                            <a href="#"><button><i class="bi bi-instagram"></i></button></a>
                            <a href="#"><button><i class="bi bi-whatsapp"></i></button></a>
                            <a href="#"><button><i class="bi bi-facebook"></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
}

export default Sobre;