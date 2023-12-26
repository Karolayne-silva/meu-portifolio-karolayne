import imgLink from "../img/icone link 1.svg";
import imgGit from "../img/icone git 1.svg";

export default function CardMissao({imgProjeto, nome, descricao, linkProjeto, linkGithub}){
    return (
        <div className="card-projeto">
            <div className="img-card">
                <img src={imgProjeto} alt=""/>
            </div>
            <div className="card-descricao">
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <div className="card-links">
                    <a href={linkProjeto}>
                        <img src={imgLink} alt="icone link"/>
                                visit
                    </a>
                    <a href={linkGithub}>
                        <img src={imgGit} alt="icone github"/>
                                view code
                    </a>
                </div>
            </div>
        </div>
    )
}