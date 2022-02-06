import styled from "styled-components";
import useIntroductionCard from "./hooks/useIntroductioinCard";

interface ImgSliderPropsType {
  item: string[];
}

const ImgSlider = ({ item }: ImgSliderPropsType) => {
  const { imgIndex, onClickImgSliderLeft, onClickImgSliderRight } =
    useIntroductionCard({
      type: undefined,
    });

  return (
    <ImgSliderWrapper nowIndex={imgIndex}>
      <button
        onClick={() => onClickImgSliderLeft()}
        className="left-button"
      ></button>
      <div className="img-slider-container">
        {item.map((picture) => {
          return (
            <div className="img-box">
              <img className="profile-img" src={picture} alt="프로필 이미지" />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => onClickImgSliderRight(item.length)}
        className="right-button"
      ></button>
    </ImgSliderWrapper>
  );
};
const ImgSliderWrapper = styled.div<{ nowIndex: number }>`
  height: 100%;
  button {
    position: absolute;
    top: 0;
    width: 50%;
    height: 60%;
    cursor: pointer;
    z-index: 1;
    &.left-button {
      left: 0;
    }
    &.right-button {
      right: 0;
    }
  }
  .img-slider-container {
    white-space: nowrap;
    position: relative;
    height: 100%;
    left: -${(props) => props.nowIndex * 100}%;
  }
  .img-box {
    height: 100%;
    display: inline-block;

    .profile-img {
      width: 100%;
      height: 100%;
      max-width: none;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
`;

export default ImgSlider;
