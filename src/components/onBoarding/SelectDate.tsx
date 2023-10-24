import styled from "styled-components";
import Button from "../common/Button";
import { getFonts } from "@/styles/fonts";
import CustomDatePicker from "../common/CustomDatePicker";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import { BottomSheetTitle } from "../common/bottomSheet/BottomSheetTitle";
import colors from "@/styles/colors";
import { useState } from "react";

interface SelectDateProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 모달 창 끄기
   */
  setInvisible: () => void;
  /**
   * 선택 완료 클릭 시 event
   */
  onClick: () => void;
}

const SelectDate = (props: SelectDateProps) => {
  const { visible, setInvisible, onClick } = props;

  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <BottomSheet visible={visible} handleOverlayClick={setInvisible}>
      <div>
        <BottomSheetTitle>
          <h2>최근 계좌 개설일을 선택해주세요.</h2>
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
        <CustomDatePicker selectedDate={selectedDate} onChange={handleDateChange} />
        <ButtonGroup>
          <Button color="primary" width="100%" $font="BUTTON1_SEMIBOLD" disabled={false} onClick={onClick}>
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

export default SelectDate;

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
