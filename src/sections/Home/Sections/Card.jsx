import React from "react";

const Card = ({ title, price, description ,  color }) => {
  return (
    <div className={`bg-${color} rounded-lg overflow-hidden shadow-lg p-4  transform scale-100 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer`}>
   

      <h2 className="text-2xl font-young text-white mb-2">{title}</h2>
      <div className="text-xl font-roboto text-white mb-2">${price}</div>
      <p className="text-white font-robotc">{description}</p>
    </div>
  );
};

export default Card;
