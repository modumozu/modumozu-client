"use client";

import BackIcon from "@/svg/BackIcon";
import HeartIcon from "@/svg/HeartIcon";
import ShareIcon from "@/svg/ShareIcon";
import styled from "styled-components";

const DetailHeader = () => {
  return (
    <Header>
      <div>
        <BackIcon />
      </div>
      <div>
        <HeartIcon.border />
        <ShareIcon />
      </div>
    </Header>
  );
};
export default DetailHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;
