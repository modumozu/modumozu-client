"use client";

import DetailCard from "@/components/detail/DetailCard";
import DetailHeader from "@/components/detail/DetailHeader";
import DetailTitle from "@/components/detail/DetailTitle";
import IPOConfirm from "@/components/detail/IPOConfirm";
import IPOInfo from "@/components/detail/IPOInfo";
import IPOTapMenu from "@/components/detail/IPOTapMenu";
import POInfo from "@/components/detail/POInfo";

const Detail = () => {
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
          <IPOConfirm />
        </DetailCard.item>
      </DetailCard.wrapper>
    </div>
  );
};

export default Detail;
