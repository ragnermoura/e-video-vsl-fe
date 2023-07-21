import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { videoApi } from "../../../services/video";
import FullVideo from "../../../components/FullVideo";

export default () => {
  const [color, setColor] = useState("#f03939");
const [video, setVideo] = useState()
const [blobPath, setBlobPath] = useState('')
  const { id_video } = useParams()

function urlToBlob(url) {
    return fetch(url)
      .then(response => response.blob());
  }

  const handleGetVideos = async () => {

    const res =  await videoApi.getVideobyId(id_video)
    console.log(res?.data?.response)
    setVideo(res?.data?.response)


    urlToBlob(res?.data?.response?.video)
    .then(blob => {
      // Use o objeto Blob aqui
      setBlobPath(URL.createObjectURL(blob))
  
    })
    .catch(error => {
      console.error('Ocorreu um erro ao converter o URL para Blob:', error);
    })
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
                             caminhoVideo={blobPath} />
                    
    </Container>
  );
};
