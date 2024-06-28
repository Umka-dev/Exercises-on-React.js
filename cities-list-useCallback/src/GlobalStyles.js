import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #9ecfda;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 1em;
    line-height: 1.5em;
    text-align: center;
  }
  button {
    padding: 10px 20px;
    margin: 20px 10px;
    font-size: 0.8em;
    background-color: #1b9cd0;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  
    &:hover {
      background-color: #2180aa;
    }

  .input {
    padding: 10px;
    margin: 30px 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
}
`;

export default GlobalStyles;
