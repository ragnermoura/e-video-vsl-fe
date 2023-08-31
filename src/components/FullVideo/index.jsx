import { useEffect, useRef, useState } from "react";
import { Container, Play, Progress, Thumb, Video } from "./styles";
import { FaPlay, FaVolumeMute } from "react-icons/fa";
import Sound from "../../assets/img/sound.svg";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
export default ({ color, textInferior , textSuperior , caminhoVideo, caminhoThumb, colorBar, colorText }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const videoRef = useRef(null);
  
  const [scale, setScale] = useState(1.0);
  
  const updateScale = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Calcular a escala com base no tamanho da tela atual
    const newScale = Math.min(screenWidth / 500, screenHeight / 400);
    
    // Atualizar o estado com a nova escala
    setScale(newScale);
  };
  
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    // Chamar a função de atualização inicialmente
    const video = videoRef?.current;
    updateScale();
    
    if(!isVideoLoaded){
      setTimeout(() => {
        setIsVideoLoaded(true);
      }, 330);
    }
    // Adicionar um ouvinte de redimensionamento da tela para atualizar a escala quando a janela for redimensionada
    window.addEventListener('resize', updateScale);

    // Limpar o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const [played, setPlayed] = useState(true);
  const [isAuto, setIsAuto] = useState(true);
  const [atual, setAtual] = useState(0); 

  const handleUpdateProgress = () => {
    
    if(Number(atual) < (videoRef?.current.duration  *0.20)){
      let progress = (videoRef?.current?.currentTime / videoRef?.current?.duration) * 300;
      setCurrentProgress(progress?.toFixed(1));
      setAtual(progress)
    } else {
      const current_atual = Number(atual)
      let progress = current_atual - (current_atual/4) + (videoRef?.current?.currentTime / videoRef?.current?.duration) * 100

      setCurrentProgress(progress?.toFixed(1));
    }
  }; 

  
  const handlePlay = () => {
    if (isAuto) {
      handleRestartAndUnmuted();
    }
    console.log(caminhoThumb)

    if (videoRef?.current.paused) {
      videoRef.current.play();
      caminhoThumb ?  videoRef.current.hidden = false : videoRef.current.hidden = false
      setPlayed(true);
    } else {
      videoRef.current.pause();
      caminhoThumb ?  videoRef.current.hidden = true : videoRef.current.hidden = false
      setPlayed(false);
    }
  };

  const handleRestartAndUnmuted = () => {
    videoRef.current.muted = false;

    videoRef.current.currentTime = 0;
    setIsAuto(false);
    setPlayed(true);
    videoRef.current?.play();
  };

  return (
    <Container onContextMenu={(e) => e.preventDefault()}>
      {
        !played && caminhoThumb &&  (
           <Thumb src={caminhoThumb}  onClick={handlePlay} />
        )
      }
    {
      !isVideoLoaded ?
<div className="skeleto">

      {/* <Skeleton height={'100%'} /> */}
      <Thumb src={caminhoThumb}  onClick={handlePlay} />
</div>
          :
          <Video
          webkit-playsInline
          playsInline
          controlsList="nodownload"
        autoPlay
        muted
        onLoadedData={() => setIsVideoLoaded(true)}
        poster={caminhoThumb}
        src={`https://api.evideovsl.com.br/api/videos/streaming/${caminhoVideo}`}
        ref={videoRef}
        onTimeUpdate={handleUpdateProgress}
        onClick={handlePlay}
        />
      

      }
  
     
      {!isAuto && (
        <Progress cor={colorBar ?? "#f03939"} value={currentProgress} max={100} />
      )}

      {isAuto && (
        <Play
        tela={scale}
          cor={color ?? "#f03939"}
          autoPlay={isAuto}
          onClick={handleRestartAndUnmuted}
          
        >
          <span className="text_superior" style={{ color: colorText}}>
            {textSuperior !== "" ? textSuperior : "Seu video já começou"}
          </span>
          <img
            src={Sound}
            alt=""
            srcset=""
          />
          {/* <FaVolumeMute size={50}/> */}
          <span className="text_inferior" style={{ color: colorText }}>
          {textInferior !== "" ? textInferior : "Ativar o som"}
          </span>
        </Play>
      )}
      {!isAuto && !played && (
        <Play cor={color ?? "#f03939"} radios={true} autoPlay={isAuto} onClick={handlePlay}>
          <FaPlay className="play" />
        </Play>
      )}
    </Container>
  );
};
