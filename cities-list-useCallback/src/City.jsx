import React from 'react';
import { styled } from '@mui/system';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledItem = styled(ListItem)`
  cursor: pointer;
  &:hover {
    background-color: #eff5f8;
    border-radius: 10px;
  }
  & button {
    visibility: hidden;
    color: #1b9cd0;
  }
  &:hover button {
    visibility: visible;
  }
`;

const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: 1.2em;
    line-height: 1em;
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
        <DeleteIcon />
      </IconButton>
    </StyledItem>
  );
};

export default City;
