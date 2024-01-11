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

export default function Sobre() {
  return (
    <section className="sc-sobre" id="sobre">
      <div className="sc-sobre-in">
        <div className="box-sobre">
          <div className="img-pessoal">
            <img src={imgPessoal} alt="mulher de cabelo preto cacheado e blusa com listras brancas e pretas " />
          </div>
          <div className="descricao">
            <h2>Sobre mim.</h2>
            <p>
              Tenho 22 anos, moro em Recife e atualmente imersa no curso de
              análise e desenvolvimento de sistemas. Tenho profundo interesse
              por livros, series e jogos, é onde me encontro nos momentos de
              descontração e inspiração. A área de desenvolvimento front-End é
              onde estou comprometida em aprimorar minhas habilidades e aprender
              mais para a construção de novos sistemas e na melhoria de
              existentes.
              <br></br>
              <br></br>
              Meu portifólio é um registro de tudo que já fiz e será de tudo que
              pretendo alcançar.
            </p>
            <div className="habilidades">
              <h3>Habilidades</h3>
              <div>
                <img src={css} alt="icone css" />
                <img src={java} alt="icone java" />
                <img src={rc} alt="icone react" />
                <img src={js} alt="icone javaScript" />
                <img src={html} alt="icone html" />
                <img src={python} alt="icone python" />
                <img src={git} alt="icone git" />
                <img src={mysql} alt="icone mysql" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
