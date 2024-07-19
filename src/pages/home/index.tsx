import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import MardentLogo from "@/assets/mardent-energy.png";
import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <header>
        <Link to="/">
          <figure>
            <img src={MardentLogo} alt="mardent energy" />
          </figure>
        </Link>

        <nav className="desktop__nav">
          <ul>
            <li>
              <a href="#" rel="noopener noreferrer">
                Our Company
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Mission
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Careers
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                News
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="mobile__nav__button"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>

        <nav className={`mobile__nav ${open ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" rel="noopener noreferrer">
                Our Company
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Mission
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Careers
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                News
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Powering Progress with Indigenous Excellence</h2>
        <h3>Unlocking Potential, Driving Growth</h3>
        <p>
          At <span>Mardent Energy Limited</span>, we are committed to harnessing
          our rich heritage and unparalleled expertise to deliver innovative
          upstream oil and gas solutions.
        </p>
      </section>

      <footer id="footer">
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
    </main>
  );
}
