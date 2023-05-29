import "../styles/core/reset.scss";
import "../styles/components/ProjectCard.scss";
import "../styles/components/ProjectCard.scss";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <section className="proyect__container">
      <h4 className="proyect__container__name">{props.title}</h4>
      <img
        className="proyect__container__img"
        src={props.img}
        alt={props.title}
        title={props.title}
      ></img>
      <div className="proyect__container__links">
        {" "}
        <a
          href={props.code}
          target="_blank"
          rel="noreferrer"
          className="proyect__container__links-icon"
        >
          <CgWebsite className="btn" />
        </a>
        <a
          href={props.proyect}
          target="_blank"
          rel="noreferrer"
          className="proyect__container__links-icon"
        >
          <BsGithub className="btn" />
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
