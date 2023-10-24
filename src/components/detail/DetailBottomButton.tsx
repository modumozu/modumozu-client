import styled from "styled-components";
import Button from "../common/Button";
import { Proposal } from "@/dto/detail";
import { FC } from "react";

interface DetailBottomButton {
  proposal: Proposal;
  offerBeginAt: string;
  offerEndAt: string;
}

const DetailBottomButton: FC<DetailBottomButton> = ({ proposal, offerBeginAt, offerEndAt }) => {
  return (
    <BottomButtonWrap>
      <Button width="100%">버튼이요</Button>
    </BottomButtonWrap>
  );
};

export default DetailBottomButton;

const BottomButtonWrap = styled.div`
  padding: 16px 16px 20px 16px;
`;
