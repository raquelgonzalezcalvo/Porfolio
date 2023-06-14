import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/Home.scss";
import me from "../images/porfolio.me.jpg";
import CV from "../assets/CV Raquel González Calvo.pdf";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleContactme = () => {
    navigate("/Contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__image">
        <img className="home__image__me" src={me} alt="me"></img>
      </div>
      <div className="home__text">
        <h1>Raquel González</h1>
        <h2>Front end developer</h2>
      </div>
      <div className="home__contact">
        <button className="home__contact__button" onClick={handleContactme}>
          Contáctame
        </button>

        <a
          href={CV}
          download="CVRaquelGonzález"
          target="_blank"
          rel="noopener noreferrer"
          className="home__contact__cv"
        >
          Descargar CV
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
