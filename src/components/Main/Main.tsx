import React from "react";
import styled from "styled-components";
import TodayIntroduction from "./TodayIntroductioin";

const Main = () => {
  return (
    <MainWrapper>
      <TodayIntroduction></TodayIntroduction>
    </MainWrapper>
  );
};

const MainWrapper = styled.article``;

export default Main;
