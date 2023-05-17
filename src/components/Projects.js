import ProjectCard from "./ProjectCard";
import Anonymus from "../images/anonymus.png";
import Uluru from "../images/Uluru.png";
import Cocktail from "../images/Cocktaill.png";
import Card from "../images/Awesome profile-cards.png";
import HarryPotter from "../images/Harry Potter.png";
import GestorProjectos from "../images/GestorProjectos.png";

function Proyects() {
  return (
    <section id="proyects" className="proyects">
      {/* <h1 className="proyects__title">Proyectos</h1> */}
      <div className="proyects__listProyects">
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Anonymus"}
            img={Anonymus}
            codeLink={"https://github.com/raquelgonzalezcalvo/Anonymus-Proxy"}
            liveProyect={
              "https://github.com/raquelgonzalezcalvo/Anonymus-Proxy"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Uluru"}
            img={Uluru}
            codeLink={"https://github.com/raquelgonzalezcalvo/Uluru-Team"}
            liveProyect={"https://raquelgonzalezcalvo.github.io/Uluru-Team/"}
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Cocktail"}
            img={Cocktail}
            codeLink={
              "https://github.com/raquelgonzalezcalvo/Buscador-de-Cocteles"
            }
            liveProyect={
              "https://raquelgonzalezcalvo.github.io/Buscador-de-Cocteles/"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Card"}
            img={Card}
            codeLink={
              "https://github.com/raquelgonzalezcalvo/Awesome-profile-cards"
            }
            liveProyect={
              "https://raquelgonzalezcalvo.github.io/Awesome-profile-cards/"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"HarryPotter"}
            img={HarryPotter}
            codeLink={
              "https://github.com/raquelgonzalezcalvo/buscador-personajes-Harry-Potter"
            }
            liveProyect={
              "https://raquelgonzalezcalvo.github.io/buscador-personajes-Harry-Potter/"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"GestorProjectos"}
            img={GestorProjectos}
            codeLink={
              "https://github.com/raquelgonzalezcalvo/Gestor-de-proyectos"
            }
            liveProyect={
              "https://raquelgonzalezcalvo.github.io/Gestor-de-proyectos/#/create"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Proyects;
