import React, { useState, useCallback } from 'react';
import { CityList } from './CityList';
import GlobalStyles from './GlobalStyles';

const listOfCities = ['Lisbon', 'Tokyo', 'Berlin', 'Rotterdam', 'Jakarta'];

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(listOfCities);

  const handleClick = () => {
    setList([...list, name]);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleRemoveClick = useCallback(
    (item) => {
      const filteredList = list.filter((listItem) => listItem !== item);
      setList(filteredList);
    },
    [list]
  );

  console.log('Page render');

  return (
    <>
      <GlobalStyles />
      <h1>Editable list of cities</h1>
      <div>
        <input
          className='custom-input'
          type='text'
          value={name}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
        <CityList list={list} onRemoveClick={handleRemoveClick} />
      </div>
    </>
  );
};

export default App;
