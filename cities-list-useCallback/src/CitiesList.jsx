import React from "react";
import { City } from "./City";

export const CitiesList = React.memo(({ list, onRemoveClick }) => {
  console.log("List render");

  return list.map((item) => {
    return <City key={item} city={item} onRemoveClick={onRemoveClick} />;
  });
});
