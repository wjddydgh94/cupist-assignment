import React from "react";
import styled from "styled-components";

const TodayIntroduction = () => {
  return (
    <TodayIntroductionSection>
      <li>
        <div className="card">
          <img src="/profile/00.png" alt="프로필 이미지" />
        </div>
      </li>
      <li></li>
    </TodayIntroductionSection>
  );
};

const TodayIntroductionSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  li {
    position: relative;
    width: 48%;
    background-color: #000;

    &::before {
      content: "";
      display: block;
      padding-top: 140%;
    }
    .card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        max-width: none;
        object-fit: cover;
        object-position: 50% 50%;
      }
    }
  }
`;

export default TodayIntroduction;
