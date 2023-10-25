import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface SmallModalBoxProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 모달 박스 제목
   */
  title: string;
  /**
   * 모달 박스 내용
   */
  content?: ReactNode;
  /**
   * 모달 버튼 내용
   */
  buttonText: [string, string] | string;
  /**
   * Primary 버튼 클릭 핸들러
   */
  handlePrimaryButtonClick: () => void;
  /**
   * 모달 on/off 핸들러
   */
  onClose: () => void;
}

const SmallModalBox: FC<SmallModalBoxProps> = (props) => {
  const { visible, title, content, buttonText, handlePrimaryButtonClick, onClose } = props;
  return (
    <Modal visible={visible} onOutsideClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {content ? <p>{content}</p> : null}
        <div>
          {typeof buttonText === "string" ? (
            <ModalButton $primary={true} onClick={handlePrimaryButtonClick}>
              {buttonText}
            </ModalButton>
          ) : (
            buttonText.map((text, idx) => (
              <ModalButton $primary={idx === 1} onClick={idx === 1 ? handlePrimaryButtonClick : onClose} key={text}>
                {text}
              </ModalButton>
            ))
          )}
        </div>
      </ModalBox>
    </Modal>
  );
};

export default SmallModalBox;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 295px;
  padding: 24px 16px 16px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;

  h3 {
    ${getFonts("H3_SEMIBOLD")}
  }

  p {
    ${getFonts("BODY1_REGULAR")}
    padding-top: 11px;
    white-space: pre-line;
  }

  div {
    display: flex;
    gap: 8px;
    padding-top: 24px;
    width: 100%;
  }
`;

const ModalButton = styled.button<{ $primary: boolean }>`
  flex-grow: 1;
  padding: 16px 20px 16px 20px;
  border-radius: 6px;
  background-color: ${(props) => (props.$primary ? colors.ON.PRIMARY : colors.BLUE[1])};
  color: ${(props) => (props.$primary ? colors.WHITE : colors.ON.PRIMARY)};
  ${getFonts("BUTTON1_SEMIBOLD")}
`;
