import React from 'react';
import { City } from './City';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 460px !important;
  margin: auto;
  padding: 16px;
`;

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
    <StyledContainer>
      <StyledList>
        {list.map((item) => (
          <City key={item} city={item} onRemoveClick={onRemoveClick} />
        ))}
      </StyledList>
    </StyledContainer>
  );
});
