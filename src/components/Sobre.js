import imgPessoal from "../img/foto pessoal.svg";
import mysql from "../img/mysql 1.svg";
import html from "../img/html 1.svg";
import css from "../img/css-3 1.svg";
import js from "../img/icone js branco 1.svg";
import java from "../img/java 1.svg";
import git from "../img/Git-Icon-Black 1.svg";
import rc from "../img/biblioteca 1.svg";
import python from "../img/icone python branco 1.svg";

export default function Sobre(){

    return(
        <section className="sc-sobre" id="sobre">
            <div className="sc-sobre-in">
            <div className="descricao">
                <h2>Sobre mim.</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="img-pessoal">
                <img src={imgPessoal} alt="Karolayne" />
            </div>
            <div className="habilidades">
                <h3>Habilidades</h3>
                <div>
                <img src={css} alt="icone css" />
                <img src={html} alt="icone html" />
                <img src={js} alt="icone js" />
                <img src={rc} alt="icone react" />
                <img src={java} alt="icone java" />
                <img src={python} alt="icone python" />
                <img src={git} alt="icone git" />
                </div>
            </div>
            </div>  
      </section>
    )
}