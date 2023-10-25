import styled from "styled-components";
import Button from "../Button";
import { getFonts } from "@/styles/fonts";
import CustomDatePicker from "../CustomDatePicker";
import { BottomSheet } from "./BottomSheet";
import { BottomSheetTitle } from "./BottomSheetTitle";
import colors from "@/styles/colors";

interface BottomSheetSelectDateProps {
  /**
   * 선택 완료 버튼 활성화 여부
   */
  disableButton: boolean;
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 모달 창 끄기
   */
  setInvisible: () => void;
  /**
   * 선택 완료를 클릭했을 때
   */
  onClick: () => void;
  /**
   * 선택한 날짜
   */
  selectedDate?: Date;
  /**
   * 날짜 변경
   */
  onDateChange: (date: Date) => void;
}

const BottomSheetSelectDate = (props: BottomSheetSelectDateProps) => {
  const { disableButton, visible, setInvisible, selectedDate, onClick, onDateChange } = props;

  return (
    <BottomSheet visible={visible} handleOverlayClick={setInvisible}>
      <div>
        <BottomSheetTitle>
          <h2>계좌 개설일을 선택해주세요.</h2>
        </BottomSheetTitle>
        <Description>
          <ul>
            <li>계좌 개설일을 알려주시면 청약 가능한 공모주를 정확하게 알려드려요.</li>
            <li>
              유진증권, 삼성증권, 키움증권, 한화투자증권을 제외한 증권사들은 20일 내에 계좌 개설 내역이 있을 경우 신규
              계좌 개설을 제한하고 있어요.
            </li>
          </ul>
        </Description>
        <CustomDatePicker selectedDate={selectedDate} onChange={onDateChange} />
        <ButtonGroup>
          <Button color="primary" width="100%" $font="BUTTON1_SEMIBOLD" disabled={disableButton} onClick={onClick}>
            선택완료
          </Button>
          <Button color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR" onClick={setInvisible}>
            닫기
          </Button>
        </ButtonGroup>
      </div>
    </BottomSheet>
  );
};

export default BottomSheetSelectDate;

const Description = styled.div`
  margin-top: -8px;
  margin-bottom: 16px;
  li {
    ${getFonts("BODY1_REGULAR")}
    color: ${colors.FONT_LIGHT.SECONDARY};
    list-style: disc;
    text-decoration: dotted;
    margin-left: 20px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
