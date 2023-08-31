import { Button, ButtonArea, Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Video from "../../../components/Video";
import { videoApi } from "../../../services/video";

export default () => {
  const [color, setColor] = useState("#f03939");
  const [video, setVideo] = useState();
  const [blobPath, setBlobPath] = useState("");
  const { id_video } = useParams();
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);
 
  const handleDeleteVideo = async () => {

    const res = await videoApi.deleteVideo(id_video)
    if (res?.data?.success) {

      navigate('/meus-videos')

     }
  }

  const handleMetricas = () => {
    navigate(`/metricas/${id_video}`)
  }

  const handleGetVideos = async () => {
    const res = await videoApi.getVideobyId(id_video);
    console.log(res?.data?.response);
    setVideo(res?.data?.response);

  };

  const handleEdit = () => {

    navigate(`/edicao/${id_video}`)

  }

  const handleShowCode = () => {
    setShowCode(true);
  };

  useEffect(
    useCallback(() => {
      handleGetVideos();
    }),
    []
  );

  return (
    <Container>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className=" sm-mt layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <div className="card mb-4">
                      <h5 className="card-header">Área do Video</h5>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-12 col-md-8">
                            <Video
                              color={video?.cor}
                              textInferior={video?.textInferior}
                              textSuperior={video?.textSuperior}
                              colorText={video?.corText}
                              colorBar={video?.corBar}
                              caminhoFrame={video?.frame}
                              caminhoThumb={video?.thumb}
                              caminhoVideo={video?.video}
                            />
                          </div>
                          <div className="col-12 col-md-4">
                            <ButtonArea>
                              <Button onClick={handleEdit}>Editar</Button>
                              <Button onClick={handleMetricas}>Métricas</Button>

                              <Button onClick={handleShowCode}>
                                Gerar código de incorporação
                              </Button>

                              <Button onClick={handleDeleteVideo}>Deletar Video</Button>
                            </ButtonArea>
                            {showCode && (
                              <div>
                            
    

                                <h5>Copie o link de incorporação</h5>
                                <code>
                                  &lt;div style="padding:56.25% 0 0 0;position:relative;"&gt;&lt;iframe
                                  src="https://stream.evideovsl.com.br/?video={id_video}" 
                                  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"&gt;&lt;/iframe&gt;
                                  &lt;/div&gt;
                                </code>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
