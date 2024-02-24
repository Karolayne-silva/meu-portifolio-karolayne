import Card from "../components/CardMissao";
import { Fade } from "react-awesome-reveal";
import { data } from "../dados";
import "../styles/projetos.css";

export default function Projetos({dark}) {
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
                  dark={dark}
                />
              </Fade>
            );
          }
        )}
      </div>
    </section>
  );
}
