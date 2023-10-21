"use client";

import { FC } from "react";
import styled from "styled-components";
import PONews from "./PONews";

export interface News {
  title: string;
  link: string;
  date: string;
  image?: string;
  site: string;
}

interface PONewsListProps {
  newsList: News[];
}

const PONewsList: FC<PONewsListProps> = ({ newsList }) => {
  const handleNewsClick = (link: string) => {};

  return (
    <PONewsListWrap>
      {newsList.map((news) => {
        return (
          <PONews
            key={news.title}
            onClick={() => handleNewsClick(news.link)}
            site={news.site}
            title={news.title}
            date={news.date}
          />
        );
      })}
    </PONewsListWrap>
  );
};

export default PONewsList;

const PONewsListWrap = styled.div`
  padding-top: 16px;
`;
