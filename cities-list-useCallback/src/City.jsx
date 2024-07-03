import React from 'react';
import styled from 'styled-components';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledItem = styled(ListItem)`
  cursor: pointer;
  &:hover {
    background-color: #eff5f8;
    border-radius: 10px;
  }
`;

const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: 1.2em;
    line-height: 1em;
  }
`;

const DeleteButton = styled(DeleteIcon)`
  visibility: hidden;
  color: #1b9cd0;
  ${StyledItem}:hover & {
    visibility: visible;
  }
`;

const City = ({ city, deleteCity }) => {
  return (
    <StyledItem>
      <StyledListItemText primary={city} />
      <IconButton
        edge='end'
        aria-label='delete'
        onClick={() => deleteCity(city)}
      >
        <DeleteButton />
      </IconButton>
    </StyledItem>
  );
};

export default City;
