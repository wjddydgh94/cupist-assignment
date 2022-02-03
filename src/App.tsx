import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AppRouter from "./AppRouter";
import Header from "./components/common/Header";
import "./styles/css/reset.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <StyledMain>
        <AppRouter />
      </StyledMain>
    </BrowserRouter>
  );
}

const StyledMain = styled.main`
  padding-top: 68px;
`;

export default App;
