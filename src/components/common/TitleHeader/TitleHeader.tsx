import styled from "styled-components";
import palette from "styles/palette";
import { useNavigate } from "react-router-dom";

const TitleHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <button onClick={() => navigate(-1)}>
        <img
          src="/cupist-assignment/icon/profile_edit/back@3x.png"
          alt="뒤로가기 버튼"
        />
      </button>
      <h1>프로필 수정</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${palette.White};
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${palette.Gray_1};
  width: 100%;
  height: 57px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    img {
      width: 28px;
    }
  }
  h2 {
    font-size: 17px;
    font-weight: 600;
    color: ${palette.Black};
  }
`;

export default TitleHeader;
