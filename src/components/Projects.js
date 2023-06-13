import ProjectCard from "./ProjectCard";
import Anonymus from "../images/anonymus.png";
import "../styles/components/Projects.scss";
import Uluru from "../images/Uluru.png";
import Cocktail from "../images/Cocktail.png";
import Card from "../images/Awesome profile-cards.png";
import HarryPotter from "../images/HarryPotter.png";
import GestorProyectos from "../images/GestorProjectos.png";
import JuegoMemoria from "../images/JuegoMemoria.png";
import AdviceGenerator from "../images/advice-generator-app.png";

function Proyects() {
  return (
    <section id="proyects" className="proyects">
      {/* <h1 className="proyects__title">Proyectos</h1> */}
      <div className="proyects__listProyects">
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Anonymus"}
            img={Anonymus}
            code={"https://github.com/raquelgonzalezcalvo/Anonymus-Proxy"}
            proyect={"https://github.com/raquelgonzalezcalvo/Anonymus-Proxy"}
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Uluru"}
            img={Uluru}
            code={"https://github.com/raquelgonzalezcalvo/Uluru-Team"}
            proyect={"https://raquelgonzalezcalvo.github.io/Uluru-Team/"}
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Cocktail"}
            img={Cocktail}
            code={"https://github.com/raquelgonzalezcalvo/Buscador-de-Cocteles"}
            proyect={
              "https://raquelgonzalezcalvo.github.io/Buscador-de-Cocteles/"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Card"}
            img={Card}
            code={
              "https://github.com/raquelgonzalezcalvo/Awesome-profile-cards"
            }
            proyect={
              "https://raquelgonzalezcalvo.github.io/Awesome-profile-cards/"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Harry Potter"}
            img={HarryPotter}
            code={
              "https://github.com/raquelgonzalezcalvo/buscador-personajes-Harry-Potter"
            }
            proyect={
              "https://raquelgonzalezcalvo.github.io/buscador-personajes-Harry-Potter/"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Gestor Projectos"}
            img={GestorProyectos}
            code={"https://github.com/raquelgonzalezcalvo/Gestor-de-proyectos"}
            proyect={
              "https://raquelgonzalezcalvo.github.io/Gestor-de-proyectos/#/create"
            }
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Juego de memoria"}
            img={JuegoMemoria}
            code={"https://github.com/raquelgonzalezcalvo/Juego-de-memoria"}
            proyect={"https://raquelgonzalezcalvo.github.io/Juego-de-memoria/"}
          />
        </div>
        <div className="proyects__listProyects__listProyects1">
          <ProjectCard
            title={"Advice generator"}
            img={AdviceGenerator}
            code={"https://github.com/raquelgonzalezcalvo/advice-generator-app"}
            proyect={
              "https://raquelgonzalezcalvo.github.io/advice-generator-app/"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Proyects;
