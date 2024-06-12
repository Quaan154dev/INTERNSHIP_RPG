import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import workHoverSound from "../assets/mp3/workSound.mp3";
import gameClick from "../assets/mp3/gameClick.mp3";
import { useSound } from "../SoundCotext";
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
const Choice = () => {
  const { isSoundEnabled } = useSound();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [workHover, setWorkHover] = useState(false);
  const [playHover, setPlayHover] = useState(false);
  const clickAudioRef = useRef(new Audio(workHoverSound));
  const gameClickRef = useRef(new Audio(gameClick));
  useEffect(() => {
    if (workHover) {
      playHoverSound(clickAudioRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workHover]);
  const playHoverSound = (audioRef) => {
    if (audioRef.current && isSoundEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        console.error("Sound play failed: ", e);
      });
    }
  };
  useEffect(() => {
    if (playHover) {
      playHoverSound(gameClickRef);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playHover]);

  return (
    <>
      {!isSmallScreen ? (
        <p
          className={
            workHover
              ? "text-xs italic blueX-text "
              : playHover
              ? "text-xs italic redX-text"
              : "text-xs italic text-white "
          }
        >
          Choose the method you want to choose to learn
        </p>
      ) : (
        <p className={"text-xs italic "}>
          <span className="blueX-text"> Choose the method you </span>
          <span className="redX-text">want to choose to learn</span>
        </p>
      )}
      <div className=" flex gap-4">
        <Link to="/learn">
          <button
            className="flex flex-col text-center items-center gap-1 "
            onMouseEnter={() => setWorkHover(true)}
            onMouseLeave={() => setWorkHover(false)}
          >
            {isSmallScreen ? (
              <>
                <span
                  className={
                    "pl-1 pr-1 border-2 text-blue-600 border-blue-100 font-light shadow-lg cursor-pointer button-gradient-left-hover border-solid"
                  }
                >
                  Work hard
                </span>
                <span
                  className="absolute top-full mt-1 text-blue-800"
                  style={{ fontSize: "12px" }}
                >
                  Study with Card
                </span>
              </>
            ) : (
              <>
                <span
                  className={
                    workHover
                      ? "pl-1 pr-1 border-2 text-blue-200 border-blue-100 font-light shadow-lg cursor-pointer button-gradient-left-hover border-solid"
                      : "pl-1 pr-1 border-2 border-solid border-blue-200 cursor-pointer text-blue-200 font-light shadow-lg"
                  }
                >
                  Work hard
                </span>
                {workHover && (
                  <span
                    className="absolute top-full mt-1 text-blue-100"
                    style={{ fontSize: "12px" }}
                  >
                    Study with Card
                  </span>
                )}
              </>
            )}
          </button>
        </Link>
        <Link to="/play">
          <button
            className="flex flex-col text-center items-center gap-1"
            onMouseEnter={() => setPlayHover(true)}
            onMouseLeave={() => setPlayHover(false)}
          >
            {isSmallScreen ? (
              <>
                <span
                  className={
                    "pl-1 pr-1 border-2 shadow text-red-600 button-gradient-right-hover border-solid"
                  }
                >
                  Play hard
                </span>
                <span
                  className="work-text opacity-100 text-red-800 absolute top-full mt-1"
                  style={{ fontSize: "12px" }}
                >
                  Game to practice
                </span>
              </>
            ) : (
              <>
                <span
                  className={
                    playHover
                      ? "pl-1 pr-1 border-2 shadow text-red-100 button-gradient-right-hover border-solid"
                      : "pl-1 pr-1 border-2 shadow border-red-100 text-red-100 border-solid"
                  }
                >
                  Play hard
                </span>
                {playHover && (
                  <span
                    className="work-text opacity-100 text-red-100 absolute top-full mt-1"
                    style={{ fontSize: "12px" }}
                  >
                    Game to practice
                  </span>
                )}
              </>
            )}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Choice;
