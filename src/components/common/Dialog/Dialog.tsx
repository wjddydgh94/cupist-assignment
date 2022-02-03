import styled from "styled-components";
import palette from "styles/palette";
import { dialogData } from "types/dialog";

interface DialogPropsType {
  closeModal: (value: boolean) => void;
  dialogData: dialogData | null;
}

const Dialog = ({ closeModal, dialogData }: DialogPropsType) => {
  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal(false);
    }
  };

  return (
    <DialogWrapper onClick={handleCloseModal}>
      <DialogContainer>
        <p className="title">{dialogData?.title}</p>
        <ul>
          {dialogData?.data.map((n, idx) => {
            return <li key={idx}>{n}</li>;
          })}
        </ul>
      </DialogContainer>
    </DialogWrapper>
  );
};

const DialogWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: ${palette.Black + "4D"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContainer = styled.section`
  width: 75%;
  border-radius: 10px;
  background-color: ${palette.White};
  position: relative;
  overflow: hidden;
  .title {
    height: 60px;
    border-bottom: 1px solid ${palette.Gray_1};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    max-height: 351px;
    overflow-y: scroll;
    li {
      height: 44px;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      color: ${palette.Black};
      &.active {
        color: ${palette.Glam_Blue};
      }
    }
  }
`;

export default Dialog;
