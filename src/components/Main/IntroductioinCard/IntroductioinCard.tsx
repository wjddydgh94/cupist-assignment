import styled from "styled-components";
import palette from "styles/palette";

const IntroductionCard = () => {
  return (
    <IntroductionSection>
      <li>
        <div className="card">
          <img
            className="profile-img"
            src="/profile/00.png"
            alt="프로필 이미지"
          />
          <div className="contents">
            <span className="tag">오늘의 추천</span>
            <p className="user-name">
              여름아 부탁해, 31
              <img src="/icon/main/info@3x.png" alt="정보 아이콘" />
            </p>
            <p className="introduce">
              데이팅 앱 처음 사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음 사용해봐용~
            </p>
            <p className="job-distance">그래픽 디자이너 · 2.9km</p>
            <p className="height">172cm</p>
            <div className="button-area">
              <button className="delete-btn">
                <img
                  src="/icon/main/delete@3x.png"
                  alt="카드 삭제 버튼 아이콘"
                />
              </button>
              <button className="like-btn">좋아요</button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="card">
          <img
            className="profile-img"
            src="/profile/00.png"
            alt="프로필 이미지"
          />
          <div className="contents">
            <span className="tag">오늘의 추천</span>
            <p className="user-name">
              여름아 부탁해, 31
              <img src="/icon/main/info@3x.png" alt="정보 아이콘" />
            </p>
            <p className="introduce">
              데이팅 앱 처음 사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음
              사용해봐용~데이팅 앱 처음 사용해봐용~데이팅 앱 처음 사용해봐용~
            </p>
            <p className="job-distance">그래픽 디자이너 · 2.9km</p>
            <p className="height">172cm</p>
            <div className="button-area">
              <button className="delete-btn">
                <img
                  src="/icon/main/delete@3x.png"
                  alt="카드 삭제 버튼 아이콘"
                />
              </button>
              <button className="like-btn">좋아요</button>
            </div>
          </div>
        </div>
      </li>
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
      .profile-img {
        width: 100%;
        height: 100%;
        max-width: none;
        object-fit: cover;
        object-position: 50% 50%;
      }
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
