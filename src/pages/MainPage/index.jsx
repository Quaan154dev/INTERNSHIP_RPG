import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "../NotFound";
import Home from "../Home";

function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  );
}

export default MainPage;
