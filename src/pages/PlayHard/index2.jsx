import React from "react";
import Navbar from "../../components/Navbar2";
import Slider from "../../components/Game/Slider2";
import "./styles.css";
function PlayHard() {
  return (
    <>
      <Navbar active="play" />
      <div id="wrapper">
        <Slider />
      </div>
    </>
  );
}
//
export default PlayHard;
