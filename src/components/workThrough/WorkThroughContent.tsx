"use client";

import DeleteIcon from "@/svg/DeleteIcon";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface WorkThroughContentProps {
  header: ReactNode;
  content: ReactNode;
  blur?: boolean;
}

const WorkThroughContent: FC<WorkThroughContentProps> = ({ header, content, blur = true }) => {
  return (
    <>
      {header}
      <WorkThroughWrap>
        <Content>{content}</Content>
        {blur && <Blur />}
      </WorkThroughWrap>
    </>
  );
};

const WorkThroughMainHeader = () => {
  return (
    <>
      <WorkThroughHeader>
        <SkipButton />
      </WorkThroughHeader>
      <div>
        <Image src={"/images/logo_1.png"} />
      </div>
    </>
  );
};

export default Object.assign(WorkThroughContent, {
  mainHeader: WorkThroughMainHeader,
});

const WorkThroughHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const SkipButton = styled(DeleteIcon)`
  cursor: pointer;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const WorkThroughWrap = styled.div`
  flex: 1;
  position: relative;
  margin-top: 20px;
  height: 30px;
  overflow: hidden;
`;

const Content = styled.div`
  margin: 60px auto 0px auto;
  width: 70%;
`;
const Blur = styled.div`
  position: absolute;
  height: 375px;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -11.99%, #fff 27.38%);
`;
