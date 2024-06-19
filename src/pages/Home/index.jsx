import React from "react";
import TextBanner from "../../components/TextBanner";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
import HomeBanner from "../../components/HomeBanner";
import { useTheme } from "../../ThemeContext";
import { motion } from "framer-motion";

function Home() {
  const { season } = useTheme();

  return (
    <>
      <div className={`${season}-gradient relative z-0 h-screen `}>
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active="home" />
          <div className="relative flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center text-center w-full relative max-md:flex-col ">
              <TextBanner />
              <HomeBanner />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
