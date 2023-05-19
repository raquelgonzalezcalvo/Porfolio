import React from "react";
import "../styles/core/reset.scss";
import Skills from "./Skills";
import "../styles/components/About.scss";
import image from "../images/me2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__div">
        <img className="about__div__img" src={image} alt="image2"></img>
        {/* <h2 className="about__div__h2">Presentación</h2> */}
        <p className="about__div__p">
          Empecé como Trabajadora Social, viajé por el mundo y acabé aterrizando
          en la programación web. Con ganas de abrirme camino en este nuevo
          sector y crecer profesionalmente. Soy una persona resolutiva y
          perseverante que no se rinde a la primera. Destaco mi proactividad, mi
          capacidad para saber trabajar en equipo, mis ganas de aprender y mi
          capacidad de adaptación.
        </p>
        {/* <img className="about__div__img" src={image} alt="image2"></img> */}
      </div>
      <div>
        <Skills></Skills>
      </div>
    </section>
  );
};

export default About;
