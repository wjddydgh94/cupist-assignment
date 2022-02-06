import Dialog from "components/common/Dialog";
import TitleHeader from "components/common/TitleHeader";
import styled from "styled-components";
import palette from "styles/palette";
import TextareaAutosize from "react-textarea-autosize";
import useEditProfile from "./hooks/useEditProfile";

const EditProfile = () => {
  const {
    onClickHeight,
    onClickBodyTypes,
    onClickEducation,
    isOpenDialog,
    dialogData,
    setIsOpenDialog,
    profileData,
    onChangeInputs,
    onClickDialogItem,
  } = useEditProfile();

  return (
    <>
      <TitleHeader />
      <EditProfileWrapper>
        <ProfileImgSection>
          <ul>
            {profileData.pictures.map((picture, idx) => {
              return (
                <li key={idx}>
                  <img
                    src={
                      picture
                        ? `/cupist-assignment${picture}`
                        : "/cupist-assignment/image/person@3x.png"
                    }
                    alt="기본 프로필 이미지"
                  />
                </li>
              );
            })}
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
              <input
                className={profileData?.name ? "active" : ""}
                value={profileData?.name}
                disabled
              />
              <img
                className="lock-icon"
                src="/cupist-assignment/icon/profile_edit/lock@3x.png"
                alt="자물쇠 아이콘"
              />
            </div>
          </div>
          <div className="row">
            <p className="title">성별</p>
            <div className="info">
              <input
                className={profileData?.gender ? "active" : ""}
                value={profileData?.gender === "M" ? "남성" : "여성"}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <div className="title">생일</div>
            <div className="info">
              <input
                className={profileData?.birthday ? "active" : ""}
                value={profileData?.birthday}
                disabled
              />
            </div>
          </div>
          <div className="row">
            <p className="title">위치</p>
            <div className="info">
              <input
                className={profileData?.location ? "active" : ""}
                value={profileData?.location}
                disabled
              />
            </div>
          </div>
        </ProfileInfoSection>
        <IntroduceSection>
          <p className="title">소개</p>
          <TextareaAutosize
            className="introduce"
            placeholder="회원님의 매력을 간단하게 소개해주세요."
            value={profileData?.introduction ? profileData.introduction : ""}
            name="introduction"
            onChange={(e) => {
              onChangeInputs(e);
            }}
          ></TextareaAutosize>
          <p className="description">
            SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다.
          </p>
        </IntroduceSection>
        <ProfileInfoSection>
          <div className="row">
            <p className="title">키</p>
            <div className="info">
              <input
                key={profileData.height}
                onClick={(e) => onClickHeight(e)}
                className={profileData.height ? "active" : ""}
                readOnly
                name="height"
                value={
                  profileData.height
                    ? `${profileData.height}cm`
                    : "입력해주세요"
                }
              />
            </div>
          </div>
          <div className="row">
            <p className="title">체형</p>
            <div className="info">
              <input
                onClick={(e) => onClickBodyTypes(e)}
                className={profileData.body_type ? "active" : ""}
                readOnly
                name="body_type"
                value={
                  profileData.body_type &&
                  (profileData.body_type === "body_type_00"
                    ? "마른"
                    : profileData.body_type === "body_type_01"
                    ? "보통"
                    : profileData.body_type === "body_type_02"
                    ? "근육"
                    : profileData.body_type === "body_type_03"
                    ? "통통"
                    : "입력해주세요")
                }
              />
            </div>
          </div>
        </ProfileInfoSection>
        <ProfileInfoSection>
          <div className="row">
            <p className="title">직장</p>
            <div className="info">
              <input
                className={profileData.company ? "active" : ""}
                placeholder="입력해주세요"
                name="company"
                onChange={(e) => {
                  onChangeInputs(e);
                }}
                value={profileData.company ? profileData.company : ""}
              />
            </div>
          </div>
          <div className="row">
            <p className="title">직업</p>
            <div className="info">
              <input
                className={profileData.job ? "active" : ""}
                placeholder="입력해주세요"
                name="job"
                onChange={(e) => {
                  onChangeInputs(e);
                }}
                value={profileData.job ? profileData.job : ""}
              />
            </div>
          </div>
          <div className="row">
            <p className="title">학력</p>
            <div className="info">
              <input
                onClick={(e) => onClickEducation(e)}
                className={profileData.education ? "active" : ""}
                placeholder="입력해주세요"
                name="education"
                readOnly
                value={
                  profileData.education
                    ? profileData.education === "education_00"
                      ? "고등학교"
                      : profileData.education === "education_01"
                      ? "전문대"
                      : profileData.education === "education_02"
                      ? "대학교"
                      : profileData.education === "education_03"
                      ? "석사"
                      : profileData.education === "education_04"
                      ? "박사"
                      : profileData.education === "education_05"
                      ? "기타"
                      : ""
                    : ""
                }
              />
            </div>
          </div>
          <div className="row">
            <p className="title">학교</p>
            <div className="info">
              <input
                className={profileData.school ? "active" : ""}
                placeholder="입력해주세요"
                name="school"
                onChange={(e) => {
                  onChangeInputs(e);
                }}
                value={profileData.school ? profileData.school : ""}
              />
            </div>
          </div>
        </ProfileInfoSection>
      </EditProfileWrapper>
      {isOpenDialog && (
        <Dialog
          closeModal={() => setIsOpenDialog(false)}
          dialogData={dialogData}
          onClickDialogItem={onClickDialogItem}
        />
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
      input {
        border: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        color: ${palette.Black};
        &::placeholder {
          color: ${palette.Gray_2};
        }
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
  textarea {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    resize: none;
    &::placeholder {
      color: ${palette.Gray_2};
    }
    &:focus {
      outline: none;
    }
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
