import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
          fontWeight: 'normal',
          marginTop: 2,
        }}
      >
        Editable City List
      </Typography>
      <div>
        <TextField
          placeholder='Type the city name'
          variant='standard'
          sx={{
            marginTop: 4,
            marginBottom: 4,
            minWidth: '320px',
            '& .MuiInput-underline:before': {
              borderBottomColor: 'gray', // Цвет линии до фокуса
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#1b9cd0', // Цвет линии при фокусе
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'gray',
            },
          }}
          // className='custom-input'
          type='text'
          value={name}
          onChange={handleChange}
        />
        <Button
          sx={{
            marginTop: 4,
            marginLeft: 2,
            backgroundColor: '#1b9cd0',
            color: 'white',
            '&:hover': {
              backgroundColor: '#2180aa',
            },
          }}
          onClick={handleClick}
        >
          Add
        </Button>
        <CityList list={list} onRemoveClick={handleRemoveClick} />
      </div>
    </>
  );
};

export default App;
