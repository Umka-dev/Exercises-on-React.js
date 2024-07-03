import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Typography } from '@mui/material';
import Users from './Users';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Container>
          <Typography variant='h2' align='center' gutterBottom>
            Fetch API Example
          </Typography>
          <Users />
        </Container>
      </header>
    </div>
  );
};

export default App;
