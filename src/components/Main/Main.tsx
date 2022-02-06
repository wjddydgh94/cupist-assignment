import FooterNavigation from "components/common/FooterNavigation";
import Header from "components/common/Header";
import styled from "styled-components";
import CustomIntroduction from "./CustomIntroduction";
import IntroductionCard from "./IntroductioinCard";
import useIntroductionCard from "./IntroductioinCard/hooks/useIntroductioinCard";
import useScroll from "./IntroductioinCard/hooks/useScroll";

const Main = () => {
  const todayRecommend = useIntroductionCard({ type: "TODAY" });
  const custom = useIntroductionCard({ type: "CUSTOM" });
  const additional = useIntroductionCard({ type: "ADDITIONAL" });
  const additional_2 = useScroll();

  return (
    <>
      <Header />
      <MainWrapper>
        {custom.data.length > 0 && (
          <IntroductionCard
            data={custom.data}
            onClickDeleteButton={custom.onClickDeleteButton}
          />
        )}
        <IntroductionCard
          data={todayRecommend.data}
          onClickDeleteButton={todayRecommend.onClickDeleteButton}
          isTodayRecommend
        />
        <CustomIntroduction onClickCustomButton={custom.onClickCustomButton} />
        <IntroductionCard
          data={additional.data}
          onClickDeleteButton={additional.onClickDeleteButton}
        />
        {additional_2.isPageBottom && additional_2.data && (
          <IntroductionCard
            data={additional_2.data}
            onClickDeleteButton={additional_2.onClickDeleteButton}
          />
        )}
      </MainWrapper>

      <FooterNavigation />
    </>
  );
};

const MainWrapper = styled.main`
  width: 98%;
  padding: 68px 0;
  margin: 0 auto;
`;

export default Main;
