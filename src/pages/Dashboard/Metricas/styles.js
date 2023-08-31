import styled  from "styled-components";

export const Container = styled.div`

#pickerDate{
width: 200px;
text-align: center;
height: 30px;
border: solid 1px #f03939;
margin-left: 50px;
margin-bottom: 20px;
border-radius: 10px;

&:focus{
    outline: none;
}
}
`

export const ContainerMetricas= styled.div``

export const Header= styled.div`

display: flex;
margin-top: 30px;
margin-bottom: 30px;
margin-left: 80px;

`
export const VideoName = styled.h3``
export const CardContainer= styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
margin-bottom: 30px;

`
export const ChartArea  = styled.div`

padding: 30px;

`