"use client";

import Button from "@/components/common/Button";
import ProgressBar from "@/components/common/ProgressBar";
import AccountList from "@/components/onBoarding/AccountList";
import SelectedAccountList from "@/components/onBoarding/SelectedAccoutList";
import OnboardingContent from "@/components/onBoarding/onBoardingContent";
import { useState } from "react";
import styled from "styled-components";

const OnBoarding = () => {
  const [step, setStep] = useState(1);
  const [selectedAccount, setSelectedAccount] = useState([]);

  const handleNextStepClick = () => {
    setStep((step) => step + 1);
  };

  const renderPage = () => {
    switch (step) {
      case 1:
        return <OnboardingContent title={""} description={""} content={undefined} />;
      case 2:
        return <OnboardingContent title={""} description={""} content={undefined} />;
      default:
        return null;
    }
  };

  return (
    <OnboardingWrap>
      <ProgressBar totalStep={5} currentStep={3 + step} />
      <div>{renderPage()}</div>
      <ButtonWrap>
        <Button shape="round" width="100%">
          선택 완료
        </Button>
        <Button color="secondary" shape="round" width="100%">
          보유 계좌 없음
        </Button>
      </ButtonWrap>
    </OnboardingWrap>
  );
};

export default OnBoarding;

const OnboardingWrap = styled.div`
  position: relative;
  min-height: calc(var(--var, 1vh) * 100);
  height: 1vh;
  height: 500px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 20px;
  > * + * {
    margin-top: 8px;
  }
  padding: 0px 16px;
`;
