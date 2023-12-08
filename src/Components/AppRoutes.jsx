import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AdvancedPhysicsDetails,
  IntroCpp,
  IntroReact,
  JavaScriptLang,
  QuantumComp,
} from "./CourseDetails";
import MainPage from "./MainPage";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/advancedphysics" element={<AdvancedPhysicsDetails />} />
      <Route path="/introcpp" element={<IntroCpp />} />
      <Route path="/introreact" element={<IntroReact />} />
      <Route path="/js" element={<JavaScriptLang />} />
      <Route path="/quantumcomp" element={<QuantumComp />} />
    </Routes>
  );
};

export default AppRoutes;