import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button className=" text-red-700 cursor-pointer " onClick={toggleMusic}>
      {isPlaying ? (
        <FontAwesomeIcon icon={faVolumeHigh} />
      ) : (
        <FontAwesomeIcon icon={faVolumeXmark} />
      )}
    </button>
  );
};

export default Sound;
