import React from "react";
import TextBanner from "../../components/TextBanner";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
import HomeBanner from "../../components/HomeBanner";
import { useTheme } from "../../ThemeContext";
import Choice from "../../components/Choice";

function Home() {
  const { season } = useTheme();

  return (
    <>
      <div className={`${season}-gradient  z-0 h-screen relative `}>
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active="home" />

          <div className=" flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center text-center w-full  max-md:flex-col ">
              <TextBanner />

              <HomeBanner />
            </div>
          </div>
          <Choice feedbackCount={26} visited={43} />
        </div>
      </div>
    </>
  );
}

export default Home;
