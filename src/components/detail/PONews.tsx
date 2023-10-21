import colors from "@/styles/colors";
import { FC } from "react";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import { News } from "./PONewsList";

interface PONewsProps extends Omit<News, "link"> {
  onClick: () => void;
}

const PONews: FC<PONewsProps> = ({ onClick, site, image, title, date }) => {
  return (
    <PONewsItem onClick={onClick}>
      <PONewsItemTextWrap>
        <PONewsItemTitle>{title}</PONewsItemTitle>
        <PONewsItemDescription>
          {date} &#183; {site}
        </PONewsItemDescription>
      </PONewsItemTextWrap>
      {image && (
        <PONewsItemImageWrap>
          <image>{image}</image>
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
