import FooterNavigation from "components/common/FooterNavigation";
import Header from "components/common/Header";
import React from "react";
import styled from "styled-components";
import CustomIntroduction from "./CustomIntroduction";
import IntroductionCard from "./IntroductioinCard";

const Main = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <IntroductionCard />
        <CustomIntroduction />
        <IntroductionCard />
      </MainWrapper>
      <FooterNavigation />
    </>
  );
};

const MainWrapper = styled.article`
  width: 98%;
  padding: 68px 0;
  margin: 0 auto;
`;

export default Main;
