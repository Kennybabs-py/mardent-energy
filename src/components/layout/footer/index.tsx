import {
  IoMailOutline,
  IoLocationOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

import MardentLogo from "@/assets/mardent-energy.png";
import "./footer.scss";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer__content__wrapper">
        <div className="logo__copyright">
          <Link to="/">
            <figure className="logo">
              <img src={MardentLogo} alt="mardent energy" />
            </figure>
          </Link>
        </div>

        <div className="contact__methods">
          <span className="address">
            <IoLocationOutline /> 155 House 6 Otumba Bimbo Ashiru Close, off 13
            Olawale Dawodu Street, Ikoyi Lagos.
          </span>
          <a
            href="tel:+234 706 7366 155"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt />
            +234 706 7366 155
          </a>
          <a href="mailto:corporates@matrixenergygroup.com">
            <IoMailOutline />
            Mail us
          </a>
        </div>

        <div className="email__links__wrapper">
          <div className="email__wrapper">
            <span>Never miss an update</span>

            <div>
              <input type="text" placeholder="Enter your email" />

              <button type="button">
                <IoArrowForwardCircleOutline />
              </button>
            </div>
          </div>

          <div className="links__wrapper">
            <div className="links__container">
              <h3>Our Company</h3>

              <ul>
                <li>
                  <a
                    href="mailto:info@mardentenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Who we are
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mardentenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mardentenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vision
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mardentenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Management
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@mardentenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="mailto:info@mardentenergy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+234 706 7366 155"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="links__container">
              <h3>Our Operations</h3>

              <ul>
                <li>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Upstream
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Mardent Energy
      </p>
    </footer>
  );
}
