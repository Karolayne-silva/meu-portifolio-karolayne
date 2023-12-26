
import imgEmailB from "../img/o-email (1) 1.svg";
import imgLinkedinB from "../img/linkedin (1) 1.svg";
import imgGitHubB from "../img/github (1) 1.svg";

export default function Footer(){
    return (
        <footer id="contatos">
            <div className="contatos-in">
                <div className="imgs-redes">
                    <a href="https://www.linkedin.com/in/karolayne-silvas/">
                    <img src={imgLinkedinB} alt="linkedin" />
                    </a>
                    <a href="">
                    <img src={imgEmailB} alt="Email" />
                    </a>
                    <a href="https://github.com/Karolayne-silva">
                    <img src={imgGitHubB} alt="Github" />
                    </a>
                </div>
                <p>© 2024 | Karolayne Silva</p>
            </div>
      </footer>
    )
}