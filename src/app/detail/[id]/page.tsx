"use client";

import DetailCard from "@/components/detail/DetailCard";
import DetailHeader from "@/components/detail/DetailHeader";
import DetailTitle from "@/components/detail/DetailTitle";

const Detail = () => {
  return (
    <div>
      <DetailHeader />
      <DetailTitle date="18" name="큐리옥스바이오시스템즈" category="내구 소비재 및 의류" />
      <DetailCard.wrapper>
        <DetailCard.item>dd</DetailCard.item>
        <DetailCard.item>dd</DetailCard.item>
        <DetailCard.item>dd</DetailCard.item>
      </DetailCard.wrapper>
    </div>
  );
};

export default Detail;
