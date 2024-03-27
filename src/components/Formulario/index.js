import './style.css';


function Formulario(){
    return(
        <section className="formulario">
            <div className="interface">
                <h2 className="titulo">FALE <span>CONOSCO</span></h2>

                <form action="">
                    <input type="text" name="" id="" placeholder="Seu nome completo:" required/>
                    <input type="text" name="" id="" placeholder="Seu e-mail:" required/>
                    <input type="text" name="" id="" placeholder="Seu celular:"/>
                    <textarea name="" id="" placeholder="Sua mensagem" required></textarea>
                    <div className="btn-enviar"><input type="submit" value="ENVIAR"/></div>
                </form>
            </div>
        </section> 
    );
}

export default Formulario;