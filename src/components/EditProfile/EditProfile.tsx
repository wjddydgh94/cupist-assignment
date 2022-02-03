import Dialog from "components/common/Dialog";
import TitleHeader from "components/common/TitleHeader";
import { useState } from "react";
import styled from "styled-components";
import palette from "styles/palette";
import { dialogData } from "types/dialog";

const EditProfile = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<dialogData | null>(null);

  const onClickHeight = () => {
    let dataArr = [];
    for (let i = 120; i <= 220; i++) {
      dataArr.push(i + "cm");
    }
    setDialogData({ title: "키", data: dataArr });
    setIsOpenDialog(true);
  };

  const onClickBodyTypes = () => {
    setDialogData({ title: "체형", data: ["마른", "보통", "근육", "통통"] });
    setIsOpenDialog(true);
  };

  return (
    <>
      <TitleHeader />
      <EditProfileWrapper>
        <ProfileImgSection>
          <ul>
            <li>
              <img src="/image/person@3x.png" alt="기본 프로필 이미지" />
            </li>
            <li>
              <img src="/image/person@3x.png" alt="기본 프로필 이미지" />
            </li>
            <li>
              <img src="/image/person@3x.png" alt="기본 프로필 이미지" />
            </li>
            <li>
              <img src="/image/person@3x.png" alt="기본 프로필 이미지" />
            </li>
            <li>
              <img src="/image/person@3x.png" alt="기본 프로필 이미지" />
            </li>
            <li>
              <img src="/image/person@3x.png" alt="기본 프로필 이미지" />
            </li>
          </ul>
          <p>
            다양한 매력을 보여줄 수 있는 사진을 올려주세요
            <strong>더 알아보기</strong>
          </p>
        </ProfileImgSection>
        <ProfileInfoSection>
          <div className="row">
            <p className="title">닉네임</p>
            <div className="info">
              <p className="active">라로앙</p>
              <img
                className="lock-icon"
                src="/icon/profile_edit/lock@3x.png"
                alt="자물쇠 아이콘"
              />
            </div>
          </div>
          <div className="row">
            <p className="title">성별</p>
            <div className="info">
              <p>여성</p>
            </div>
          </div>
          <div className="row">
            <div className="title">생일</div>
            <div className="info">
              <p className="active">1996-06-18</p>
            </div>
          </div>
          <div className="row">
            <p className="title">위치</p>
            <div className="info">
              <p className="active">서울특별시</p>
            </div>
          </div>
        </ProfileInfoSection>
        <IntroduceSection>
          <p className="title">소개</p>
          <p className="introduce">회원님의 매력을 간단하게 소개해주세요.</p>
          <p className="description">
            SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다.
          </p>
        </IntroduceSection>
        <ProfileInfoSection>
          <div className="row">
            <p className="title">키</p>
            <div className="info" onClick={onClickHeight}>
              <p className="active">160cm</p>
            </div>
          </div>
          <div className="row">
            <p className="title">체형</p>
            <div className="info" onClick={onClickBodyTypes}>
              <p className="active">보통</p>
            </div>
          </div>
        </ProfileInfoSection>
        <ProfileInfoSection>
          <div className="row">
            <p className="title">직장</p>
            <div className="info">
              <p className="gray">입력해주세요</p>
            </div>
          </div>
          <div className="row">
            <p className="title">직업</p>
            <div className="info">
              <p className="active">디자인 관련자</p>
            </div>
          </div>
          <div className="row">
            <p className="title">학력</p>
            <div className="info">
              <p className="gray">선택해주세요</p>
            </div>
          </div>
          <div className="row">
            <p className="title">학교</p>
            <div className="info">
              <p className="active">서울여대</p>
            </div>
          </div>
        </ProfileInfoSection>
      </EditProfileWrapper>
      {isOpenDialog && (
        <Dialog closeModal={setIsOpenDialog} dialogData={dialogData} />
      )}
    </>
  );
};

const EditProfileWrapper = styled.main`
  padding-top: 57px;
`;

const ProfileImgSection = styled.section`
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      position: relative;
      width: 33%;
      overflow: hidden;
      border-bottom: 1px solid ${palette.Gray_1};

      &:nth-child(-n + 3) {
        margin-bottom: 0.5%;
      }
      &::before {
        content: "";
        display: block;
        padding-top: 100%;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: ${palette.Gray_4};
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${palette.Gray_1};
    strong {
      font-weight: 600;
      color: ${palette.Dark_Gray_1};
      margin-left: 5px;
    }
  }
`;

const ProfileInfoSection = styled.section`
  padding-bottom: 8px;
  border-bottom: 1px solid ${palette.Gray_1};
  margin-bottom: 8px;
  .row {
    display: flex;
    align-items: center;
    height: 44px;
    .title {
      width: 35%;
      padding-left: 16px;
      font-size: 16px;
      font-weight: 400;
      color: ${palette.Black};
    }
    .info {
      width: 65%;
      display: flex;
      align-items: center;
      padding-left: 16px;
      p {
        font-size: 16px;
        font-weight: 400;
        color: ${palette.Black};
        &.active {
          color: ${palette.Glam_Blue};
        }
        &.gray {
          color: ${palette.Gray_2};
        }
      }
      img.lock-icon {
        width: 16px;
        margin-left: 5px;
      }
    }
  }
`;

const IntroduceSection = styled.section`
  padding: 0 16px 8px;
  border-bottom: 1px solid ${palette.Gray_1};
  margin-bottom: 8px;
  .title {
    font-size: 16px;
    font-weight: 400;
    color: ${palette.Black};
    height: 35px;
    line-height: 35px;
  }
  .introduce {
    font-size: 14px;
    font-weight: 400;
    color: ${palette.Gray_2};
  }
  .description {
    font-size: 12px;
    font-weight: 400;
    color: ${palette.Gray_4};
    height: 38px;
    line-height: 38px;
  }
`;

export default EditProfile;
