import { FC, ReactNode } from "react";
import { BottomSheetTitle } from "./BottomSheetTitle";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import Button from "../Button";

interface BottomSheetGuideProps {
  /**
   * 가이드 타이틀
   */
  title: string;
  /**
   * 가이드 컨텐츠(p, span으로 구성)
   */
  children: ReactNode;
  /**
   * 닫기 버튼 클릭 핸들러
   */
  handleClose: () => void;
}

export const BottomSheetGuide: FC<BottomSheetGuideProps> = (props) => {
  const { title, children, handleClose } = props;
  return (
    <>
      <BottomSheetTitle>
        <h2>{title}</h2>
      </BottomSheetTitle>
      <BottomSheetGuideContent>{children}</BottomSheetGuideContent>
      <BottomSheetButton color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR" onClick={handleClose}>
        닫기
      </BottomSheetButton>
    </>
  );
};

const BottomSheetGuideContent = styled.article`
  margin-bottom: 24px;

  p {
    color: ${colors.FONT_LIGHT.SECONDARY};
    ${getFonts("BODY1_REGULAR")}
  }

  span {
    color: ${colors.FONT_LIGHT.PRIMARY};
    ${getFonts("BODY1_SEMIBOLD")}
  }
`;

export const BottomSheetButton = styled(Button)`
  margin-bottom: 20px;
`;
