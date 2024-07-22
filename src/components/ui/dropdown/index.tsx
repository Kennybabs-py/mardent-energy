import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";

import "./dropdown.scss";

type Props = {
  links: Array<{ link: string; external: boolean; name: string }>;

  children: ReactNode;
};

export default function DropDown(props: Props) {
  const { links, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown__wrapper">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </button>

      <div
        className={`dropdown__container ${open ? "open" : ""}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {links.map((item) => {
          {
            return item.external ? (
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
              >
                {item.name}
              </a>
            ) : (
              <Link key={item.name} to={item.link}>
                {item.name}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
