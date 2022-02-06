import styled from "styled-components";
import palette from "styles/palette";

interface CustomIntroductionPropsType {
  onClickCustomButton: () => void;
}

const CustomIntroduction = ({
  onClickCustomButton,
}: CustomIntroductionPropsType) => {
  return (
    <CustomIntroductionSection>
      <h2>맞춤 추천</h2>
      <ul>
        <li>
          <div>
            <img
              className="icon"
              src="/icon/recommendations/today@3x.png"
              alt="글램 추천 아이콘"
            />
            <span>글램 추천</span>
            <img
              className="hot-icon"
              src="icon/recommendations/hot@3x.png"
              alt="핫 아이콘"
            />
          </div>
          <button onClick={onClickCustomButton}>선택</button>
        </li>
        <li>
          <div>
            <img
              className="icon"
              src="/icon/recommendations/dia@3x.png"
              alt="최상위 매력 아이콘"
            />
            <span>최상위 매력</span>
            <img
              className="hot-icon"
              src="icon/recommendations/hot@3x.png"
              alt="핫 아이콘"
            />
          </div>
          <button onClick={onClickCustomButton}>선택</button>
        </li>
        <li>
          <div>
            <img
              className="icon"
              src="/icon/recommendations/glamour@3x.png"
              alt="볼륨감 있는 체형 아이콘"
            />
            <span>볼륨감 있는 체형</span>
            <img
              className="hot-icon"
              src="icon/recommendations/hot@3x.png"
              alt="핫 아이콘"
            />
          </div>
          <button onClick={onClickCustomButton}>선택</button>
        </li>
        <li>
          <div>
            <img
              className="icon"
              src="/icon/recommendations/withpet@3x.png"
              alt="반려 동물을 키우는 아이콘"
            />
            <span>반려 동물을 키우는</span>
          </div>
          <button onClick={onClickCustomButton}>선택</button>
        </li>
      </ul>
      <button className="more-btn">24개 항목 모두 보기</button>
    </CustomIntroductionSection>
  );
};

const CustomIntroductionSection = styled.section`
  margin: 12px 0;
  border: 1px solid ${palette.Gray_1};
  border-radius: 5px;
  padding: 24px 16px 16px;
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${palette.Black};
    margin-bottom: 12px;
  }
  ul {
    margin-bottom: 16px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 62px;
      div {
        display: flex;
        align-items: center;
        img.icon {
          width: 48px;
        }
        span {
          margin-left: 12px;
          font-size: 16px;
          line-height: 160%;
        }
        img.hot-icon {
          width: 30px;
          margin-left: 5px;
        }
      }
      button {
        font-size: 14px;
        font-weight: 600;
        color: ${palette.White};
        background-color: ${palette.Glam_Blue};
        width: 76px;
        height: 32px;
        border-radius: 5px;
      }
    }
  }
  button.more-btn {
    font-size: 14px;
    font-weight: 600;
    color: ${palette.Black};
    width: 100%;
    height: 44px;
    background-color: ${palette.Gray_1};
  }
`;

export default CustomIntroduction;
