import "../styles/components/Contact.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
// import contact from "../images/contact.png";
const Contact = () => {
  return (
    <div>
      <div class="social">
        <p className="social__p"></p>
        {/* <img src={contact} className="image__contact"></img> */}
        <ul className="custom-ul social__wrapper">
          <li class="custom-li social__wrapper-icon">
            <a
              className="custom-a contact"
              href="https://www.linkedin.com/in/raquel-gonz%C3%A1lez-calvo-"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="custom-li social__wrapper-icon">
            <a
              className="custom-a contact"
              href="https://github.com/raquelgonzalezcalvo"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li className="custom-li social__wrapper-icon">
            <a
              className="custom-a contact"
              href="mailto:ragoncal13@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
