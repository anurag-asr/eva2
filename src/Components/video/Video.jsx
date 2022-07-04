import { useState } from "react";
import Button from "../common/Button";

function VideoPlayer() {
  const videoref = useState(null);
  const [time, setTime] = useState(30);

  const handleStart = () => {
    videoref.current.play();
  };
  const handleStop = () => {
    videoref.current.pause();
  };
  const handleSkip = () => {
    setTime(time + 30);
    videoref.current.currentTime = [time];
  };

  return (
    <div>
      <video data-testid="video-container" ref={videoref} width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button handleclick={handleStart}>PLAY</Button>
        <Button handleclick={handleStop}>PAUSE</Button>
        <Button handleclick={handleSkip}>SKIP 30 SECONDS</Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
