import React from "react";
import { FooterData1 } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="dark:bg-[#111413] bg-[#d4e0e0] py-4 mt-20">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            Contact Info
          </h1>
          <p className="mb-2">Email: {FooterData1.email}</p>
          <p>Phone: {FooterData1.phone}</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Navigation</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories/Art">Art</Link>
            </li>
            <li>
              <Link to="/categories/Packaging">Packaging</Link>
            </li>
            <li>
              <Link to="/categories/Clothing">Clothing</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">
            Social Media
          </h1>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
