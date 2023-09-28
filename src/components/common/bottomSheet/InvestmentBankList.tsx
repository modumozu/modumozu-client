import { FC } from "react";
import Button from "../Button";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import Image from "next/image";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import { BottomSheetTitle } from "./BottomSheetTitle";

interface InvestmentBankListProps {
  /**
   * 공모주명
   */
  stockName: string;
  /**
   * 주간사 리스트
   */
  investmentBanks: string[];
}

const InvestmentBankList: FC<InvestmentBankListProps> = (props) => {
  const { stockName, investmentBanks } = props;
  const shortStockName = stockName.length > 8 ? stockName.slice(0, 8) + "..." : stockName;

  return (
    <>
      <BottomSheetTitle>
        <h2>
          <span>{shortStockName}</span>의 주간사
        </h2>
        <p>{investmentBanks.length}개</p>
      </BottomSheetTitle>
      <InvestmentBankCardList>
        {investmentBanks.map((name) => (
          <InvestmentBankCard key={name}>
            <Image src={getInvestmentBankLogo(name)} width="60" height="60" alt={name} />
            {name}
          </InvestmentBankCard>
        ))}
      </InvestmentBankCardList>
      <Button color="secondary" fill={false} width="100%" font="BUTTON1_REGULAR">
        닫기
      </Button>
    </>
  );
};

const InvestmentBankCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`;

const InvestmentBankCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${colors.GRAY_TRANSPARENT_SCALE[2]};
  border-radius: 16px;
  ${getFonts("CAPTION1_REGULAR")}
  color:${colors.FONT_LIGHT.SECONDARY}
`;

export default InvestmentBankList;
