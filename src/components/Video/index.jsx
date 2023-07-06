import { useRef, useState } from "react";
import { Container, Play, Progress, Video } from "./styles";
import { FaPlay, FaVolumeMute } from "react-icons/fa";
import Sound from '../../assets/img/noSound.gif'
export default ({color, text, caminhoVideo, caminhoThumb}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const videoRef = useRef(null);
  const video = videoRef.current;

  const [played, setPlayed] = useState(true);

  const [isAuto, setIsAuto] = useState(true);

  const handleUpdateProgress = () => {
    const progress = (video?.currentTime / video?.duration) * 100;
    setCurrentProgress(progress?.toFixed(1));
  };

  const handlePlay = () => {
    console.log(played);
    if(isAuto){
        handleRestartAndUnmuted()
    }

    if (video.paused) {
      video.play();
      setPlayed(true);
    } else {
        video.pause();
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
    <Container onContextMenu={e => e.preventDefault()}>
      <Video
        autoPlay
        muted
        poster={caminhoThumb}
        src={caminhoVideo}
        ref={videoRef}
        onTimeUpdate={handleUpdateProgress}
        onClick={handlePlay}
      ></Video>
      <Progress cor={color ?? '#f03939'} value={currentProgress} max={100} />
      {isAuto && <Play cor={color ?? '#f03939'} autoPlay={isAuto} onClick={handleRestartAndUnmuted}>
      <span style={{fontSize: 18, fontWeight: 500}}>Seu video já começou</span>
        <img src={Sound} style={{borderRadius: 80, width: 60, marginTop: 10}} alt="" srcset="" />
        {/* <FaVolumeMute size={50}/> */}
        <span style={{fontSize: 20, fontWeight: 500}}>{ text !== '' ? text : 'Ativar o som'}</span>
        </Play>}
      {!isAuto && !played && (
        <Play cor={color ?? '#f03939'} autoPlay={isAuto} onClick={handlePlay}>
            <FaPlay />
        </Play>
      )}
    </Container>
  );
};
