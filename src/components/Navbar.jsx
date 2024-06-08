import React, { useState } from "react";
import { logo } from "../assets";
import { styles } from "../styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  const [activeItem, setActiveItem] = useState(active);

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
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
          {/* <p
            className={`pink2-text-gradient text-xs ${styles.sectionSubText} max-md:text-xs  `}
          >
            A website where you can Learn & Play the Korean alphabet
            <br className="sm:block hidden" />
          </p> */}
        </Link>

        <div>
          <div
            className={
              activeItem === "work"
                ? "w-full  flex gap-2 items-center rounded-2xl   font-light shadow-lg cursor-pointer pr-2 pl-2  text-sx"
                : activeItem === "home"
                ? "w-full  flex gap-2 items-center rounded-2xl   font-light shadow-lg cursor-pointe pr-2  text-sx"
                : "w-full  flex gap-2 items-center rounded-2xl   font-light shadow-lg cursor-pointer pl-2  text-sx"
            }
          >
            <Link to="/home">
              <span
                className={
                  activeItem === "home"
                    ? " bg-pink-300  text-sx rounded-2xl  pl-2 pr-2 border-solid border-pink-100 border-2 button-gradient-nav-hover flex h-max"
                    : "pl-2 pr-2"
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
                    ? " pr-2 pl-2 rounded-2xl  bg-pink-300 border-solid border-pink-100 border-2 button-gradient-nav-hover flex h-max"
                    : "pr-2 pl-2"
                }
                onClick={() => handleMenuItemClick("work")}
              >
                Work hard
              </span>
            </Link>
            <span
              className={
                activeItem === "play"
                  ? "  bg-pink-300  rounded-2xl pl-2 pr-2 button-gradient-nav-hover border-solid border-pink-100 border-2 flex h-max"
                  : "pr-2 pl-2"
              }
              onClick={() => handleMenuItemClick("play")}
            >
              Play hard
            </span>
            {/* <span className="max-md:t-2">
              <FontAwesomeIcon icon={faBars} />
            </span> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
