import colors from "@/styles/colors";
import { FC } from "react";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import { News } from "@/dto/news";

const PONews: FC<News> = ({ press, publishedAt, source, title, redirectUrl }) => {
  return (
    <PONewsItem>
      <PONewsItemTextWrap>
        <a href={redirectUrl} target="_blank">
          <PONewsItemTitle>{title}</PONewsItemTitle>
        </a>
        <PONewsItemDescription>
          {publishedAt} &#183; {press}
        </PONewsItemDescription>
      </PONewsItemTextWrap>
      {source !== "" && (
        <PONewsItemImageWrap>
          <image>{source}</image>
        </PONewsItemImageWrap>
      )}
    </PONewsItem>
  );
};

export default PONews;

const PONewsItem = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 0 20px;
  height: 100px;
  padding: 16px;
`;

const PONewsItemTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PONewsItemTitle = styled.h4`
  color: ${colors.FONT_LIGHT.PRIMARY};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${getFonts("H5_SEMIBOLD")}
`;
const PONewsItemDescription = styled.div`
  color: ${colors.FONT_LIGHT.TERIARY};
  ${getFonts("BUTTON2_REGULAR")};
`;
const PONewsItemImageWrap = styled.div`
  flex-shrink: 0;
  width: 68px;
  height: 68px;
  border-radius: 16px;
  background-color: lightcoral;
`;
