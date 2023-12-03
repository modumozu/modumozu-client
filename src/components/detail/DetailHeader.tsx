import HeartIcon from "@/svg/HeartIcon";
import ShareIcon from "@/svg/ShareIcon";
import styled from "styled-components";
import PageHeader from "../common/PageHeader";
import { FC } from "react";
import { updateDetailPin } from "@/api/ipo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKeys from "@/constants/queryKeys";
import colors from "@/styles/colors";
import KakaoShareButton from "./KakaoShareButton";

interface DetailHeaderProps {
  id: number;
  name: string;
  pinned: boolean;
}

const DetailHeader: FC<DetailHeaderProps> = ({ id, name, pinned }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateDetailPin, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.DETAIL);
    },
  });
  const handlePinClick = () => {
    mutate(id);
  };

  return (
    <PageHeader
      addtionalButton={
        <>
          {pinned ? (
            <LikeFillButton color={colors.ON.PRIMARY} onClick={handlePinClick} />
          ) : (
            <LikeBorderButton onClick={handlePinClick} />
          )}
          <KakaoShareButton id={id} name={name} />
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
