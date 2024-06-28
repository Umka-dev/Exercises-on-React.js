import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';

const CityItem = styled.li`
  cursor: pointer;
  padding: 3px 10px;
  list-style: decimal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #eff5f8;
    border-radius: 5px;
  }
`;

const DeleteButton = styled(DeleteIcon)`
  visibility: hidden;
  ${CityItem}:hover & {
    visibility: visible;
  }
`;

export const City = ({ city, onRemoveClick }) => {
  const handleCityClick = () => onRemoveClick(city);

  console.log('Element render');

  return (
    <CityItem>
      {city}
      <DeleteButton onClick={handleCityClick} />
    </CityItem>
  );
};
