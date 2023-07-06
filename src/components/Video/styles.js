import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Video = styled.video`

display: block;

`;

export const Play = styled.button`

position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${props => props?.cor ? props?.cor : '#f03939'};;
            color: white;
            border: none;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            border-radius: 200px;
            height: ${props => props?.autoPlay ? '100px' : '60px' };
            width:  ${props => props?.autoPlay ? '100px' : '60px' };
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
          

`;

export const Progress = styled.progress`

width: 100%;
  height: 15px;
  appearance: none;
  border: none;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: #333;
  }

  &::-webkit-progress-value {
    background-color: ${props => props?.cor ? props?.cor : '#f03939'};
  }

`;
