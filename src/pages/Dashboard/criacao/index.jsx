import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Video from "../../../components/Video";
import { videoApi } from "../../../services/video";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
export default () => {
  const [color, setColor] = useState("#f03939");
  const [colorBar, setColorBar] = useState("#4539f0");
  const [colorText, setColorText] = useState("#ffffff");
  const [pathVideo, setPathVideo] = useState("");
  const [pathImage, setPathImage] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [textInferior, setTextInferior] = useState("");
  const [textSuperior, setTextSuperior] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  /*  function urlToBlob(url) {
    return fetch(url)
      .then(response => response.blob());
  }

  useEffect( () => {
    urlToBlob('http://localhost:3000/videos/1688670593188.mp4')
    .then(blob => {
      // Use o objeto Blob aqui
      setBlobPath(URL.createObjectURL(blob))
      console.log(URL.createObjectURL(blob))
  
    })
    .catch(error => {
      console.error('Ocorreu um erro ao converter o URL para Blob:', error);
    })
  }, []) */

  const handleUpload = async () => {
    setIsLoading(true)
    

    if(!video){
      setIsLoading(false)
      return toast.error("Você precisa escolher um video!", {
        theme: "colored",
      });
    }
    if (!image) {
      setIsLoading(false)
      return toast.error("Você precisa escolher uma thumb!", {
        theme: "colored",
      });
    }

    const formData = new FormData();

    const getId =  sessionStorage.getItem("userId");
    console.log(getId);
    formData.append("video", video);
    formData.append("id", getId);
    formData.append("cor", color);
    formData.append("corBarra", colorBar);
    formData.append("textInferior", textInferior);
    formData.append("textSuperior", textSuperior);
    formData.append("corText", colorText);

    const response = await videoApi.PostVideo(formData, getId);

    console.log("data", response?.data);

    if (response?.data?.success) {
      if (image) {
        const { id_video } = response?.data?.video;
        const formData2 = new FormData();
        formData2.append("thumb", image);

        const res = await videoApi.PostImageVideo(id_video, formData2);

        if (res?.data?.success) {
          navigate("/meus-videos");
        }
      } else {
        navigate("/meus-videos");
      }
    }
  };

  return (
    <Container>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <MasterMenu />
          <div className="sm-mt layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row coluna">
                  <div className="col-md-6">
                    <div className="card mb-4">
                      <h5 className="card-header">Área de criação</h5>
                      <div className="card-body">
                        <div>
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Insira seu vídeo
                          </label>
                          <input
                            type="file"
                            accept="video/*"
                            className="form-control"
                            id="defaultFormControlInput"
                           
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                            onChange={(e) => {
                              const file = e.target.files[0]
                              
                             
                              setVideo(file);
                              console.log("video ", file);
                              setPathVideo(
                                URL.createObjectURL(file)
                              );
                            }}
                          />
                        
                        </div>

                        <div className="mt-3">
                          <label
                            for="defaultFormControlInput"
                            className="form-label"
                          >
                            Insira uma thumb
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                            onChange={(e) => {
                              setImage(e.target.files[0]);
                              setPathImage(
                                URL.createObjectURL(e.target.files[0])
                              );
                            }}
                          />
                          <div
                            id="defaultFormControlHelp"
                            className="form-text"
                          >
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
                            maxLength={20}
                            placeholder="Seu video já começou"
                            aria-describedby="defaultFormControlHelp"
                            onChange={(e) => setTextSuperior(e.target.value)}
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
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            maxLength={20}
                            placeholder="Ative o Volume"
                            aria-describedby="defaultFormControlHelp"
                            onChange={(e) => setTextInferior(e.target.value)}
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
                        {!isLoading && (
                          <button
                            style={{ width: "100%", marginTop: 30 }}
                            type="button"
                            className="btn btn-primary"
                            onClick={handleUpload}
                          >
                            Carregar
                          </button>
                        )}

                        {
                          isLoading && (
                         <div className="spinner">

                            <Oval
                            strokeWidth={4}
                            strokeWidthSecondary={4}
                            width={60}
                            color="#f13a3a"
                            secondaryColor="#942525"
                            height={60}
                            />

                            <h6>Pode ocorrer uma certa demora devido ao tamanho do vídeo.</h6>
                            </div>
                         
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Video
                      caminhoVideo={pathVideo}
                      colorText={colorText}
                      colorBar={colorBar}
                      caminhoThumb={pathImage}
                      textInferior={textInferior}
                      textSuperior={textSuperior}
                      color={color}
                    />
                  </div>
                </div>
              </div>

              <Footer />

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};
