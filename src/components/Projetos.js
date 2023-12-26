
import imgProjeto1 from "../img/projeto 1.png";
import imgProjeto2 from "../img/projeto 2.png";
import imgProjeto3 from "../img/projeto 3.png";
import imgProjeto4 from "../img/projeto 4.png";
import imgProjeto5 from "../img/projeto 5.png";
import Card from "../components/CardMissao";


export default function Projetos(){
    return (
        
        <section className="sc-projetos" id="projetos">
            <h2>Projetos.</h2>
            <div className="lista-projetos">

                <Card imgProjeto={imgProjeto1} nome="nome" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." linkProjeto="https://challenger-age-calculator-app.netlify.app/" linkGithub="https://github.com/Karolayne-silva/challenge-frontmentor-age-calculator"/>

                <Card imgProjeto={imgProjeto2} nome="Nome" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." linkProjeto="https://karolayne-silva.github.io/challenge-frontend-mentor-faq-card/" linkGithub="https://github.com/Karolayne-silva/challenge-frontend-mentor-faq-card"/>
                
                <Card imgProjeto={imgProjeto3} nome="Submissão de missão" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." linkProjeto="https://disporenergia.netlify.app/perfil" linkGithub="https://github.com/ErikavbSantos/dispor_energia"/>

                <Card imgProjeto={imgProjeto4} nome="Nome" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." linkProjeto="https://karolayne-silva.github.io/projeto-portifolio-origamid/" linkGithub="https://github.com/Karolayne-silva/projeto-portifolio-origamid"/>

                <Card imgProjeto={imgProjeto5} nome="Nome" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." linkProjeto="https://karolayne-silva.github.io/site-bikcraft-origamid/" linkGithub="https://github.com/Karolayne-silva/site-bikcraft-origamid"/>
 
            </div>
      </section>
        
    )
}