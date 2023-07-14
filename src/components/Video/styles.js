import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Video = styled.video`
  display: block;
  width: 100%;
`;

export const Play = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props?.cor ? props?.cor : "#f03939")};
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: ${(props) => (props?.radios ? "150px" : "10px")};
  height: ${(props) => (props?.autoPlay ? "150px" : "60px")};
  width: ${(props) => (props?.autoPlay ? "290px" : "60px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Progress = styled.progress`
  width: 100%;
  height: 10px;
  appearance: none; 
  border: none;
  overflow: hidden;
  position: absolute;
  margin-top: -2.3% !important;

  &::-webkit-progress-bar {
    background-color: #00000000;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => (props?.cor ? props?.cor : "#f03939")};
  }
`;
