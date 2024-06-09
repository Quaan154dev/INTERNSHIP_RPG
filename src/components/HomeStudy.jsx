import React, { useRef, useState } from "react";
import { alphabet } from "../assets";
import { pinkBg } from "../assets";
import paperMp3 from "../assets/mp3/paper.mp3";
import { StarsCanvas } from "./canvas";
import { useSound } from "../SoundCotext";

const HomeStudy = () => {
  const [openTag, setOpenTag] = useState("1");
  const audioRef = useRef(null);
  const { isSoundEnabled } = useSound();
  const playHoverSound = () => {
    if (audioRef.current && isSoundEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Sound play failed: ", error);
      });
    }
  };
  return (
    <>
      <StarsCanvas />

      <audio id="audio" ref={audioRef} src={paperMp3} preload="auto">
        Your browser does not support the audio element.
      </audio>
      <div id={openTag === "1" ? "awan" : "awanPink"}>
        <div className="flex flex-col h-svh text-center blue-gradient">
          <div
            className="
            bg-cover bg-no-repeat z-1 flex justify-around items-center text-center h-full
          "
          >
            <div className="absolute left-0 ">
              {openTag === "1" ? (
                <div
                  className="border-1 shadow-sm p-2  rounded-r-full text-blue-800 cursor-pointer button-gradient-left-hover"
                  onClick={() => {
                    setOpenTag("1");
                  }}
                >
                  Card Alphabet
                </div>
              ) : (
                <div
                  className="text-red-950  p-2 cursor-pointer rounded-r-full  "
                  onClick={() => {
                    setOpenTag("1");
                    playHoverSound();
                  }}
                >
                  Card Alphabet
                </div>
              )}
              {openTag === "2" ? (
                <div
                  className="p-2   cursor-pointer border-1 shadow-sm mt-2 text-red-800  rounded-r-full button-gradient-right-hover"
                  onClick={() => {
                    setOpenTag("2");
                    playHoverSound();
                  }}
                >
                  Star filled
                </div>
              ) : (
                <div
                  className=" p-2 text-blue-950 cursor-pointer mt-2  rounded-r-full"
                  onClick={() => {
                    setOpenTag("2");
                    playHoverSound();
                  }}
                >
                  Star filled
                </div>
              )}
            </div>

            {openTag === "1" ? (
              <div className="h-full flex items-center justify-center">
                <div className="border-2  shadow-md overflow-hidden rounded-xl max-w-xs">
                  <div className="w-full overflow-hidden flex items-center justify-center h-full">
                    <img
                      src={alphabet}
                      alt="Alphabet"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="uppercase tracking-wide text-sm text-blue-950 font-semibold  ">
                      Card Alphabet
                    </div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black  cursor-pointer hover:underline">
                      Learn the Alphabet
                    </h1>
                    <p className="mt-2 text-slate-500 text-wrap  text-justify ">
                      Explore our alphabet cards to get familiar with the
                      letters, how to write them, and how to memorize them.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="border-2 shadow-md overflow-hidden rounded-xl max-w-xs">
                  <div className="w-full h-full overflow-hidden flex items-center justify-center">
                    <img
                      src={pinkBg}
                      alt="Star filled"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="uppercase tracking-wide text-sm text-red-800 font-semibold   ">
                      Star filled
                    </div>
                    <h1 className="block mt-1 text-lg leading-tight font-medium text-black cursor-pointer hover:underline">
                      Review starred terms
                    </h1>
                    <p className="mt-2 text-slate-500 text-wrap text-justify ">
                      Take a moment to review the terms you have starred for
                      better retention.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStudy;
