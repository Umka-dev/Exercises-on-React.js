import React from 'react';
import { City } from './City';
import styled from 'styled-components';

const List = styled.ul`
  padding: 5px;
  margin: 0;
  font-size: 1em;
`;

export const CitiesList = React.memo(({ list, onRemoveClick }) => {
  console.log('List render');

  return list.map((item) => {
    return (
      <>
        <List />
        <City key={item} city={item} onRemoveClick={onRemoveClick} />
      </>
    );
  });
});
