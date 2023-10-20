import React from "react";
import NavHome from "./NavHome/NavHome";
import { useParams } from "react-router-dom";
import {Art, Clothing, Logo, Packaging} from "./Sections"

const Home = () => {
  const { path } = useParams();
  return (
    <section id="category/home" className="mt-8 ml-8 ">
      <NavHome />

      <section className="mt-5">
        {path === undefined && <Logo />}
        {path === "Logo" && <Logo />}

        {path === "Clothing" && <Clothing />}

        {path === "Art" && <Art />}

        {path === "Packaging" && <Packaging />}
      </section>
    </section>
  );
};

export default Home;
