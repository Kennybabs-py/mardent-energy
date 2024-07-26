import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
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
            Call: +234 706 7366 155
          </a>
          <a href="mailto:info@mardentenergy.com">
            <IoMailOutline />
            Email: info@mardentenergy.com
          </a>
        </div>

        <div className="email__links__wrapper">
          <div className="links__wrapper">
            <div className="links__container">
              <h3>Our Company</h3>

              <ul>
                <li>
                  <Link to="/"> Who we are</Link>
                </li>
                <li>
                  <Link to="/"> Mission</Link>
                </li>
                <li>
                  <Link to="/"> Vision</Link>
                </li>
                <li>
                  <Link to="/"> Management</Link>
                </li>
              </ul>
            </div>

            <div className="links__container">
              <h3>Our Operations</h3>

              <ul>
                <li>
                  <Link to="/"> Upstream</Link>
                </li>
              </ul>
            </div>

            <div className="links__container">
              <h3>
                <span className="invisible">Others</span>
              </h3>

              <ul>
                <li>
                  <Link to="/"> Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/"> Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/"> Careers</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
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
