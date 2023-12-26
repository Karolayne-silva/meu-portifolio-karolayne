
import imgProjeto1 from "../img/projeto 1.png";
import imgProjeto2 from "../img/projeto 2.png";
import imgProjeto3 from "../img/projeto 3.png";
import imgProjeto4 from "../img/projeto 4.png";
import imgProjeto5 from "../img/projeto 5.png";
import Card from "../components/CardMissao";


export default function Projetos(){
    return (
        
        <section className="sc-projetos" id="projetos">
            <h2>Projetos<span>.</span></h2>
            <div className="lista-projetos">

                <Card imgProjeto={imgProjeto1} nome="Calculadora de idade" descricao="Site de uma calculadora de idade que foi um desafio do front end mentor. Feito em HTML, CSS e JS." linkProjeto="https://challenger-age-calculator-app.netlify.app/" linkGithub="https://github.com/Karolayne-silva/challenge-frontmentor-age-calculator"/>

                <Card imgProjeto={imgProjeto2} nome="FAQ" descricao="Desafio do front end mentor utilizando HTML, CSS e JS." linkProjeto="https://karolayne-silva.github.io/challenge-frontend-mentor-faq-card/" linkGithub="https://github.com/Karolayne-silva/challenge-frontend-mentor-faq-card"/>
                
                <Card imgProjeto={imgProjeto3} nome="Sistema de submissão de missão" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." linkProjeto="https://disporenergia.netlify.app/perfil" linkGithub="https://github.com/ErikavbSantos/dispor_energia"/>

                <Card imgProjeto={imgProjeto4} nome="Portifólio Lobo" descricao="Projeto desenvolvido em um curso da Origamid de um portifólio. Feito em HTML e CSS." linkProjeto="https://karolayne-silva.github.io/projeto-portifolio-origamid/" linkGithub="https://github.com/Karolayne-silva/projeto-portifolio-origamid"/>

                <Card imgProjeto={imgProjeto5} nome="Bikcraft" descricao="Projeto desenvolvido no curso da Origamid de um site de vendas de bicicletas. Feito em HTML e CSS." linkProjeto="https://karolayne-silva.github.io/site-bikcraft-origamid/" linkGithub="https://github.com/Karolayne-silva/site-bikcraft-origamid"/>
 
            </div>
      </section>
        
    )
}