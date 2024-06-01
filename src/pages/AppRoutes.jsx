import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";
import MainPage from "./MainPage";
import Home from "./Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home></Home>} />
      <Route path="/home" element={<Home></Home>} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
