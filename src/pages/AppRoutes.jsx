import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";
import MainPage from "./MainPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage></MainPage>} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
