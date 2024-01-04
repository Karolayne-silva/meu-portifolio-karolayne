import Card from "../components/CardMissao";
import { Fade, Slide } from "react-awesome-reveal";
import { data } from "../dados";
import "../styles/projetos.css";

export default function Projetos() {
  return (
    <section className="sc-projetos" id="projetos">
      <h2>
        Projetos<span>.</span>
      </h2>
      <div className="lista-projetos">
        {data.map(
          ({ imgProjeto, nome, descricao, linkGithub, linkProjeto }) => {
            return (
              <Fade direction="down" cascade triggerOnce key={nome}>
                <Card
                  imgProjeto={imgProjeto}
                  nome={nome}
                  descricao={descricao}
                  linkGithub={linkGithub}
                  linkProjeto={linkProjeto}
                />
              </Fade>
            );
          }
        )}
      </div>
    </section>
  );
}
