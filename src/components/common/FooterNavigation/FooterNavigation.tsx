import styled from "styled-components";
import palette from "styles/palette";

const FooterNavigation = () => {
  return (
    <FooterWrapper>
      <ul>
        <li>
          <img src="/icon/nav/home@3x.png" alt="집 모양 아이콘" />
        </li>
        <li>
          <img src="/icon/nav/live@3x.png" alt="동영상 재생 아이콘" />
        </li>
        <li>
          <img src="/icon/nav/station@3x.png" alt="하트 모양 아이콘" />
        </li>
        <li>
          <img src="/icon/nav/connection@3x.png" alt="말풍선 아이콘" />
        </li>
        <li>
          <img src="/icon/nav/more@3x.png" alt="프로필 아이콘" />
        </li>
      </ul>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.nav`
  background-color: ${palette.White};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 12px 12px 24px;
  width: 100%;
  z-index: 10;
  border-top: 1px solid ${palette.Gray_1};
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      img {
        width: 28px;
        cursor: pointer;
      }
    }
  }
`;

export default FooterNavigation;
