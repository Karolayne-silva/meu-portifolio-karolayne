import imgLink from "../img/icone link 1.svg";
import imgGit from "../img/icone git 1.svg";
import imgGitB from "../img/icone github b.png";
import imgLinkB from "../img/icone link b.png";

export default function CardMissao({
  imgProjeto,
  nome,
  descricao,
  linkProjeto,
  linkGithub,
  dark,
}) {
  return (
    <div className="card-projeto">
      <div className="img-card">
        <img src={imgProjeto} alt="imagem do projeto" />
      </div>
      <div className="card-descricao">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <div className="card-links">
          <a href={linkProjeto} target="_blank">
            <img src={!dark ? imgLink : imgLinkB} alt="icone link" />
            visit
          </a>
          <a href={linkGithub} target="_blank">
            <img src={!dark ? imgGit : imgGitB} alt="icone github" />
            view code
          </a>
        </div>
      </div>
    </div>
  );
}
