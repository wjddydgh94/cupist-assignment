import { dialogDataType } from "types/dialog";
import { useEffect, useState } from "react";
import { EditProfileType } from "types/profile";
import profile from "__mocks__/profile.json";

const useEditProfile = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<dialogDataType | null>(null);
  const [profileData, setProfileData] = useState<EditProfileType>(profile.data);

  const onClickHeight = (e: React.FormEvent<HTMLInputElement>) => {
    let dataArr = [];
    for (let i = 120; i <= 220; i++) {
      dataArr.push({ key: i, value: i });
    }
    setDialogData({
      title: "키",
      state: profileData.height,
      data: dataArr,
      isHeight: true,
    });
    setIsOpenDialog(true);
  };

  const onClickBodyTypes = (e: React.FormEvent<HTMLInputElement>) => {
    setDialogData({
      title: "체형",
      state: e.currentTarget.value,
      data: [
        { key: "body_type_00", value: "마른" },
        { key: "body_type_01", value: "보통" },
        { key: "body_type_02", value: "근육" },
        { key: "body_type_03", value: "통통" },
      ],
      isHeight: false,
    });
    setIsOpenDialog(true);
  };

  const onClickEducation = (e: React.FormEvent<HTMLInputElement>) => {
    setDialogData({
      title: "학력",
      state: e.currentTarget.value,
      data: [
        { key: "education_00", value: "고등학교" },
        { key: "education_01", value: "전문대" },
        { key: "education_02", value: "대학교" },
        { key: "education_03", value: "석사" },
        { key: "education_04", value: "박사" },
        { key: "education_05", value: "기타" },
      ],
      isHeight: false,
    });
    setIsOpenDialog(true);
  };

  const onChangeInputs = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const nextValues = {
      ...profileData,
      [name]: value,
    };

    setProfileData(nextValues);
  };

  const setProfilePictures = () => {
    let profileImages = Array.from({ length: 6 }, () => "");

    for (let i = 0; i < profileImages.length; i++) {
      profileImages[i] = profileData.pictures[i];
    }

    const nextValues = {
      ...profileData,
      pictures: profileImages,
    };

    setProfileData(nextValues);
  };

  const onClickDialogItem = (key: string | number, title: string) => {
    const name =
      title === "키"
        ? "height"
        : title === "체형"
        ? "body_type"
        : title === "학력"
        ? "education"
        : "";

    const nextValues = {
      ...profileData,
      [name]: key,
    };

    setProfileData(nextValues);
    setIsOpenDialog(false);
  };

  useEffect(() => {
    setProfilePictures();
  }, []);

  useEffect(() => {
    // 프로필 데이터 상태 확인용 콘솔입니다.
    console.log("프로필 데이터 상태: ", profileData);
  }, [profileData]);

  return {
    onClickHeight,
    onClickBodyTypes,
    onClickEducation,
    isOpenDialog,
    dialogData,
    setIsOpenDialog,
    profileData,
    onChangeInputs,
    onClickDialogItem,
  };
};

export default useEditProfile;
