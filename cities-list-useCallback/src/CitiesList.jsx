import React from 'react';
import { City } from './City';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px 0;
`;

const List = styled.ol`
  text-align: left;
  font-size: 1.2em;
  line-height: 1.8em;
  padding: 0;
  margin: 0;
`;

export const CitiesList = React.memo(({ list, onRemoveClick }) => {
  console.log('List render');

  return (
    <Container>
      <List>
        {list.map((item) => (
          <City key={item} city={item} onRemoveClick={onRemoveClick} />
        ))}
      </List>
    </Container>
  );
});
