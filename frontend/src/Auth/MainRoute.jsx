import React from "react";
import { Route, Routes } from "react-router-dom";

import SignupPage from "../pages/Signup.Page";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordForm from "../pages/Forgot.Password";
import ResetPassword from "../pages/Reset.Password";
import { SinglePage } from "../pages/SinglePage";
import { HomePage } from "../pages/HomePage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/login/forgotpass" element={<ForgotPasswordForm />} />
      <Route path="/login/resetPassword" element={<ResetPassword />} />
      <Route path="/register" element={<SignupPage />} />
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/singleProduct/:id" element={<SinglePage />} />
    </Routes>
  );
};

export default MainRoute;
