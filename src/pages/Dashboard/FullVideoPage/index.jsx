import { Container, SkeletonFrame } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { videoApi } from "../../../services/video";
import FullVideo from "../../../components/FullVideo"

export default (props) => {
  const [color, setColor] = useState("#f03939");
const [video, setVideo] = useState()
  const { id_video } = useParams()

  const handleGetVideos = async () => {

    const res =  await videoApi.getVideobyId(id_video)
    console.log(res?.data?.response)
    setVideo(res?.data?.response)
    

}

useEffect(useCallback(

    () => {
      
    handleGetVideos()
}), [])

  

  return (
    <Container>
 
    
    <FullVideo 
    color={video?.cor}
    textInferior={video?.textInferior}
    textSuperior={video?.textSuperior}
                      colorText={video?.corText}
                      colorBar={video?.corBar}
                      caminhoThumb={video?.thumb}
                      caminhoVideo={id_video} />
                     
    </Container>
  );
};
