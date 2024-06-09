import React, { useRef, useState } from "react";
import { logo } from "../assets";
import { styles } from "../styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navClick from "../assets/mp3/navClick.mp3";
import Sound from "./Sound";
import { useSound } from "../SoundCotext";

const Navbar = ({ active }) => {
  const [activeItem, setActiveItem] = useState(active);
  const audioRef = useRef(null);
  const navClickRef = useRef(new Audio(navClick));
  const { isSoundEnabled } = useSound();
  const playHoverSound = (audioRef) => {
    if (audioRef.current && isSoundEnabled) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    playHoverSound(navClickRef);
  };

  return (
    <>
      <audio id="audio" ref={audioRef} autoPlay loop>
        Your browser does not support the audio element.
      </audio>
      <nav
        className={`${styles.paddingX} w-full flex items-center fixed top-4 z-20`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto animate-[slidedown_2s_cubic-bezier(.19,1,.22,1)_forwards]">
          <Link
            to="/home"
            className="flex justify-center self-center items-center"
          >
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain max-md:h-7"
            />
            <p
              className={`blueX-text hidden ${styles.sectionSubText} max-md:block`}
            >
              A website where you can Learn & Play the Korean alphabet
            </p>
          </Link>

          <div className="flex h-min gap-2 items-center ">
            <div className=" flex h-min items-center ">
              <Sound />
            </div>
            <div
              className={
                activeItem === "work"
                  ? "w-full  flex gap-2 items-center rounded-2xl   font-light shadow-lg cursor-pointer   text-sx max-md:hidden"
                  : activeItem === "home"
                  ? "w-full  flex gap-2 items-center rounded-2xl   font-light shadow-lg cursor-pointe text-sx max-md:hidden"
                  : "w-full  flex gap-2 items-center rounded-2xl   font-light shadow-lg cursor-pointer    text-sx max-md:hidden"
              }
            >
              <Link to="/home">
                <span
                  className={
                    activeItem === "home"
                      ? " bg-pink-300  cursor-pointer text-sx rounded-2xl  pl-2 pr-2 border-solid border-pink-100 border-2 button-gradient-nav-hover flex h-max"
                      : "pl-2 pr-2  cursor-pointer"
                  }
                  onClick={() => handleMenuItemClick("home")}
                >
                  Home
                </span>
              </Link>
              <Link to="/learn">
                <span
                  className={
                    activeItem === "work"
                      ? " pr-2 pl-2 rounded-2xl  cursor-pointer  bg-pink-300 border-solid border-pink-100 border-2 button-gradient-nav-hover flex h-max"
                      : "pr-2 pl-2  cursor-pointer"
                  }
                  onClick={() => handleMenuItemClick("work")}
                >
                  Work hard
                </span>
              </Link>
              <span
                className={
                  activeItem === "play"
                    ? "  bg-pink-300  cursor-pointer  rounded-2xl pl-2 pr-2 button-gradient-nav-hover border-solid border-pink-100 border-2 flex h-max "
                    : "pr-2 pl-2  cursor-pointer"
                }
                onClick={() => handleMenuItemClick("play")}
              >
                Play hard
              </span>
            </div>
            <span className="hidden max-md:block ">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
