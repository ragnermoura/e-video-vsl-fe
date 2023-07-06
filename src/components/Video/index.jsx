import { useRef, useState } from "react";
import { Container, Play, Progress, Video } from "./styles";
import { FaPlay, FaVolumeMute } from "react-icons/fa";
export default ({color}) => {
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
    setPlayed(false);
    video?.play();
  };

  return (
    <Container onContextMenu={e => e.preventDefault()}>
      <Video
        autoPlay
        muted
        src="http://localhost:3001/videos/1688496284905.mp4"
        ref={videoRef}
        onTimeUpdate={handleUpdateProgress}
        onClick={handlePlay}
      ></Video>
      <Progress cor={color} value={currentProgress} max={100} />
      {isAuto && <Play cor={color} autoPlay={isAuto} onClick={handleRestartAndUnmuted}>
        <FaVolumeMute size={32}/>
        <span>Ativar o som</span>
        </Play>}
      {!isAuto && !played && (
        <Play cor={color} autoPlay={isAuto} onClick={handlePlay}>
            <FaPlay />
        </Play>
      )}
    </Container>
  );
};
