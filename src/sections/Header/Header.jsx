import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constants";
import Icon from "./Icon";
import SideBar from "./MobileSideBar";
import { BsTriangle } from "react-icons/bs";

const Header = () => {
  return (
    <header className="sticky">
      {/* //Desktop Header */}
      <nav className="ml-6 hidden sm:flex sm:justify-between sm:items-center z-10">
        <div id="logo">
          <Link to="/">
              <BsTriangle className="h-8 w-8"/>
          </Link>
        </div>
        <div
          id="Navlinks"
          className="flex-between gap-10 font-young text-text text-lg dark:text-white dark:bg-black"
        >
          {NavLinks.map((link) => (
            <Link to={link.path}>
              <div className="hover:text-text-gray">{link.title}</div>
            </Link>
          ))}
        </div>
        <div id="darkmode">
          <Icon />
        </div>
      </nav>

      {/* //Mobile Header */}
      <nav className=" ml-6 sm:hidden flex-between ">
        <div>
          <SideBar />
        </div>
        <div id="logo">
          <Link to="/">
            <BsTriangle className="h-8 w-8"/>
          </Link>
        </div>
        <div id="darkmode">
          <Icon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
