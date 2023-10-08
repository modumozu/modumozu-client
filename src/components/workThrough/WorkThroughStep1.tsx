"use client";

import Image from "next/image";
import styled from "styled-components";

const WorkThroughStep1 = () => {
  return (
    <>
      <div>보유 계좌를 선택하면,</div>
      <ImageWrap>
        <img src="/images/step_1.png" alt="스텝1" style={{ width: "100%" }} />
      </ImageWrap>
    </>
  );
};

export default WorkThroughStep1;

const ImageWrap = styled.div`
  margin-top: 20px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 14%, rgba(255, 255, 255, 1) 100%);
`;
