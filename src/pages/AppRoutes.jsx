import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";
import Home from "./Home";
import LearnHome from "./LearnHome";
import Scene from "./SadStory"
import SadStory from "./SadStory/trailer"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home></Home>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/learn" element={<LearnHome></LearnHome>} />
      <Route path="/trailer" element={<Scene></Scene>} />
      <Route path="/trailer/sadstory" element={<SadStory></SadStory>} />

      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
