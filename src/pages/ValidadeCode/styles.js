import styled from 'styled-components'
export const Container = styled.div`

    background-size: 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Title = styled.h1`
margin-top: 10px;
color: #272729;
font-size: 16px;
`

export const InputArea = styled.div`

display: flex;
width: 40%;
border-radius: 10px;
justify-content: center;
align-items: center;
padding: 0px 10px;
margin-top: 15px;

.character {
  border: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: #f6f5fa;
padding-left: 10px;
padding-right: 10px;
  color: #272729;

}

`

export const InputText = styled.input`
    height: 50px;
    width: 90%;
    margin-left: 5px;
    border: none;
    font-size: 1rem;
    &:focus{
        border: none;
        outline: none;
    }
`

export const Esqueci = styled.a`
font-size: 14px;
color: #f9f9f9;

cursor: pointer;

`
export const EsqueciDiv = styled.div`
width: 30%;
margin-top: 10px;
margin-bottom: 10px;

`

export const SmallText = styled.p`

color: #f9f9f9;

margin: 10px 0;

`

export const Button = styled.button`
margin-top: 30px;
background-color: #e65f5f;
width: 30%;
height: 40px;
border-radius: 10px;
border: none;
cursor: pointer;
color: #f9f9f9;
 &:hover{

    background-color: #963f3f;

}

`