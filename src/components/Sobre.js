import imgPessoal from "../img/eu 1.jpeg";
import css from "../img/css.png";
import java from "../img/java.png";
import rc from "../img/biblioteca.png";
import js from "../img/script-java.png";
import html from "../img/html.png";
import python from "../img/python.png";
import git from "../img/git.png";
import mysql from "../img/mysql.png";
import "../styles/sobre.css";


export default function Sobre(){

    return(
        <section className="sc-sobre" id="sobre">
            <div className="sc-sobre-in">
                
                    <div className="box-sobre">
                        <div className="img-pessoal">
                            <img src={imgPessoal} alt="Karolayne" />
                        </div>
                        <div className="descricao">
                            <h2>Sobre mim.</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="habilidades">
                                <h3>Habilidades</h3>
                                <div>
                                    <img src={css} alt="icone css" />
                                    <img src={java} alt="icone js" />
                                    <img src={rc} alt="icone react" />
                                    <img src={js} alt="icone react" />
                                    <img src={html} alt="icone react" />
                                    <img src={python} alt="icone react" />
                                    <img src={git} alt="icone react" />
                                    <img src={mysql} alt="icone react" />
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                
            
            </div>  
      </section>
    )
}