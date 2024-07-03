import React, { useState, useCallback } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CityList } from './CityList';

const CITY_LIST = ['Lisboa', 'Tokyo', 'Berlin', 'Amsterdam', 'Madrid'];

const App = () => {
  const [cityList, setCityList] = useState(CITY_LIST);
  const [newCity, setNewCity] = useState('');

  const handleChange = (event) => {
    setNewCity(event.target.value);
  };

  const handleAddCity = () => {
    if (newCity.trim() !== '' && !cityList.includes(newCity.trim())) {
      setCityList([...cityList, newCity.trim()]);
      setNewCity('');
    }
  };

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCity();
    }
  };

  const handleRemoveClick = useCallback(
    (city) => {
      const filteredCityList = cityList.filter((listItem) => listItem !== city);
      setCityList(filteredCityList);
    },
    [cityList]
  );

  console.log('Page render');

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: '0',
            padding: '0',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            fontSize: '1.2em',
            lineHeight: '1.5em',
            backgroundColor: '#9ecfda',
          },
        }}
      />
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
          marginTop: 10,
        }}
      >
        Editable City List
      </Typography>
      <div>
        <TextField
          placeholder='Type the city name'
          variant='standard'
          sx={{
            marginTop: 8,
            marginBottom: 6,
            fontSize: '3em',
            minWidth: '320px',
            '& .MuiInput-underline:before': {
              borderBottomColor: 'gray', // Line color before focus
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#1b9cd0', // Focus line color
            },
            '& .MuiInputBase-input': {
              fontSize: '1.2em', // Font size for input text
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'gray',
            },
          }}
          type='text'
          value={newCity}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
        />

        <Button
          sx={{
            marginTop: 8,
            marginLeft: 2,
            backgroundColor: '#1b9cd0',
            color: 'white',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#2180aa',
            },
          }}
          onClick={handleAddCity}
        >
          Add
        </Button>
        <CityList list={cityList} onRemoveClick={handleRemoveClick} />
      </div>
    </>
  );
};

export default App;
