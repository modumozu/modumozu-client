"use client";

import colors from "@/styles/colors";
import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import WorkThroughMain from "./WorkThroughMain";
import WorkThroughStep1 from "./WorkThroughStep1";
import WorkThroughStep2 from "./WorkThroughStep1Step2";
import WorkThroughStep3 from "./WorkThroughStep1Step3";

const WorkThrough = () => {
  const [step, setStep] = useState(1);

  const handleNextStepClick = () => {
    setStep((step) => step + 1);
  };
  const handleLoginClick = () => {
    setStep(4);
  };

  const renderPage = () => {
    switch (step) {
      case 1:
        return <WorkThroughMain />;
      case 2:
        return <WorkThroughStep1 />;
      case 3:
        return <WorkThroughStep2 />;
      case 4:
        return <WorkThroughStep3 />;
      default:
        return null;
    }
  };
  return (
    <WorkThroughWrap>
      {renderPage()}
      <ButtonWrap>
        <Button width="100%" onClick={handleNextStepClick}>
          {step > 1 ? "다음" : "시작"}
        </Button>
        <Button width="100%" onClick={handleLoginClick}>
          로그인
        </Button>
      </ButtonWrap>
    </WorkThroughWrap>
  );
};
export default WorkThrough;
const WorkThroughWrap = styled.div`
  position: relative;
  min-height: calc(var(--var, 1vh) * 100);
  background-color: ${colors.BLUE[1]};
`;
const ButtonWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
`;
