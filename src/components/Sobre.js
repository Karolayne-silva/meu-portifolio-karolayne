import imgPessoal from "../img/eu 1.jpeg";
import css from "../img/css.svg";
import rc from "../img/biblioteca.png";
import js from "../img/javascript.svg";
import html from "../img/html.svg";
import git from "../img/git.svg";
import mysql from "../img/mysql.svg";
import tailwind from "../img/tailwindcss.svg";
import sass from "../img/sass.svg";
import node from "../img/icons8-nodejs.svg";
import typescript from "../img/typescript.svg";
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
              Tenho 23 anos, moro em Recife e atualmente imersa no curso de
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
                <img src={html} alt="icone html" />
                <img src={js} alt="icone javaScript" />
                <img src={typescript} alt="icone typescript" />
                <img src={rc} alt="icone react" />
                <img src={git} alt="icone git" />
                <img src={tailwind} alt="icone tailwindcss"/>
                <img src={sass} alt="icone Sass" />
                <img src={node} alt="icone nodejs" />
                <img src={mysql} alt="icone mysql" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
