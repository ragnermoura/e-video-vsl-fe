import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
export const Container = styled.div`
  position: block;
  background: transparent;
  width: 100%;
  height: 100%;
 

  .skeleto{
    margin: 0;
    height: 100vh;
    max-height: 100%;
  }
`;

export const Video = styled.video`
display: block;
 -o-object-fit: cover;
 object-fit: cover;
max-width: 100%;
max-height: 100%;
margin: 0;
`;
export const Thumb = styled.img`
-o-object-fit: cover;
 object-fit: cover;
  display: block;
transform: scale(1);
max-width: 100%;
max-height: 100%;
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
  height: ${(props) => (props?.autoPlay ? "40%" : "150px")};
  width: ${(props) => (props?.autoPlay ? "40%" : "150px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    width: 80px;
    margin-top: 10px;
    margin-bottom: 10px;

  };
  .play{
    height: 48px ;
    width: 48px;
    margin-left: 12px;
  }
.text_superior{
  font-size: 18px;
  font-weight: 600;
};
.text_inferior{
  font-size: 20px;
  font-weight: 600;
};

  @media only screen and (max-width: 575px) and (min-width: 460px) {
    
  height: ${(props) => (props?.autoPlay ? "45%" : "110px")};
  width: ${(props) => (props?.autoPlay ? "45%" : "110px")};
  .text_superior{
  font-size: 16px;
  font-weight: 600;
};
.text_inferior{
  font-size: 16px;
  font-weight: 600;
};
  };

  @media only screen and (max-width: 450px) {
    
    height: ${(props) => (props?.autoPlay ? "45%" : "110px")};
  width: ${(props) => (props?.autoPlay ? "45%" : "110px")};

  .text_superior{
  font-size: 12px;
  font-weight: 600;
};
.text_inferior{
  font-size: 12px;
  font-weight: 600;
};

  img{
    width: 60px;
    margin-top: 10px;
    margin-bottom: 10px;

  }

  };

`;

export const Progress = styled.progress`
  width: 100%;
  height: 10px;
  appearance: none; 
  border: none;
  overflow: hidden;
  position: absolute;
  margin-top: -10px !important;

  &::-webkit-progress-bar {
    background-color: #00000000;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => (props?.cor ? props?.cor : "#f03939")};
  }
`;

export const SkeletonFrame = styled(Skeleton).attrs({})`

width: 100%;
height: 100%;

`