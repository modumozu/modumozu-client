"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import styled from "styled-components";

const POPlan = () => {
  return (
    <POPlanWrap>
      <POPlanTitle>공모 일정</POPlanTitle>
      <POPlanProcessList>
        <POPlanProcessItem></POPlanProcessItem>
        <POPlanProcessItem></POPlanProcessItem>
        <POPlanProcessItem></POPlanProcessItem>
        <POPlanProcessItem></POPlanProcessItem>
        <POPlanProcessItem></POPlanProcessItem>
        <POPlanProcessItem></POPlanProcessItem>
        <POPlanProcessItem></POPlanProcessItem>
      </POPlanProcessList>
    </POPlanWrap>
  );
};

export default POPlan;

const POPlanWrap = styled.div`
  padding: 32px 16px;
`;

const POPlanTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;

const POPlanProcessList = styled.ul`
  margin-top: 24px;
`;

const POPlanProcessItem = styled.li``;
