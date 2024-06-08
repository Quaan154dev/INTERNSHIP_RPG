import React, { useEffect, useRef, useState } from "react";
import TextBanner from "../../components/TextBanner";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
import HomeBanner from "../../components/HomeBanner";
import { Link } from "react-router-dom";
import workHoverSound from "../../assets/mp3/workSound.mp3";
import gameClick from "../../assets/mp3/gameClick.mp3";

function Home() {
  const [workHover, setWorkHover] = useState(false);
  const [playHover, setPlayHover] = useState(false);
  const clickAudioRef = useRef(new Audio(workHoverSound));
  const gameClickRef = useRef(new Audio(gameClick));

  const playHoverSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (workHover) {
      playHoverSound(clickAudioRef);
    }
  }, [workHover]);

  useEffect(() => {
    if (playHover) {
      playHoverSound(gameClickRef);
    }
  }, [playHover]);

  return (
    <>
      <div className="pink-gradient relative z-0 h-screen ">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active="home" playHoverSound={playHoverSound} />
          <div className="relative flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center text-center w-full relative max-md:flex-col">
              <TextBanner />
              <HomeBanner />
            </div>
            <div className="absolute bottom-6 flex justify-center flex-col items-center gap-2">
              <p
                className={
                  workHover
                    ? "text-xs italic blueX-text "
                    : playHover
                    ? "text-xs italic redX-text"
                    : "text-xs italic text-white"
                }
              >
                Choose the method you want to choose to learn
              </p>
              <div className=" flex gap-4">
                <Link to="/learn">
                  <button
                    className="flex flex-col text-center items-center gap-1 "
                    onMouseEnter={() => setWorkHover(true)}
                    onMouseLeave={() => setWorkHover(false)}
                  >
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
                  </button>
                </Link>
                <Link to="/play">
                  <button
                    className="flex flex-col text-center items-center gap-1"
                    onMouseEnter={() => setPlayHover(true)}
                    onMouseLeave={() => setPlayHover(false)}
                  >
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
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
