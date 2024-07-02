import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledItem = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  list-style: decimal;
  display: flex;
  align-items: left;
  text-align: left;
  justify-content: space-between;
  &:hover {
    background-color: #eff5f8;
    border-radius: 5px;
  }
`;

const DeleteButton = styled(DeleteIcon)`
  visibility: hidden;
  color: #1b9cd0;
  ${StyledItem}:hover & {
    visibility: visible;
  }
`;

export const City = ({ city, onRemoveClick }) => {
  const handleCityClick = () => onRemoveClick(city);

  console.log('Element render');

  return (
    <StyledItem>
      {city}
      <DeleteButton onClick={handleCityClick} />
    </StyledItem>
  );
};
