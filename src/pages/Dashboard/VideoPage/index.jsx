import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Video from "../../../components/Video";
import { videoApi } from "../../../services/video";

export default () => {
  const [color, setColor] = useState("#f03939");
  const [video, setVideo] = useState();
  const [blobPath, setBlobPath] = useState("");
  const { id_video } = useParams();

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

  useEffect(
    useCallback(() => {
      handleGetVideos();
    }),
    []
  );

  return (
    <Container>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <MasterMenu />
          <div class="layout-page">
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-md-12 mt-4">
                    <div class="card mb-4">
                      <h5 class="card-header">Área do Video</h5>
                      <div class="card-body">
                        <div className="row">
                          <div className="col-8">
                            <Video
                              color={video?.cor}
                              text={video?.text}
                              caminhoThumb={video?.thumb}
                              caminhoVideo={blobPath}
                            />
                          </div>
                          <div className="col-4">
                            <h5>Copie o link de incorporação</h5>
                            <code>
                              &lt;iframe
                              src="http://localhost:5173/full-video/{id_video}"
                              width={"100%"} height={"800px"}{" "}
                              frameborder="0"&gt;&lt;/iframe&gt;
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />

              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
