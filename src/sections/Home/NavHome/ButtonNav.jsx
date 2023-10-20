import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ButtonNav = () => {
  const [isSelected, setIsSelected] = useState("Logo & Identity");
  const navigate = useNavigate();

  const handleClick = (title, path) => {
    setIsSelected(title);
    navigate(`/categories/${path}`);
  };

  return (
    <nav className="max-w-[1000px] m-auto px-4 py-6 relative overflow-hidden">
      <div className="flex  gap-16 group max-md:overflow-x-auto md:hover:translate-x-0 md:transition-transform md:duration-1000 md:-translate-x-1/4 md:group-hover:-translate-x-1/2">
        <Button
          title="Logo & Identity"
          handleClick={handleClick}
          isSelected={isSelected}
          path="Logo"
          Color="g"
        />
        <Button
          title="Clothing & Merchandise"
          handleClick={handleClick}
          isSelected={isSelected}
          path="Clothing"
          Color="b"
        />
        <Button
          title="Art & Illustration"
          handleClick={handleClick}
          isSelected={isSelected}
          path="Art"
          Color="t"
        />
        <Button
          title="Packaging & Label"
          handleClick={handleClick}
          isSelected={isSelected}
          path="Packaging"
          Color="gr"
        />
      </div>
    </nav>
  );
};

export default ButtonNav;
