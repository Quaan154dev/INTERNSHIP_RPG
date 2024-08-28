import React, { useEffect, useRef, useState } from "react";
import hoverSound from "../assets/mp3/hoverSound.mp3";
import { useTheme } from "../ThemeContext";
import { useSound } from "../SoundCotext";
import workHoverSound from "../assets/mp3/workSound.mp3";
import gameClick from "../assets/mp3/gameClick.mp3";
import { Link } from "react-router-dom";
import Statistics from "./Statistics";
import Choice from "./Choice2";

const TextBanner = () => {
  const { isSoundEnabled } = useSound();
  const { season } = useTheme();

  const hoverUrl = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(workHoverSound));
  const gameClickRef = useRef(new Audio(gameClick));

  const [hoverButton, setHoverButton] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [playHover, setPlayHover] = useState(false);
  const playHoverSound = (audioRef) => {
    if (audioRef.current && isSoundEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        console.error("Sound play failed: ", e);
      });
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

  useEffect(() => {
    if (hoverButton) {
      playHoverSound(hoverUrl);
    }
  }, [hoverButton]);
  useEffect(() => {
    const element = document.querySelector(`.${season}-top-text`);
    element.classList.remove("-translate-x-full");
    element.classList.add("translate-x-0");
  }, []);

  return (
    <div className="fog-effect bg-cover bg-no-repeat z-1 w-2/4 max-md:w-full max-md:pt-16">
      <div className="flex flex-col gap-8 items-center justify-center w-full max-md:gap-3">
        <h1 className={`flex flex-col gap-5 max-md:gap-2`}>
          <h4
            className={`relative overflow-hidden whitespace-nowrap text-[16px] leading-[1.5] ${season}-top-text flex flex-col justify-start items-start max-md:hidden animate-scroll-letters`}
          >
            Dear React Plus, I’m excited to apply for an internship and look
            forward to contributing to your team.
          </h4>

          <div
            className={`${season}-text-gradient flex items-center justify-center gap-5`}
          >
            <span
              className={`${season}-text-gradient flex flex-col justify-start text-xs items-start max-md:hidden`}
            >
              <span>TO</span>
              <span>LEARN</span>
              <span>THE</span>
            </span>
            <span
              className="h-full text-6xl"
              style={{
                textStroke: "1px #15301c",
                WebkitTextStroke: "1px #15301c",
              }}
            >
              KOREAN
            </span>
          </div>

          <span
            className={`${season}-bottom-text flex flex-col justify-start text-sm items-end`}
          >
            ALPHABET
          </span>
        </h1>
        <div className="md:hidden max-md:flex font-mono "></div>
        <div className="flex flex-col  justify-center gap-5   max-md:hidden">
          <Choice />
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
