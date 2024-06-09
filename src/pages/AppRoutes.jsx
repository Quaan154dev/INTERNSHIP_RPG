import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";
import Home from "./Home";
import LearnHome from "./LearnHome";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home></Home>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="/learn" element={<LearnHome></LearnHome>} />

      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
