import React, { useState } from 'react';
import { Container, TextField, Button, List } from '@mui/material';
import { styled } from '@mui/system';
import City from './City';

const StyledTextField = styled(TextField)`
  min-width: 190px;
  width: 68%; // Initial width value

  & label {
    color: gray;
  }

  &:focus-within label {
    color: #1b9cd0;
  }

  // & .MuiInputLabel-root {
  //   color: gray; // Default Label Color
  // }

  // & .MuiFormLabel-root.Mui-focused {
  //   color: #1b9cd0; // Focus Label Color
  // }

  & .MuiInput-underline:before {
    border-bottom-color: gray; // Line color before focus
  }

  & .MuiInput-underline:after {
    border-bottom-color: #1b9cd0; // Focus line color
  }

  & .MuiInputBase-input {
    font-size: 1.2em; // Font size for input text
  }

  @media (min-width: 600px) {
    width: 310px; // Width on large screens
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 16px;
    margin-left: 16px;
    padding: 10px 20px;
    line-height: normal;
    background-color: #1b9cd0;
    border-radius: 20px;
    &:hover {
      background-color: #2180aa;
    }
  }
`;

const CityList = React.memo(({ cityList, addCity, deleteCity }) => {
  const [newCity, setNewCity] = useState('');

  const handleInputChange = (event) => {
    setNewCity(event.target.value);
  };

  const handleAddCity = () => {
    addCity(newCity);
    setNewCity('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddCity();
    }
  };

  return (
    <Container maxWidth='xs'>
      <StyledTextField
        label='Add city'
        value={newCity}
        variant='standard'
        type='text'
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <StyledButton variant='contained' color='primary' onClick={handleAddCity}>
        Add
      </StyledButton>
      <List style={{ marginTop: '24px' }}>
        {cityList.map((city, index) => (
          <City key={index} city={city} deleteCity={deleteCity} />
        ))}
      </List>
    </Container>
  );
});

export default CityList;
