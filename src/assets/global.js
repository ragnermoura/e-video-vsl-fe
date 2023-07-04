import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: #D9D9D9;

    &::-webkit-scrollbar{
            width: 10px;
        }
        &::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #4136AA;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #322d87;
  }
  }

  a{
    color: #f9f9f9;
    text-decoration: none;
  }

  ul{
    list-style: none;
  }`
  
