import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import hoverSound from "../assets/mp3/hoverSound.mp3";

const TextBanner = () => {
  const hoverUrl = useRef(new Audio(hoverSound));
  const [hoverButton, setHoverButton] = useState(false);
  const playHoverSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  useEffect(() => {
    if (hoverButton) {
      playHoverSound(hoverUrl);
    }
  }, [hoverButton]);

  return (
    <>
      <div className=" fog-effect bg-cover bg-no-repeat z-1 w-2/4 max-md:w-full max-md:pt-10 ">
        <div className="flex flex-col gap-8 items-center justify-center  ">
          <h1 className={`  flex flex-col gap-5 `}>
            <span
              className={` text-red-600 flex flex-col justify-start text-xs items-start`}
            >
              {" "}
              EASY AND INTERESTING
            </span>
            <div className="pink-text-gradient flex items-center gap-5 ">
              <span
                className={`text-slate-700 flex flex-col justify-start text-xs items-start `}
              >
                <span>TO</span>
                <span>LEARN</span>
                <span>THE</span>
              </span>
              <span
                className={` h-full text-6xl    `}
                style={{
                  textStroke: "1px #0d107d",
                  WebkitTextStroke: "1px #0d107d",
                }}
              >
                KOREAN
              </span>
            </div>
            <span
              className={`text-blue-900 flex flex-col justify-start text-sm items-end`}
            >
              ALPHABET
            </span>
          </h1>
          <div className="flex flex-col gap-2 items-center">
            <button
              className=" button-gradient-hover w-fit pl-1 pr-1 border-2 border-pink-50 rounded-md cursor-pointer transition ease-in-out delay-150 text-white  text-base max-md:text-sm   "
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
            >
              WORK HARD PLAY HARD
            </button>
            <p className={` cloud-text  blueX-text ${styles.sectionSubText} `}>
              A website where you can Learn & Play the Korean alphabet
              <br className="sm:block hidden" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBanner;
