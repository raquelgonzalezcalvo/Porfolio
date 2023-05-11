import "../styles/components/Contact.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div class="social">
        <p className="social__p"></p>
        <ul className="custom-ul social__wrapper">
          <li class="custom-li social__wrapper-icon">
            <a
              className="custom-a contact"
              href="https://www.linkedin.com/in/raquel-gonzález-calvo-999bab272"
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
