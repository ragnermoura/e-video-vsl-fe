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
  function urlToBlob(url) {
    return fetch(url).then((response) => response.blob());
  }

  const handleGetVideos = async () => {
    const res = await videoApi.getVideobyId(id_video);
    console.log(res?.data?.response);
    setVideo(res?.data?.response);

    urlToBlob(res?.data?.response?.video)
      .then((blob) => {
        // Use o objeto Blob aqui
        setBlobPath(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao converter o URL para Blob:", error);
      });
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
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <div className="card mb-4">
                      <h5 className="card-header">Área do Video</h5>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-8">
                            <Video
                              color={video?.cor}
                              textInferior={video?.textInferior}
                              textSuperior={video?.textSuperior}
                              colorText={video?.corText}
                              colorBar={video?.corBar}
                              caminhoThumb={video?.thumb}
                              caminhoVideo={blobPath}
                            />
                          </div>
                          <div className="col-4">
                            <ButtonArea>
                              <Button onClick={handleEdit}>Editar</Button>
                              <Button>Deletar Video</Button>

                              <Button onClick={handleShowCode}>
                                Gerar código de incorporação
                              </Button>
                            </ButtonArea>
                            {showCode && (
                              <div>
                                <h5>Copie o link de incorporação</h5>
                                <code>
                                  &lt;iframe
                                  src="https://app.evideovsl.com.br/full-video/
                                  {id_video}" width={"100%"} height={"800px"}{" "}
                                  frameborder="0"&gt;&lt;/iframe&gt;
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
