import Skeleton from "react-loading-skeleton";
import styled  from "styled-components";

export const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
outline: 0;
background: transparent;
overflow: hidden;
  &::-webkit-scrollbar{
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

`

export const SkeletonFrame = styled(Skeleton).attrs({


})`


`