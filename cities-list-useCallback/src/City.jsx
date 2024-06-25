import React from "react";

export const City = ({ city, onRemoveClick }) => {
  const handleCityClick = () => onRemoveClick(city);

  console.log("Element render");

  return <div onClick={handleCityClick}>{city}</div>;
};
