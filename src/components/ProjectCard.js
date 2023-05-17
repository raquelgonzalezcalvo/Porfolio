import "../styles/core/reset.scss";
import "../styles/components/Projects.scss";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <article className="proyect__article">
      <h4 className="proyect__article__name">{props.title}</h4>
      <img
        className="proyect__article__img"
        src={props.img}
        alt={props.title}
        title={props.title}
      ></img>
      <div className="proyect__article__links">
        {" "}
        <a
          href={props.codeLink}
          target="_blank"
          rel="noreferrer"
          className="proyect__article__links-icon"
        >
          <CgWebsite className="btn" />
        </a>
        <a
          href={props.liveProyect}
          target="_blank"
          rel="noreferrer"
          className="proyect__article__links-icon"
        >
          <BsGithub className="btn" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
