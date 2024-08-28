import React from "react";
import { Route, Routes, useLocation } from "react-router";
import NotFound from "./NotFound";
import Home from "./Home";

import Scene from "./SadStory";
import SadStory from "./SadStory/trailer";
import PlayHard from "./PlayHard";
import Trailer from "./WordGame/trailer";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home></Home>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/play" element={<PlayHard></PlayHard>} />
      <Route path="/sadstory" element={<SadStory></SadStory>} />

      <Route path="/trailer" element={<Scene></Scene>} />
      <Route path="/trailer2" element={<Trailer></Trailer>} />

      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
//
