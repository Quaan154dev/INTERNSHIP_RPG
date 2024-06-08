import React, { useState } from "react";
import TextBanner from "../../components/TextBanner";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
import HomeBanner from "../../components/HomeBanner";
import { Link } from "react-router-dom";

function Home() {
  const [workHover, setWorkHover] = useState(false);
  const [playHover, setPlayHover] = useState(false);

  return (
    <>
      <div className="pink-gradient relative z-0 h-screen ">
        <StarsCanvas />

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active="home" />
          <div className="relative flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center   text-center  w-full relative  max-md:flex-col ">
              <TextBanner />
              <HomeBanner />
            </div>
            <div className="absolute  bottom-6 flex justify-center flex-col items-center gap-2">
              <p className="text-xs italic text-white">
                Choose the method you want to choose to learn
              </p>
              <div className=" flex gap-4">
                <Link to="/learn">
                  <button className="flex flex-col text-center items-center gap-1 ">
                    <span
                      className={
                        workHover
                          ? " pl-1 pr-1 border-2 text-blue-200 border-blue-200 font-light shadow-lg cursor-pointer   button-gradient-left-hover border-solid "
                          : " pl-1 pr-1 border-2   border-solid  border-white cursor-pointer   text-white   font-light shadow-lg  "
                      }
                      onMouseEnter={() => setWorkHover(true)}
                      onMouseLeave={() => setWorkHover(false)}
                    >
                      Work hard
                    </span>
                    {workHover ? (
                      <span
                        className=" absolute top-full mt-1 text-blue-200   "
                        style={{ fontSize: "12px" }}
                      >
                        Study with Card
                      </span>
                    ) : (
                      <></>
                    )}
                  </button>
                </Link>
                <Link to="/play">
                  <button className="flex flex-col text-center items-center  gap-1">
                    <button
                      className={
                        playHover
                          ? " pl-1 pr-1 border-2 shadow text-red-100  button-gradient-right-hover  border-solid "
                          : " pl-1 pr-1 border-2 shadow border-white   text-white   border-solid "
                      }
                      onMouseEnter={() => setPlayHover(true)}
                      onMouseLeave={() => setPlayHover(false)}
                    >
                      Play hard
                    </button>
                    {playHover ? (
                      <span
                        className="work-text opacity-100 text-red-100 absolute top-full mt-1 "
                        style={{ fontSize: "12px" }}
                      >
                        Game to practice
                      </span>
                    ) : (
                      <></>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
