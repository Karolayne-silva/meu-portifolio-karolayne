import imgLinkedin from "../img/linkedin (1) 1.svg";
import imgGithub from "../img/github (1) 1.svg";
import imgEmail from "../img/o-email (1) 1.svg";
import "../styles.css";
import { Typewriter } from 'react-simple-typewriter';
import "../styles/main.css";
import resumo from "../pdf/curriculo.pdf";

export default function Main() {
  return (
    <main className="main" id="home">
      <div>
        <span className="sp-titulo-1">Olá, meu nome é</span>
        <h1 className="titulo-principal">
          Karolayne Silva<span className="titulo-color">.</span>
        </h1>
        <span className="sp-titulo-2">
          Desenvolvedora {''}
          <span>
            <Typewriter
              words={['Front-End.']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </span>

        <div className="imgs-btn">
          <div className="imgs-redes">
            <a href="https://www.linkedin.com/in/karolayne-silvas/" target="_blank">
              <img src={imgLinkedin} alt="linkedin" />
            </a>
            <a href="mailto:karolaynessantoscontato@gmail.com" target="_blank">
              <img src={imgEmail} alt="email" />
            </a>
            <a href="https://github.com/Karolayne-silva" target="_blank">
              <img src={imgGithub} alt="github" />
            </a>
          </div>
          <a className="btn-cv" href={resumo} download="curriculo-karolaynesilva.pdf">
            Download CV
          </a>
        </div>
      </div>
    </main>
  );
}
