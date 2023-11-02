"use client";

import { FC, ReactNode } from "react";
import styled from "styled-components";
import ProgressBar from "../common/ProgressBar";

interface WorkThroughContentProps {
  header: ReactNode;
  content: ReactNode;
  blur?: boolean;
  progress: number;
}

const WorkThroughContent: FC<WorkThroughContentProps> = ({ header, content, blur = true, progress }) => {
  const blurHeight = progress === 1 ? "249px" : progress === 2 ? "316px" : "402px";
  return (
    <>
      <ProgressBar totalStep={5} currentStep={progress} />
      {header}
      <WorkThroughWrap>
        <Content>{content}</Content>
        {blur && <Blur blurHeight={blurHeight}/>}
      </WorkThroughWrap>
    </>
  );
};

export default Object.assign(WorkThroughContent);

const WorkThroughWrap = styled.div`
  flex: 1;
  position: relative;
  height: 30px;
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: center;
`;
const Blur = styled.div<{blurHeight: string}>`
  position: absolute;
  height: ${(props) => props.blurHeight};
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -11.99%, #fff 27.38%);
`;
