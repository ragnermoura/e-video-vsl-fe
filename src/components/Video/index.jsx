import { useRef, useState } from "react";
import { Container, Play, Progress, Video } from "./styles";
import { FaPlay, FaVolumeMute } from "react-icons/fa";
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
        <FaVolumeMute size={50}/>
        <span style={{fontSize: 32, fontWeight: 700}}>{ text !== '' ? text : 'Ativar o som'}</span>
        </Play>}
      {!isAuto && !played && (
        <Play cor={color ?? '#f03939'} autoPlay={isAuto} onClick={handlePlay}>
            <FaPlay />
        </Play>
      )}
    </Container>
  );
};
