import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: #FFF;

    &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-track {
    background: #FFF !important;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #f13a3a;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #f13a3a;
  }

  
@media only screen and (max-width: 995px) {

.sm-mt{

    margin-top: 60px;

}
}

  }

  a{
    color: #f9f9f9;
    text-decoration: none;
  }

  ul{
    list-style: none;
  }`
  
