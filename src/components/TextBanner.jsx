import React from "react";
import { styles } from "../styles";

const TextBanner = () => {
  return (
    <>
      <div className=" fog-effect bg-cover bg-no-repeat z-1 w-2/4 max-md:w-full max-md:pt-10 ">
        <div className="flex flex-col gap-2 items-center ">
          <h1 className={`${styles.heroHeadText} pink-text-gradient  `}>
            KOREA{" "}
          </h1>
          <button className="bg-pink-300 w-fit  italic pl-1 pr-1 shadow rounded-md cursor-pointer transition ease-in-out delay-150  button-gradient-hover  text-base max-md:text-sm  ">
            WORK HARD PLAY HARD
          </button>
          <p
            className={`${styles.heroSubText} text-black mt-2 text-sm max-md:text-xs`}
          >
            A website where you can{" "}
            <span className="bg-pink-300 pl-1 pr-1 shadow rounded-md">
              learn & play
            </span>{" "}
            the Korean alphabet
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
    </>
  );
};

export default TextBanner;
