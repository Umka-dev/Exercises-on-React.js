import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
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
      <Typography
        variant='h1'
        sx={{
          fontSize: {
            xs: '2rem', // Size for xs screens
            sm: '2.5rem', // Size for sm screens sm
            md: '3rem', // Size for md screens
            lg: '3.5rem', // Size for lg screens
            xl: '4rem', // Size for xl screens
          },
          marginTop: 2,
        }}
      >
        Editable City List
      </Typography>
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
