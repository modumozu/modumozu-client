"use client";

import { useState } from "react";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import Button from "../common/Button";
import WorkThroughContent from "./WorkThroughContent";
import KakaoLoginButton from "./KakaoLoginButton";
import instance from "@/api/common";
import Link from "next/link";

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
        return (
          <WorkThroughContent
            header={"보유 계좌를 선택하면,"}
            content={<img src="/images/step_1.png" width="100%" />}
          />
        );
      case 2:
        return (
          <WorkThroughContent
            header={"보유 계좌를 선택하면,"}
            content={<img src="/images/step_1.png" width="100%" />}
          />
        );
      case 3:
        return (
          <WorkThroughContent
            header={"내 계좌에 따라\n청약 가능한 공모주를\n한 눈에 알 수 있어요"}
            content={<img src="/images/step_2.png" width="100%" />}
          />
        );
      case 4:
        return (
          <WorkThroughContent
            header={"계좌 개설의 제약에 대해\n필요한 그 때 바로\n안내해드려요"}
            content={<img src="/images/step_3.png" width="100%" />}
          />
        );
      default:
        return null;
    }
  };

  const handleTestClick = async () => {
    const url = "https://api.modumozu.com/oauth2/authorization/kakao";

    const res = await instance.get(url);
    console.log("res", res);
  };

  const handleKakaoClick = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_KEY}&redirect_uri=http://localhost:3000/kakao&response_type=code`;
  };

  return (
    <WorkThroughWrap>
      <ContentWrap>{renderPage()}</ContentWrap>
      <ButtonWrap>
        {step <= 3 ? (
          <>
            <Button width="100%" onClick={handleNextStepClick}>
              {step > 1 ? "다음" : "시작"}
            </Button>
            <Button width="100%">
              <Link href="https://api.modumozu.com/oauth2/authorization/kakao" passHref>
                {/* <a target="_blank" rel="noopener noreferrer"> */}
                외부링크
                {/* </a> */}
              </Link>
              로그인
            </Button>
          </>
        ) : (
          <KakaoLoginButton onClick={handleKakaoClick} />
        )}
      </ButtonWrap>
    </WorkThroughWrap>
  );
};
export default WorkThrough;
const WorkThroughWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(var(--var, 1vh) * 100);
  height: 1vh;
  background-color: ${colors.WHITE};
  overflow: hidden;
`;
const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ButtonWrap = styled.div`
  gap: 8px 0;
  width: calc(100%);
  position: absolute;
  bottom: 20px;
  > * + * {
    margin-top: 8px;
  }
  padding: 0px 16px;
`;
const Description = styled.div`
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
  padding: 20px;
  white-space: pre-wrap;
`;
const StrongText = styled.span``;
