import React from 'react';
import styled from 'styled-components';

const CityItem = styled.li`
  cursor: pointer;
  padding: 3px 10px;
  list-style: decimal;
  &:hover {
    background-color: #eff5f8;
    border-radius: 5px;
  }
`;

export const City = ({ city, onRemoveClick }) => {
  const handleCityClick = () => onRemoveClick(city);

  console.log('Element render');

  return <CityItem onClick={handleCityClick}>{city}</CityItem>;
};
