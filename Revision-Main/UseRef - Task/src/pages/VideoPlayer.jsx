import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };
  

  return (
    <div>
      <video
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        // src="https://www.w3schools.com/html/mov_bbb.mp4"
        width="400"
        controls
      ></video>
      <br />
      <button onClick={playVideo} className="bg-lime-600 p-2 px-4 m-4 rounded-full">Play</button>
      <button onClick={pauseVideo} className="bg-lime-600 p-2 m-4 rounded-full">Pause</button>
    </div>
  );
}

export default VideoPlayer;
