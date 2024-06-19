/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { logoFall, logoSp, logoWinter, logoSum } from "../assets"; // combined import
import { styles } from "../styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navClick from "../assets/mp3/navClick.mp3";
import Sound from "./Sound";
import { useSound } from "../SoundCotext";
import { useTheme } from "../ThemeContext";

const Navbar = ({ active }) => {
  const { season } = useTheme();
  const [activeItem, setActiveItem] = useState(active);
  const navClickRef = useRef(new Audio(navClick));
  const { isSoundEnabled } = useSound();
  const [isOverflowing, setIsOverflowing] = useState(false); // added default state

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

  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [border, setBorder] = useState("pink");

  useEffect(() => {
    switch (season) {
      case "spring":
        setBorder("pink");
        break;
      case "summer":
        setBorder("green");
        break;
      case "fall":
        setBorder("orange");
        break;
      case "winter":
        setBorder("blue");
        break;
      default:
        setBorder("pink");
        break;
    }
  }, [season]);

  useEffect(() => {
    const textElement = textRef.current;
    const containerElement = containerRef.current;

    if (textElement && containerElement) {
      const isOverflow = textElement.scrollWidth > containerElement.clientWidth;
      setIsOverflowing(isOverflow);
    }
  }, [textRef, containerRef]);

  let logoImage;
  switch (season) {
    case "spring":
      logoImage = logoSp;
      break;
    case "summer":
      logoImage = logoSum;
      break;
    case "fall":
      logoImage = logoFall;
      break;
    case "winter":
      logoImage = logoWinter;
      break;
    default:
      logoImage = logoSum;
      break;
  }

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center fixed top-4 z-20`}
        style={{ borderColor: border }}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto animate-[slidedown_2s_cubic-bezier(.19,1,.22,1)_forwards]">
          <Link
            to="/home"
            className="flex justify-center self-center items-center"
          >
            <img
              src={logoImage}
              alt="logo"
              className="object-contain"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "50px",
                height: "50px",
              }}
            />
            <p
              className={`blueX-text hidden ${styles.sectionSubText} max-md:block`}
            >
              A website where you can Learn & Play the Korean alphabet
            </p>
          </Link>

          <div className="flex h-min gap-2 items-center">
            <div className="flex h-min items-center">
              <Sound />
            </div>
            <div
              className={`w-full flex gap-2 items-center rounded-2xl font-light shadow-lg cursor-pointer text-sx max-md:hidden`}
            >
              <Link to="/home">
                <span
                  className={`${
                    activeItem === "home"
                      ? ` bg-${border}-300 cursor-pointer text-sx rounded-2xl pl-2 pr-2 border-solid border-${border}-100 border-2 flex h-max`
                      : "pl-2 pr-2 cursor-pointer"
                  }`}
                  onClick={() => handleMenuItemClick("home")}
                >
                  Home
                </span>
              </Link>
              <Link to="/learn">
                <span
                  className={`${
                    activeItem === "work"
                      ? `pr-2 pl-2 rounded-2xl bg-${border}-100 cursor-pointer border-solid border-${border}-100 border-2  flex h-max`
                      : "pr-2 pl-2 cursor-pointer"
                  }`}
                  onClick={() => handleMenuItemClick("work")}
                >
                  Work hard
                </span>
              </Link>
              <Link to="/play">
                <span
                  className={`${
                    activeItem === "play"
                      ? `cursor-pointer rounded-2xl pl-2 pr-2 border-solid border-${border}-100 border-2 flex h-max`
                      : "pr-2 pl-2 cursor-pointer"
                  }`}
                  onClick={() => handleMenuItemClick("play")}
                >
                  Play hard
                </span>
              </Link>
            </div>
            <span className="hidden max-md:block">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
