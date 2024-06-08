import React, { useState } from "react";
import { logo } from "../assets";
import { styles } from "../styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-1 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto animate-[slidedown_2s_cubic-bezier(.19,1,.22,1)_forwards]">
        <img
          src={logo}
          alt="logo"
          className="w-9 h-9 object-contain max-md:h-7"
        />
        <div>
          <div className="w-full bg-pink-300 flex gap-2 items-center pr-2 pl-2 rounded-2xl h-min font-light shadow-lg cursor-pointer">
            <span
              className={activeItem === "home" ? "underline" : ""}
              onClick={() => handleMenuItemClick("home")}
            >
              Home
            </span>
            <span
              className={activeItem === "work" ? "underline" : ""}
              onClick={() => handleMenuItemClick("work")}
            >
              Work hard
            </span>
            <span
              className={activeItem === "play" ? "underline" : ""}
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
