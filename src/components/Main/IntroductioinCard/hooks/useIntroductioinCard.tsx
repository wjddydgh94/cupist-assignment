import todayRecommend from "__mocks__/introduction.json";
import custom from "__mocks__/introduction_custom.json";
import additional from "__mocks__/introduction_additional.json";
import { CardDataType } from "types/card";
import { useState } from "react";

interface UseIntroductionCardPropsType {
  type?: "CUSTOM" | "TODAY" | "ADDITIONAL";
}

const useIntroductionCard = ({ type }: UseIntroductionCardPropsType) => {
  const [data, setData] = useState<CardDataType[]>(
    type === "TODAY"
      ? (todayRecommend.data as CardDataType[])
      : type === "ADDITIONAL"
      ? (additional.data as CardDataType[])
      : []
  );
  const [imgIndex, setImgIndex] = useState<number>(0);

  const onClickDeleteButton = (id: number) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const onClickCustomButton = () => {
    setData(custom.data as CardDataType[]);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onClickImgSliderLeft = () => {
    if (imgIndex <= 0) return;
    const newImgIndex = imgIndex - 1;
    setImgIndex(newImgIndex);
  };

  const onClickImgSliderRight = (length: number) => {
    if (imgIndex >= length - 1) return;
    const newImgIndex = imgIndex + 1;
    setImgIndex(newImgIndex);
  };

  return {
    onClickDeleteButton,
    onClickCustomButton,
    data,
    onClickImgSliderLeft,
    onClickImgSliderRight,
    imgIndex,
  };
};

export default useIntroductionCard;
