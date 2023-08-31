import styled  from "styled-components";

export const Container = styled.div`
background-color: #FFF9;

.flexWrap{
    display: flex;
    flex-direction: row;
}
.flexWrapVenda{
    display: flex;
    flex-direction: row;

}



@media only screen and (max-width: 600px) {

    .content-img{

        justify-content: center;
        align-items: center;
    }    

    .flexWrap{
        overflow-x: auto;
    }
     .flexWrapVenda{
        overflow-x: auto;
    }

}
@media only screen and (max-width: 800px) {

 
     .flexWrapVenda{
        overflow-x: auto;
        gap: 20px;
    }

}
`