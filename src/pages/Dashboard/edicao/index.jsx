import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Video from "../../../components/Video";
import { videoApi } from "../../../services/video";

export default () => {
  const [color, setColor] = useState("#f03939");
  const [colorBar, setColorBar] = useState("#4539f0");
  const [colorText, setColorText] = useState("#ffffff");
  const [blobPath, setBlobPath] = useState("");
  const [pathImage, setPathImage] = useState('')
  const [image, setImage] = useState(null)
  const [video, setVideo] = useState(null)
  const [textInferior, setTextInferior] = useState('')
  const [textSuperior, setTextSuperior] = useState('')

  const navigate = useNavigate();
  function urlToBlob(url) {
    return fetch(url)
    .then(response => response.blob());
  }
  

  const { id_video } = useParams();


  const handleGetVideos = async () => {
    const res = await videoApi.getVideobyId(id_video);
    console.log(res?.data?.response);
    setVideo(res?.data?.response);
    const videoRes = res?.data?.response
    setColor(videoRes?.cor)
    setPathImage(videoRes?.thumb)
    setColorBar(videoRes?.corBar)
    setColorText(videoRes?.corText)
    setTextInferior(videoRes?.textInferior)
    setTextSuperior(videoRes?.textSuperior)
    setVideo(videoRes)
  };

  
  useEffect(
    useCallback(() => {
      handleGetVideos();
    }),
    []
  );

  const handleUpload = async () => {

    const body = {
      id_video,
      cor: color,
      corBarra: colorBar,
      textInferior,
      textSuperior,
      corText: colorText
    }


    const response = await videoApi.updateVideo(id_video, body);
    console.log(body)
    console.log('data', response?.data)



    if (response?.data?.success) {
      if (image) {
        const { id_video } = response?.data?.video;
        const formData = new FormData();
        formData.append("thumb", image);

        const res = await videoApi.PostImageVideo(id_video, formData);

        if (res?.data?.success) {
          navigate("/meus-videos");
        }
      } else {
        navigate("/meus-videos");
      }
    }

  }

  return (
    <Container>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className="sm-mt layout-page ">
           

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row coluna">
               

                  <div className="col-md-6">
                    <div className="card mb-4">
                      <h5 className="card-header">Área de criação</h5>
                      <div className="card-body">
                       
                        <div className="mt-3">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Insira uma nova thumb
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                            onChange={e => {setImage(e.target.files[0])
                              setPathImage(URL.createObjectURL(e.target.files[0]))
                              }}
                          />
                          <div id="defaultFormControlHelp" className="form-text">
                          A imagem aparecerá quando o vídeo ficar pausado.
                          </div>
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Digite o texto de espera superior
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            value={textSuperior}
                            maxLength={20}
                            placeholder="Seu video já começou"
                            aria-describedby="defaultFormControlHelp"
                            onChange={e => setTextSuperior(e.target.value)}
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Digite o texto de espera inferior
                          </label>
                          <input
                            value={textInferior}
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            maxLength={20}
                            placeholder="Ative o Volume"
                            aria-describedby="defaultFormControlHelp"
                            onChange={e => setTextInferior(e.target.value)}
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Escolha a cor do texto
                          </label>
                          <input
                            type="color"
                            value={colorText}
                            onChange={(e) => setColorText(e?.target?.value)}
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Escolha a cor dos controles
                          </label>
                          <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e?.target?.value)}
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Escolha a cor da barra de progresso
                          </label>
                          <input
                            type="color"
                            value={colorBar}
                            onChange={(e) => setColorBar(e?.target?.value)}
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>

                        <button
                          style={{ width: "100%", marginTop: 30 }}
                          type="button"
                          className="btn btn-primary"
                          onClick={handleUpload}
                        >
                          Carregar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Video caminhoVideo={video?.video} colorText={colorText} colorBar={colorBar} caminhoThumb={pathImage} caminhoFrame={video?.frame} textInferior={textInferior} textSuperior={textSuperior} color={color} />
                    <button
                          style={{ width: "100%", marginTop: 30 }}
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {navigate(-1)}}
                        >
                          Voltar
                        </button>
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
