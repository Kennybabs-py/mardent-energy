import { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import MardentLogo from "@/assets/mardent-energy.png";
import "./header.scss";
import DropDown from "@/components/ui/dropdown";
import PrimaryButton from "@/components/shared/buttons/primary-button";

const ourCompanyLinks = [
  { link: "/", external: false, name: "About Us" },
  { link: "/", external: false, name: "Missions" },
  { link: "/", external: false, name: "Vision" },
  { link: "/", external: false, name: "Management" },
];

const ourOperationsLinks = [{ link: "/", external: false, name: "Upstream" }];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="header__wrapper">
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
              <DropDown links={ourOperationsLinks}>Our Operations</DropDown>
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
              <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
                <PrimaryButton variation="secondary">Contact Us</PrimaryButton>
              </Link>
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
              <DropDown links={ourCompanyLinks}>Our Company</DropDown>
            </li>
            <li>
              <DropDown links={ourOperationsLinks}>Our Operations</DropDown>
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
              <Link to="/contact-us" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
