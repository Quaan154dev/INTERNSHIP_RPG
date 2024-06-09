import React, { useEffect, useState } from "react";
import TextBanner from "../../components/TextBanner";
import Navbar from "../../components/Navbar";
import { StarsCanvas } from "../../components/canvas";
import HomeBanner from "../../components/HomeBanner";
import Choice from "../../components/Choice";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
function Home() {
  return (
    <>
      <div className="pink-gradient relative z-0 h-screen ">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active="home" />
          <div className="relative flex justify-center">
            <div className="flex flex-row h-svh justify-around items-center text-center w-full relative max-md:flex-col ">
              <TextBanner />
              <HomeBanner />
            </div>
            <div className="absolute bottom-6 flex justify-center flex-col items-center gap-2  max-md:hidden">
              <Choice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
