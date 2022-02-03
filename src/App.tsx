import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import Header from "./components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
