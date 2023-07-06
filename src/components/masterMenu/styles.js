import styled  from "styled-components";

export const Container = styled.div`
background-color: #FFF9;

.menu{
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #f13a3a;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #f13a3a;
  }
}

.btnProdutos{
    margin: 10%;
}
`