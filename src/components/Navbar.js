import React, { useState } from "react";
import "../styles/core/reset.scss";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Sobre mí",
    to: "/About",
  },
  {
    label: "Proyectos",
    to: "/Projects",
  },
  {
    label: "Contacto",
    to: "/Contact",
  },
];
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img className="image" src={logo} alt="logo"></img>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {" "}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX className="HiX" /> : <FaBars size={30} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
