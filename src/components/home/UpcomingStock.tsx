import React, { ReactNode } from "react";
import { FC } from "react";
import HeartIcon from "@/svg/HeartIcon";
import styled from "styled-components";
import colors from "@/styles/colors";
import MoneyIcon from "@/svg/MoneyIcon";
import BankIcon from "@/svg/BankIcon";
import { getFonts } from "@/styles/fonts";

interface UpcomingStockProps {
  children: ReactNode;
}

interface UpcomingStockStatusProps {
  status: boolean;
  children: string;
}

interface UpcomingStockCardProps {
  category: string;
  title: string;
  children?: ReactNode;
  price: [number, number];
  account: string;
  love: boolean;
}
const UpcomingStockMain: FC<UpcomingStockProps> = ({ children }) => {
  return <div>{children}</div>;
};
const UpcomingStockStatus: FC<UpcomingStockStatusProps> = ({ status, children }) => {
  if (status) {
    return (
      <UpcomingStockStatusWrap>
        <Dot />
        <span> 진행 중 </span>
        <span>{`마감일 ${children}`}</span>
      </UpcomingStockStatusWrap>
    );
  }
  return (
    <UpcomingStockStatusWrap>
      <span>D - 5 </span>
      <span>{`청약일 ${children}`}</span>
    </UpcomingStockStatusWrap>
  );
};
const UpcomingStockCard: FC<UpcomingStockCardProps> = ({ category, title, price, love, account }) => {
  return (
    <UpcomingStockCardWarp>
      <div>
        <div>
          <div>{category}</div>
          <div>{title}</div>
        </div>
        <div>
          <HeartIcon color={colors.ON.PRIMARY} />
        </div>
      </div>
      <div>
        <MoneyIcon />
        {`${price[0]} ${price[1]}`}
      </div>
      <BankIcon />
      <div>{account}</div>
    </UpcomingStockCardWarp>
  );
};
const UpcomingStockStatusWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${colors.FONT.ACCENT};
`;

const UpcomingStockTop = styled.div`
  display: flex;
`;
const UpcomingStockCardWarp = styled.div`
  margin-top: 12px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 1px 8px 0px rgba(27, 29, 31, 0.08);
`;

export default Object.assign(UpcomingStockMain, {
  status: UpcomingStockStatus,
  card: UpcomingStockCard,
});
