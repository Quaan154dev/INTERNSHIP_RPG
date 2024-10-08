import React from "react";
import TextBanner from "../../components/TextBanner2";
import Navbar from "../../components/Navbar2";
import { StarsCanvas } from "../../components/canvas";
import HomeBanner from "../../components/HomeBanner2";
import { useTheme } from "../../ThemeContext";
import Statistics from "../../components/Statistics";

function Home() {
  const { season } = useTheme();

  return (
    <>
      <div
        className={`${season}-gradient  z-0 h-screen relative overflow-hidden  `}
      >
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center max-md:mb-2">
          <Navbar active="home" />

          <div className=" flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center text-center w-full  max-md:flex-col max-md:justify-start ">
              <TextBanner />

              <HomeBanner />
            </div>
          </div>
          <div className=" font-mono i fixed bottom-0 left-1/2 transform -translate-x-1/2 flex  justify-center items-center max-md:hidden">
            <Statistics feedbackCount={26} visited={43} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
