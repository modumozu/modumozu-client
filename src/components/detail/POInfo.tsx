"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import styled from "styled-components";

const POInfo = () => {
  return (
    <InfoWrap>
      <InfoTitle>공모 정보</InfoTitle>
    </InfoWrap>
  );
};

export default POInfo;

const InfoWrap = styled.div`
  padding: 32px 16px;
`;
const InfoTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")}
  color: ${colors.FONT_LIGHT.PRIMARY};
`;
