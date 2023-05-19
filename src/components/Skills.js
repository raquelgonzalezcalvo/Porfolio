import React from "react";
import "../styles/core/reset.scss";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { SiGithub } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSqlite } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills">
      {/* <div>
        <h2 className="skills__title">Habilidades</h2>
      </div> */}
      <div className="skills__icons">
        <SiHtml5 />
      </div>
      <div className="skills__icons">
        <DiCss3 />
      </div>
      <div className="skills__icons">
        <DiSass />
      </div>
      <div className="skills__icons">
        <BsBootstrapFill />
      </div>
      <div className="skills__icons">
        <DiJavascript1 />
      </div>
      <div className="skills__icons">
        <FaReact />
      </div>
      <div className="skills__icons">
        <SiGithub></SiGithub>
      </div>
      <div className="skills__icons">
        <BsGit />
      </div>
      <div className="skills__icons">
        <FaNode />
      </div>
      <div className="skills__icons">
        <DiMongodb />
      </div>
      <div className="skills__icons">
        <SiSqlite />
      </div>
    </section>
  );
};

export default Skills;
