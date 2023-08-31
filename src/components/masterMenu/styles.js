import styled  from "styled-components";

export const Container = styled.div`
background-color: #FFF9;

@media only screen and (max-width: 995px) {
  background-color: #f9f9f900;

position: ${props => props.open ? 'relative' : 'absolute'};
z-index: 9999;
}

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

  .logo{
    width: 160px;
  }
  
  z-index: 1080;
  position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    margin-right: 0!important;
    margin-left: 0!important;

    @media only screen and (max-width: 995px) {
      position: absolute;
      display: ${props => props.open ? 'block' : 'none'};
      
      .logo{
        width: 140px;
      }
    }

}

.btnProdutos{
    margin: 10%;
}
`