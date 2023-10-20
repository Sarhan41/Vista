import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinks } from "../../constants";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => setIsOpen(!isOpen);

  return (
    <section>
      <div
        id="side-bar-overlay"
        className={`bg-gray-200 w-[40vw] h-screen absolute z-50 top-0 left-0 shadow-xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300
        `}
      >
        <div className="mt-6 ml-6">
          <AiOutlineCloseCircle
            onClick={toggleSideBar}
            className="h-10 w-10 cursor-pointer text-red-900"
          />
        </div>
        <ul className="mt-4 z-100  ml-6 space-y-8">
          {NavLinks.map((link) => (
            <li key={link.path} className="flex-wrap">
              <Link
                to={link.path}
                className="text-xl font-semibold hover:text-text   hover:font-bold text-black hover:transition"
                onClick={toggleSideBar}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

      </div>
      <div
        id="pementnent icon"
        onClick={toggleSideBar}
        className="cursor-pointer"
      >
        <GiHamburgerMenu className="h-10 w-10" />
      </div>
    </section>
  );
};

export default SideBar;
