import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Home/index2";

import Scene from "./SadStory/index2";
import SadStory from "./SadStory/trailer2";
import PlayHard from "./PlayHard";
import Trailer from "./WordGame/trailer";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/*" element={<Home></Home>} />
      <Route path="/play" element={<PlayHard></PlayHard>} />
      <Route path="/sadstory" element={<SadStory></SadStory>} />
      <Route path="/trailer" element={<Scene></Scene>} />
      <Route path="/trailer2" element={<Trailer></Trailer>} />
    </Routes>
  );
}

export default AppRoutes;
//
