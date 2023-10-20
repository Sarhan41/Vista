import React from "react";

const Button = ({ title, handleClick, isSelected , path , 
  Color}) => {
  return (
    <>
        <button
          className={`button ${
            isSelected === title
              ? `ring-2 ${Color}` 
              : " focus:ring-2 focus:ring-[#ff784e]"
          }`}
          onClick={() => handleClick(title,path)}
        >
          {title}
        </button>
    </>
  );
};

export default Button;
