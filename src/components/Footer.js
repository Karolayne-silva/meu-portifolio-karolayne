
import imgEmailB from "../img/email B.svg";
import imgLinkedinB from "../img/linkedin B.svg";
import imgGitHubB from "../img/github B.svg";

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