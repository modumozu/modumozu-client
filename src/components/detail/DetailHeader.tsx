import HeartIcon from "@/svg/HeartIcon";
import ShareIcon from "@/svg/ShareIcon";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import { FC } from "react";
import { updateDetailPin } from "@/api/ipo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKeys from "@/constants/queryKeys";
import colors from "@/styles/colors";

interface DetailHeaderProps {
  id: number;
  pinned: boolean;
}

const DetailHeader: FC<DetailHeaderProps> = ({ id, pinned }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateDetailPin, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.DETAIL);
    },
  });
  const handlePinClick = () => {
    mutate(id);
  };
  // TODO: 공유하기 구현
  const handleShardClick = () => {};

  return (
    <PageHeader
      addtionalButton={
        <>
          {pinned ? (
            <LikeFillButton color={colors.ON.PRIMARY} onClick={handlePinClick} />
          ) : (
            <LikeBorderButton onClick={handlePinClick} />
          )}
          <ShareButton />
        </>
      }
    />
  );
};

export default DetailHeader;

const LikeBorderButton = styled(HeartIcon.border)`
  cursor: pointer;
  margin-right: 12px;
`;
const LikeFillButton = styled(HeartIcon.fill)`
  cursor: pointer;
  margin-right: 12px;
`;

const ShareButton = styled(ShareIcon)`
  cursor: pointer;
`;
