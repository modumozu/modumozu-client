"use client";

import DeleteIcon from "@/svg/DeleteIcon";
import styled from "styled-components";

const WorkThroughMain = () => {
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
export default WorkThroughMain;

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
