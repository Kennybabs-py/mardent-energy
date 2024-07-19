import { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import MardentLogo from "@/assets/mardent-energy.png";
import "./header.scss";
import DropDown from "@/components/ui/dropdown";

const ourCompanyLinks = [
  { link: "/", external: false, name: "About Us" },
  { link: "/", external: false, name: "About Us" },
  { link: "/", external: false, name: "About Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Link to="/">
        <figure>
          <img src={MardentLogo} alt="mardent energy" />
        </figure>
      </Link>

      <nav className="desktop__nav">
        <ul>
          <li>
            <DropDown links={ourCompanyLinks}>Our Company</DropDown>
          </li>
          <li>
            <DropDown links={ourCompanyLinks}>Our Operations</DropDown>
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
  );
}
