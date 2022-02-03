import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
