import styled from "styled-components";
import palette from "styles/palette";
import { CardDataType } from "types/card";
import ImgSlider from "./ImgSlider";

interface IntroductionCardPropsType {
  data: CardDataType[];
  isTodayRecommend?: boolean;
  onClickDeleteButton: (id: number) => void;
}

const IntroductionCard = ({
  data,
  isTodayRecommend,
  onClickDeleteButton,
}: IntroductionCardPropsType) => {
  return (
    <IntroductionSection>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <div className="card">
              <ImgSlider item={item.pictures} />
              <div className="contents">
                {isTodayRecommend && <span className="tag">오늘의 추천</span>}
                <p className="user-name">
                  {item.name}, {item.age}
                  <img src="/icon/main/info@3x.png" alt="정보 아이콘" />
                </p>
                {item.introduction ? (
                  <p className="introduce">{item.introduction}</p>
                ) : (
                  <>
                    <p className="job-distance">{item.job}</p>
                    <p className="height">{item.height}cm</p>
                  </>
                )}

                <div className="button-area">
                  <button
                    className="delete-btn"
                    onClick={() => onClickDeleteButton(item.id)}
                  >
                    <img
                      src="/icon/main/delete@3x.png"
                      alt="카드 삭제 버튼 아이콘"
                    />
                  </button>
                  <button
                    onClick={() => onClickDeleteButton(item.id)}
                    className="like-btn"
                  >
                    좋아요
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </IntroductionSection>
  );
};

const IntroductionSection = styled.section`
  li {
    position: relative;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 12px;

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

      .contents {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 16px;
        background: rgb(127, 127, 127);
        background: rgb(26, 26, 26);
        background: linear-gradient(
          0deg,
          rgba(26, 26, 26, 1) 20%,
          rgba(255, 255, 255, 0) 100%
        );
        .tag {
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          color: ${palette.White};
          background-color: ${palette.White + 40};
          border-radius: 4px;
          padding: 4px 10px;
          margin-bottom: 12px;
        }
        .user-name {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 600;
          line-height: 120%;
          color: ${palette.White};
          margin-bottom: 8px;
          img {
            width: 16px;
            margin-left: 4px;
          }
        }
        .introduce {
          font-size: 16px;
          font-weight: 400;
          line-height: 120%;
          color: ${palette.White};
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .job-distance {
          font-size: 16px;
          font-weight: 400;
          line-height: 120%;
          color: ${palette.White};
          margin-bottom: 4px;
        }
        .height {
          font-size: 16px;
          font-weight: 400;
          color: ${palette.White};
        }
        .button-area {
          margin-top: 28px;
          display: flex;
          .delete-btn {
            width: 48px;
            height: 44px;
            background-color: ${palette.Dark_Gray_1};
            border-radius: 5px;
            margin-right: 8px;
            img {
              width: 24px;
            }
          }
          .like-btn {
            flex: 1;
            border-radius: 5px;
            background-color: ${palette.Glam_Blue};
            color: ${palette.White};
            font-size: 14px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export default IntroductionCard;
