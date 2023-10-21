"use client";

import { getDetailById } from "@/api/ipo";
import DetailCard from "@/components/detail/DetailCard";
import DetailTitle from "@/components/detail/DetailTitle";
import IPOConfirm, { IPOComfirmTableData } from "@/components/detail/IPOConfirm";
import IPOInfo from "@/components/detail/IPOInfo";
import IPOTapMenu from "@/components/detail/IPOTapMenu";
import InvestCompetition from "@/components/detail/InvestCompetition";
import POInfo from "@/components/detail/POInfo";
import queryKeys from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";

const ipoConfirmDummy: IPOComfirmTableData = [
  {
    label: "15일",
    value: "22,886,000",
  },
  {
    label: "1개월",
    value: "22,886,000",
  },
  {
    label: "3개월",
    value: "22,886,000",
  },
  {
    label: "6개월",
    value: "22,886,000",
  },
  { label: "미확약", value: "2,808,389,000" },
  { label: "합계", value: "3,033,263,000" },
  { label: "총 수량 대비 비율 (%)", value: "11%" },
];
interface DetailProps {
  params: { id: string };
}

const Detail: NextPage<DetailProps> = ({ params }) => {
  const id = params.id;

  const data = useQuery(queryKeys.DETAIL, () => {
    return getDetailById(id);
  });

  return (
    <>
      <DetailTitle date="18" name="큐리옥스바이오시스템즈" category="내구 소비재 및 의류" />
      <DetailCard.wrapper>
        <DetailCard.item>
          <IPOInfo />
        </DetailCard.item>
        <DetailCard.item>
          <IPOTapMenu />
        </DetailCard.item>
        <DetailCard.item>
          <POInfo />
        </DetailCard.item>
        <DetailCard.item>
          <InvestCompetition />
        </DetailCard.item>
        <DetailCard.item>
          <IPOConfirm data={ipoConfirmDummy} />
        </DetailCard.item>
      </DetailCard.wrapper>
    </>
  );
};

export default Detail;
