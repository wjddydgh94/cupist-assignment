import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "styles/palette";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderUl>
          <li className="active">
            <img src="/icon/main/logo@3x.png" alt="글램 로고 아이콘" />
          </li>
          <li>
            <p>근처</p>
          </li>
          <li>
            <p>라이브</p>
          </li>
        </HeaderUl>
        <img
          className="setting-icon"
          src="/icon/main/setting@3x.png"
          alt="설정 아이콘"
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${palette.White};
  position: fixed;
  top: 0;
  left: 0;
  padding: 12px 12px 0 8px;
  border-bottom: 1px solid ${palette.Gray_1};
  width: 100%;
  z-index: 10;
`;

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .setting-icon {
    width: 28px;
    cursor: pointer;
  }
`;

const HeaderUl = styled.ul`
  display: flex;
  align-items: center;

  li {
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    height: 44px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 63px;
    }
    p {
      color: ${palette.Gray_2};
    }
    &.active {
      border-bottom: 2px solid ${palette.Dark_Gray_1};
    }
  }
`;

export default Header;
