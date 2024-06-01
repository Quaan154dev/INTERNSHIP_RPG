import React from "react";
import { styles } from "../styles";
import BookCanvas from "./canvas/Book";

const TextBanner = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat z-1 w-2/4 ">
        <div>
          <h1 className={`${styles.heroHeadText} pink-text-gradient `}>
            KOREA{" "}
          </h1>
          <span className="bg-pink-300 italic pl-1 pr-1 shadow rounded-md cursor-pointer">
            WORK HARD PLAY HARD
          </span>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            A website where you can{" "}
            <span className="bg-pink-300 pl-1 pr-1 shadow rounded-md">
              learn & play
            </span>{" "}
            the Korean alphabet
            <br className="sm:block hidden" />
          </p>
          {/* <BookCanvas /> */}
        </div>
      </div>
    </>
  );
};

export default TextBanner;
