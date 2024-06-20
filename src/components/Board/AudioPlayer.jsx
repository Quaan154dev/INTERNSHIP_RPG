import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return <audio ref={audioRef} src={src} loop />;
};

export default AudioPlayer;
