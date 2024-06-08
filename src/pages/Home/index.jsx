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
          <Navbar />
          <div className="relative flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center   text-center  w-full relative  max-md:flex-col ">
              <TextBanner />
              <HomeBanner />
            </div>
            <div className="absolute  bottom-6 flex justify-center flex-col items-center gap-2">
              <p className="text-xs italic text-pink-200">
                Please choose Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <div className=" flex gap-10">
                <Link to="/learn">
                  <button className="flex flex-col text-center items-center gap-1 ">
                    <span
                      className=" pl-1 pr-1 border-2 shadow border-slate-900  border-solid button-gradient-hover"
                      onMouseEnter={() => setWorkHover(true)}
                      onMouseLeave={() => setWorkHover(false)}
                    >
                      Work hard
                    </span>
                    {workHover ? (
                      <span
                        className=" text-white absolute top-full mt-1 "
                        style={{ fontSize: "10px" }}
                      >
                        Learn Korean alphabetical
                      </span>
                    ) : (
                      <></>
                    )}
                  </button>
                </Link>
                <Link to="/play">
                  <button className="flex flex-col text-center items-center  gap-1">
                    <span
                      className=" pl-1 pr-1 border-2 shadow border-slate-900  border-solid button-gradient-hover"
                      onMouseEnter={() => setPlayHover(true)}
                      onMouseLeave={() => setPlayHover(false)}
                    >
                      Play hard
                    </span>
                    {playHover ? (
                      <span
                        className="text-white absolute top-full mt-1 "
                        style={{ fontSize: "10px" }}
                      >
                        Game to practice{" "}
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
