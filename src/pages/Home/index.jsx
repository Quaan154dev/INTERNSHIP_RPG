import React from "react";
import HomeStudy from "../../components/HomeStudy";
import TextBanner from "../../components/TextBanner";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
import HomeGame from "../../components/HomeGame";
import HomeBanner from "../../components/HomeBanner";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="pink-gradient relative z-0 h-screen ">
        <StarsCanvas />

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="flex flex-row h-svh justify-around items-center   text-center  pt-20 w-full  ">
            <TextBanner />
            <HomeBanner />
            <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
              <a href="#about">
                <div className="w-[32px] h-[64px] rounded-3xl border-4 border-pink-200 flex justify-center items-start p-2">
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-3 h-3 rounded-full bg-pink-200 mb-1"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-row h-svh justify-around items-center   text-center  pt-20 w-full blue-gradient  ">
            <HomeStudy />
            <HomeGame />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
