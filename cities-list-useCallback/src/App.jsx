import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CityList } from './CityList';
import GlobalStyles from './GlobalStyles';

const CITY_LIST = ['Lisbon', 'Tokyo', 'Berlin', 'Rotterdam', 'Jakarta'];

const App = () => {
  const [cityName, setCityName] = useState('');
  const [cityList, setCityList] = useState(CITY_LIST);

  setTimeout(() => {
    console.log('Page render');
  }, 5000);

  const handleClick = () => {
    if (cityName.trim() === '') {
      return; // Don't add an empty value
    }
    setCityList([...cityList, cityName]);
    setCityName('');
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
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
          value={cityName}
          onChange={handleChange}
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
          onClick={handleClick}
        >
          Add
        </Button>
        <CityList list={cityList} onRemoveClick={handleRemoveClick} />
      </div>
    </>
  );
};

export default App;
