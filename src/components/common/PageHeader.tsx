"use client";

import BackIcon from "@/svg/BackIcon";
import HeartIcon from "@/svg/HeartIcon";
import ShareIcon from "@/svg/ShareIcon";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  showPrevButton?: boolean;
  addtionalButton?: ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ showPrevButton = true, addtionalButton }) => {
  const router = useRouter();

  const handlePrevClick = () => {
    router.back();
  };

  return (
    <Header>
      {showPrevButton && (
        <div>
          <BackButton onClick={handlePrevClick} />
        </div>
      )}

      {addtionalButton && (
        <div>
          <LikeButton />
          <ShareButton />
        </div>
      )}
    </Header>
  );
};
export default PageHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const BackButton = styled(BackIcon)`
  cursor: pointer;
`;

const LikeButton = styled(HeartIcon.border)`
  cursor: pointer;
  margin-right: 12px;
`;

const ShareButton = styled(ShareIcon)`
  cursor: pointer;
`;
