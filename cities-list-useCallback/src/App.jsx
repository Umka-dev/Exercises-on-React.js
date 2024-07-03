import React, { useState } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';
import CityList from './CityList';

const StyledTypography = styled(Typography)`
  && {
    font-size: 2rem; /* Default size */
    font-weight: normal;
    margin-top: 56px;

    @media (min-width: 600px) {
      font-size: 2.5rem; /* Size for sm screens */
    }

    @media (min-width: 960px) {
      font-size: 3rem; /* Size for md screens */
    }

    @media (min-width: 1280px) {
      font-size: 3.5rem; /* Size for lg screens */
    }

    @media (min-width: 1920px) {
      font-size: 4rem; /* Size for xl screens */
    }
  }
`;

const CITY_LIST = ['Lisboa', 'Tokyo', 'Berlin', 'Amsterdam', 'Madrid'];

const App = () => {
  const [cityList, setCityList] = useState(CITY_LIST);

  const addCity = (newCity) => {
    if (newCity.trim() !== '' && !cityList.includes(newCity.trim())) {
      setCityList([...cityList, newCity.trim()]);
    }
  };

  const deleteCity = (cityToDelete) => {
    setCityList(cityList.filter((city) => city !== cityToDelete));
  };

  return (
    <Container>
      <GlobalStyles
        styles={{
          body: {
            margin: '0',
            backgroundColor: '#9ecfda',
          },
        }}
      />
      <StyledTypography variant='h1' align='center' gutterBottom>
        Editable City List
      </StyledTypography>
      <CityList cityList={cityList} addCity={addCity} deleteCity={deleteCity} />
    </Container>
  );
};

export default App;
