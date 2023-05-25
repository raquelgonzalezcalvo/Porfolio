import React, { useState } from "react";
import "../styles/core/reset.scss";
import "../styles/components/Navbar.scss";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const data = [
  {
    icon: <BiHomeAlt></BiHomeAlt>,
    label: "Home",
    to: "/",
  },
  {
    icon: <BsPersonPlus />,
    label: "Sobre mí",
    to: "/About",
  },
  {
    icon: <AiOutlineFundProjectionScreen />,
    label: "Proyectos",
    to: "/Projects",
  },
  {
    icon: <AiOutlineMail />,
    label: "Contacto",
    to: "/Contact",
  },
];
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    // setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setToggleIcon(false); // Cerrar el menú de hamburguesa
    //   // setMenuOpen(false); // Ocultar el menú de navegación
  };
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img className="image" src={logo} alt="logo"></img>
          </Link>
        </div>
        <ul
          className={`header__navbar__container__menu ${
            toggleIcon ? "active" : ""
          }`}
        >
          {" "}
          {data.map((item, key) => (
            <li
              key={key}
              onClick={closeMenu}
              className="header__navbar__container__menu__item"
            >
              <Link
                className="header__navbar__container__menu__item__links"
                to={item.to}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav__icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX className="nav__icon-x" /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
