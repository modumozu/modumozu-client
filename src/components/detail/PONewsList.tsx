"use client";

import { FC } from "react";
import styled from "styled-components";
import PONews from "./PONews";
import { News, NewsResponse } from "@/dto/news";

interface PONewsListProps {
  newsList: News[];
}

const PONewsList: FC<PONewsListProps> = ({ newsList }) => {
  return (
    <PONewsListWrap>
      {newsList.map((news) => {
        return <PONews key={news.id} {...news} />;
      })}
    </PONewsListWrap>
  );
};

export default PONewsList;

const PONewsListWrap = styled.div`
  padding-top: 16px;
`;
