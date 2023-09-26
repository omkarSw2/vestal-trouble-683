import React from "react";
import { Route, Routes } from "react-router-dom";

import SignupPage from "../pages/Signup.Page";
import LoginPage from "../pages/LoginPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<SignupPage />} />
    </Routes>
  );
};

export default MainRoute;
