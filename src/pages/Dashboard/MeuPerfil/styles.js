import styled from "styled-components";

export const Container = styled.div`


.linha{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.center{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.rule{
    margin-bottom: 60px;
}

.linha_data{
    align-items: center;
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.input-row{
    display: flex;
    gap: 15px;
}
.input-row input{
    padding-left: 3px;
    width: 150px;
}

.custom-btn{
    margin-top: 5px;
    width: 15%;
    padding-top: 1%;
    padding-bottom: 1%;
    border: none;
    border-radius: 15px;
    background-color: #F03939;
    color: #f9f9f9;
    font-weight: 600;

}


@media only screen and (max-width: 950px) {
    .linha{
        flex-direction: column;
    }
    .input-row{
        flex-direction: column;
        gap: 1px;
        margin-bottom: 15px;
        width: 40%;
    }

    .input-row input{
    width: 100%;
}
}
@media only screen and (max-width: 600px) {
 
    .input-row{
       align-self: center;
        width: 80%;
    }

    .input-row input{
    width: 100%;
}
.custom-btn{
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    align-self: center;
}
}

@media only screen and (max-width: 450px) {

    .linha_data{
        align-items: flex-start;
    flex-direction: column;
}

}

`