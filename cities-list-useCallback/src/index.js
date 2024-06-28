import { render } from 'react-dom';
import { StrictMode } from 'react';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
