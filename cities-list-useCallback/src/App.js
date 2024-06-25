import "./styles.css";
import React, { useState } from "react";
import { CitiesList } from "./CitiesList";

const listOfCities = ["Lisbon", "Tokyo", "Berlin", "Rotterdam", "Jakarta"];

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(listOfCities);

  const handleClick = () => {
    setList([...list, name]);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleRemoveClick = (item) => {
    const filteredList = list.filter((listItem) => listItem !== item);

    setList(filteredList);
  };

  console.log("Page render");

  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <CitiesList list={list} onRemoveClick={handleRemoveClick} />
    </div>
  );
};

export default App;
