import styled  from "styled-components";

export const Container = styled.section`
background-color: #f9f9f9;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Title = styled.h2`

font-size: 24px;

`

export const Card = styled.div`

width: 20%;

`

export const Input = styled.input`

width: 100%;
height: 40px;
border: 2px solid #d2d2d2;
border-radius: 10px;
outline: none;
padding-left: 10px;
&:focus{
    border: 2px solid #e65f5f;
    outline: none;
}
`

export const Btn = styled.button`

background-color: #e65f5f;
color: #f9f9f9;
width: 100%;
border: none;
border-radius: 10px;
height: 35px;
margin-top: 20px;
`