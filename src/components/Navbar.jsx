import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { styles } from "../styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // if (scrollTop > 500) {
      //   setScrolled(true);
      // } else {
      //   setScrolled(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center fixed top-1 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto animate-[slidedown_2s_cubic-bezier(.19,1,.22,1)_forwards]">
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <div>
          <div
            className="w-full bg-pink-300 flex gap-2 items-center pr-2 pl-2 rounded-2xl h-min font-light shadow-lg cursor-pointer"
            onClick={handleMenuToggle}
          >
            Menu
            <FontAwesomeIcon icon={faBars} />
          </div>
          {openMenu && (
            <div className="bg-black absolute w-max p-2  items-center mt-2 text-white justify-center flex ">
              <ul>
                <li>Home</li>
                <li>Learn</li>
                <li>Game</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
