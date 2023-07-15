import { Container } from "./styles";
import MasterMenu from "../../../components/masterMenu";
import NavBar from "../../../components/navBar";
import Footer from "../../../components/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Video from "../../../components/Video";
import { videoApi } from "../../../services/video";

export default () => {
  const [color, setColor] = useState("#f03939");
  const [colorBar, setColorBar] = useState("#4539f0");
  const [colorText, setColorText] = useState("#ffffff");
  const [pathVideo, setPathVideo] = useState('')
  const [pathImage, setPathImage] = useState('')
  const [image, setImage] = useState(null)
  const [video, setVideo] = useState(null)
  const [text, setText] = useState('')

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

    const formData = new FormData();

    const getId = await JSON.parse(localStorage.getItem('userId'))
    console.log(getId)
    formData.append('video', video)
    formData.append('id', getId)
    formData.append('cor', color)
    formData.append('corBarra', colorBar)
    formData.append('text', text)
    formData.append('corText', colorText)

    const response = await videoApi.PostVideo(formData);

    console.log('data', response?.data)

    if(response?.data?.success){
    const { id_video } = response?.data?.video
      const formData2 = new FormData();
      formData2.append('thumb', image)

      await videoApi.PostImageVideo(id_video, formData2)
    }


  }

  return (
    <Container>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <MasterMenu />
          <div class="layout-page">
           

            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
               

                  <div class="col-md-6">
                    <div class="card mb-4">
                      <h5 class="card-header">Área de criação</h5>
                      <div class="card-body">
                        <div>
                          <label
                            for="defaultFormControlInput"
                            class="form-label"
                          >
                            Insira seu vídeo
                          </label>
                          <input
                            type="file"
                            accept="video/*"
                            class="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                            onChange={e => {setVideo(e.target.files[0])
                            console.log('video ', e.target.files[0])
                            setPathVideo(URL.createObjectURL(e.target.files[0]))
                            }}
                          />
                          <div id="defaultFormControlHelp" class="form-text">
                            O Video não pode ser mais que 800mb.
                          </div>
                        </div>

                        <div className="mt-3">
                          <label
                            for="defaultFormControlInput"
                            class="form-label"
                          >
                            Insira uma thumb
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            class="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                            onChange={e => {setImage(e.target.files[0])
                              setPathImage(URL.createObjectURL(e.target.files[0]))
                              }}
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            class="form-label"
                          >
                            Digite um texto espera
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="defaultFormControlInput"
                            maxLength={20}
                            placeholder="Ative o Volume"
                            aria-describedby="defaultFormControlHelp"
                            onChange={e => setText(e.target.value)}
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            class="form-label"
                          >
                            Escolha a cor do texto
                          </label>
                          <input
                            type="color"
                            value={colorText}
                            onChange={(e) => setColorText(e?.target?.value)}
                            class="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            class="form-label"
                          >
                            Escolha a cor dos controles
                          </label>
                          <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e?.target?.value)}
                            class="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            for="defaultFormControlInput"
                            class="form-label"
                          >
                            Escolha a cor da barra de progresso
                          </label>
                          <input
                            type="color"
                            value={colorBar}
                            onChange={(e) => setColorBar(e?.target?.value)}
                            class="form-control"
                            id="defaultFormControlInput"
                            placeholder="John Doe"
                            aria-describedby="defaultFormControlHelp"
                          />
                        </div>

                        <button
                          style={{ width: "100%", marginTop: 30 }}
                          type="button"
                          class="btn btn-primary"
                          onClick={handleUpload}
                        >
                          Carregar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <Video caminhoVideo={pathVideo} colorText={colorText} colorBar={colorBar} caminhoThumb={pathImage} text={text} color={color} />
            
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
