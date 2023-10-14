"use client";

import { usePathname } from "next/navigation";
import DetailCard from "./DetailCard";
import DetailHeader from "./DetailHeader";
import DetailTitle from "./DetailTitle";
import IPOConfirm, { IPOComfirmTableData } from "./IPOConfirm";
import IPOInfo from "./IPOInfo";
import IPOTapMenu from "./IPOTapMenu";
import InvestCompetition from "./InvestCompetition";
import POInfo from "./POInfo";
import { useQuery } from "@tanstack/react-query";
import { getDetailById } from "@/api/ipo";
import queryKeys from "@/constants/queryKeys";

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

const DetailPage = () => {
  const id = usePathname().split("/")[2];
  console.log("id", id);
  const data = useQuery(queryKeys.DETAIL, () => {
    getDetailById(id);
  });
  console.log(data);

  return (
    <div>
      <DetailHeader />
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
    </div>
  );
};

export default DetailPage;
