import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import "./footer.scss";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <ul>
        <li>
          <a
            href="mailto:info@mardentenergy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMailOutline /> Mail Us
          </a>
        </li>
        <li>
          <a
            href="tel:+234 706 7366 155"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt />
            Call: +234 706 7366 155
          </a>
        </li>
      </ul>

      <p>
        Visit us: 155 House 6 Otumba Bimbo Ashiru Close, off 13 Olawale Dawodu
        Street, Ikoyi Lagos.
      </p>
    </footer>
  );
}
