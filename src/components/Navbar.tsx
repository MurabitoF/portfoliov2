import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import LanguageToggle from "./LanguageToggle";
import BurgerMenu from "./icons/BurgerMenu";
import Close from "./icons/Close";
import { useToggle, useWindowSize } from "usehooks-ts";
import * as m from "../paraglide/messages";

const Navbar = () => {
  const [on, toggle, setValue] = useToggle(true);
  const { width = 0 } = useWindowSize();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (width! > 1024) {
      setValue(true);
    }
  }, [width]);

  return (
    <>
      <nav
        className={`container fixed z-10 mt-5 flex min-h-16 flex-wrap items-center justify-between rounded-[30px] px-10 py-5 transition-colors duration-300 ${scrollPosition > 0 || !on ? "navbar" : ""}`}
      >
        <div>
          <a href="/">
            <img
              src="/logo/Logo-dark.svg"
              alt="Franco Murabito portfolio logo"
              className="w-20"
            />
          </a>
        </div>
        {width! > 1024 ? (
          <>
            <div>
              <ul className="flex gap-16">
                <li>
                  <NavLink
                    href="#experience"
                    label={`<${m.navExperience()}>`}
                  />
                </li>
                <li>
                  <NavLink href="#projects" label={`<${m.navProjects()}>`} />
                </li>
                <li>
                  <NavLink href="#about-me" label={`<${m.navAboutMe()}>`} />
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-8">
              <LanguageToggle />
            </div>
          </>
        ) : (
          <>
            <div>
              <button onClick={() => toggle()} className="text-neutral-100">
                {on ? <BurgerMenu /> : <Close />}
              </button>
            </div>
          </>
        )}
        {!on && (
          <div
            style={{ display: !on ? "block" : "none" }}
            className="w-full text-neutral-100"
          >
            <div>
              <ul className="flex flex-col items-center gap-16 py-8">
                <li>
                  <NavLink
                    toggle={() => setValue(true)}
                    href="#experience"
                    label={`<${m.navExperience()}>`}
                  />
                </li>
                <li>
                  <NavLink
                    toggle={() => setValue(true)}
                    href="#projects"
                    label={`<${m.navProjects()}>`}
                  />
                </li>
                <li>
                  <NavLink
                    toggle={() => setValue(true)}
                    href="#about-me"
                    label={`<${m.navAboutMe()}>`}
                  />
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-evenly">
              <LanguageToggle />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
