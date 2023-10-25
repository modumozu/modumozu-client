"use client";

import { getDetailById, getDetailNewsById } from "@/api/ipo";
import DetailBottomButton from "@/components/detail/DetailBottomButton";
import DetailCard from "@/components/detail/DetailCard";
import DetailHeader from "@/components/detail/DetailHeader";
import DetailTitle from "@/components/detail/DetailTitle";
import IPOConfirm from "@/components/detail/IPOConfirm";
import IPOInfo from "@/components/detail/IPOInfo";
import IPOTapMenu from "@/components/detail/IPOTapMenu";
import InvestCompetition from "@/components/detail/InvestCompetition";
import POInfo from "@/components/detail/POInfo";
import queryKeys from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useState } from "react";

interface DetailProps {
  params: { id: string };
}

const Detail: NextPage<DetailProps> = ({ params }) => {
  const id = params.id;
  const [tabState, setTabState] = useState(true);

  const { data, isLoading } = useQuery(queryKeys.DETAIL, () => {
    return getDetailById(id);
  });
  const { data: news = [], isLoading: isNewsLoading } = useQuery(queryKeys.NEWS, () => {
    return getDetailNewsById(id);
  });
  const buildMandatoryHoldingCommitmentRate = () => {
    if (data) {
      return [
        { label: "15일", value: data.subscriptionAmountByPeriod15Days },
        { label: "1개월", value: data.subscriptionAmountByPeriod30Days },
        { label: "3개월", value: data.subscriptionAmountByPeriod90Days },
        { label: "6개월", value: data.subscriptionAmountByPeriod180Days },
        { label: "미확약", value: data.subscriptionAmountByPeriodByNone },
        { label: "합계", value: data.subscriptionAmountByTotal },
        { label: "총 수량 대비 비율 (%)", value: `${data.mandatoryHoldingCommitmentRate}%` },
      ];
    }
    return [];
  };

  if (data === undefined || isLoading) {
    return null;
  }
  return (
    <>
      <DetailHeader id={data.id} pinned={data.pinned} />
      <DetailTitle
        name={data.name}
        category={data.category}
        status={data.status}
        offerBeginAt={data.offerBeginAt}
        offerEndAt={data.offerEndAt}
        listingAt={data.listingAt}
      />
      <DetailCard.wrapper>
        <DetailCard.item>
          <IPOInfo
            nonRemainAgents={data.nonRemainAgents}
            remainAgents={data.remainAgents}
            publicOfferingTotalPrice={data.publicOfferingTotalPrice}
            subscriptionDepositRate={data.subscriptionDepositRate}
            investorCompetitionRate={data.investorCompetitionRate}
            mandatoryHoldingCommitmentRate={data.mandatoryHoldingCommitmentRate}
            resetTabState={() => setTabState(true)}
          />
        </DetailCard.item>
        <DetailCard.item>
          <IPOTapMenu
            news={news}
            demandForecastBeginAt={data.demandForecastBeginAt}
            refundAt={data.refundAt}
            listingAt={data.listingAt}
            offerBeginAt={data.offerBeginAt}
            offerEndAt={data.offerEndAt}
            state={tabState}
            setState={setTabState}
          />
        </DetailCard.item>
        {tabState && (
          <>
            <DetailCard.item>
              <POInfo
                fixedOfferPrice={data.fixedOfferPrice || data.minDesiredOfferPrice}
                publicOfferingTotalPrice={data.publicOfferingTotalPrice}
                publicOfferingAmount={data.publicOfferingAmount}
                subscriptionDepositRate={data.subscriptionDepositRate}
              />
            </DetailCard.item>
            <DetailCard.item>
              <InvestCompetition investorCompetitionRate={data.investorCompetitionRate} />
            </DetailCard.item>
            <DetailCard.item>
              <IPOConfirm
                mandatoryHoldingCommitmentRate={data.mandatoryHoldingCommitmentRate}
                data={buildMandatoryHoldingCommitmentRate()}
              />
              <DetailBottomButton
                proposal={data.proposal}
                offerBeginAt={data.offerBeginAt}
                offerEndAt={data.offerEndAt}
              />
            </DetailCard.item>
          </>
        )}
      </DetailCard.wrapper>
    </>
  );
};

export default Detail;
