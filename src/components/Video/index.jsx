import { useRef, useState } from "react";
import { Container, Play, Progress, Thumb, Video } from "./styles";
import { FaPlay, FaVolumeMute } from "react-icons/fa";
import Sound from "../../assets/img/sound.svg";
export default ({ color, textInferior, textSuperior, caminhoFrame,caminhoVideo, caminhoThumb, colorBar, colorText }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const videoRef = useRef(null);
  const video = videoRef.current;

  const [played, setPlayed] = useState(true);

  const [isAuto, setIsAuto] = useState(true);
  const [atual, setAtual] = useState(0); 

  const handleUpdateProgress = () => {
    if(Number(atual) < (video.duration  *0.15)){
      console.log(video.duration *0.10)
      let progress = (video?.currentTime / video?.duration) * 300;
      setCurrentProgress(progress?.toFixed(1));
      setAtual(progress)
    } else {
      console.log(atual)
      const current_atual = Number(atual)
      let progress = current_atual - (current_atual/4) + (video?.currentTime / video?.duration) * 100

      setCurrentProgress(progress?.toFixed(1));
    }
  }; 

  
  const handlePlay = () => {
    if (isAuto) {
      handleRestartAndUnmuted();
    }

    if (video.paused) {
      video.play();
      caminhoThumb !== ""?  video.hidden = false : video.hidden = false
      setPlayed(true);
    } else {
      video.pause();
      caminhoThumb !== ""?  video.hidden = true : video.hidden = false
      setPlayed(false);
    }
  };

  const handleRestartAndUnmuted = () => {
    video.muted = false;

    video.currentTime = 0;
    setIsAuto(false);
    setPlayed(true);
    video?.play();
  };

  return (
    <Container onContextMenu={(e) => e.preventDefault()}>
      {
 
  !played && caminhoThumb &&  (
           <Thumb src={caminhoThumb}  onClick={handlePlay} />
        )
      }
      
     
          <Video
        autoPlay
        muted
        poster={caminhoFrame}
        src={caminhoVideo}
        ref={videoRef}
        onTimeUpdate={handleUpdateProgress}
        onClick={handlePlay}
      />
      
     
      {!isAuto && (
        <Progress cor={colorBar ?? "#f03939"} value={currentProgress} max={100} />
      )}

      {isAuto && (
        <Play
          cor={color ?? "#f03939"}
          autoPlay={isAuto}
          onClick={handleRestartAndUnmuted}
        >
          <span style={{ fontSize: 18, fontWeight: 500, color: colorText }}>
          {textSuperior ? textSuperior : "Seu video já começou"}
          </span>
          <img
            src={Sound}
            style={{ borderRadius: 80, width: 60, marginTop: 10 }}
            alt=""
            srcset=""
          />
          {/* <FaVolumeMute size={50}/> */}
          <span style={{ fontSize: 20, fontWeight: 500, color: colorText }}>
            {textInferior ? textInferior : "Ativar o som"}
          </span>
        </Play>
      )}
      {!isAuto && !played && (
        <Play cor={color ?? "#f03939"} radios={true} autoPlay={isAuto} onClick={handlePlay}>
          <FaPlay />
        </Play>
      )}
    </Container>
  );
};
