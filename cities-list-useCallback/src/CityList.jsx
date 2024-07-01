import React from 'react';
import { City } from './City';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import styled from 'styled-components';

const StyledList = styled(List)`
  text-align: left;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  font-size: 1em;
`;

export const CityList = React.memo(({ list, onRemoveClick }) => {
  console.log('List render');

  return (
    <Container maxWidth='xs'>
      <StyledList>
        {list.map((item) => (
          <City key={item} city={item} onRemoveClick={onRemoveClick} />
        ))}
      </StyledList>
    </Container>
  );
});
