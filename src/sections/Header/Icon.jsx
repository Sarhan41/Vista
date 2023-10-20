import React from "react";
import { BsSun } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";


const Icon = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="dark:text-white">
      <button onClick={toggleTheme} className="p-4">
       <BsSun  className="h-8 w-8 dark:block hidden "/>
        <FiMoon className="h-8 w-8 dark:hidden " />
      </button>
    </div>
  );
};

export default Icon;
