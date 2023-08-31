import { ReactNode } from "react";
import { FC } from "react";
import HeartIcon from "@/svg/HeartIcon";
import styled from "styled-components";
import colors from "@/styles/colors";
import MoneyIcon from "@/svg/MoneyIcon";
import BankIcon from "@/svg/BankIcon";
import { getFonts } from "@/styles/fonts";
import DangerIcon from "@/svg/DangerIcon";
import Button from "../common/Button";

interface UpcomingStockProps {
  children: ReactNode;
}
interface UpcomingStockStatusProps {
  status: boolean;
  children: string;
}
type Subscription = "disable" | "able" | "limit";
interface UpcomingStockCardProps {
  category: string;
  title: string;
  children?: ReactNode;
  price: [number, number];
  account: string;
  love: boolean;
  subscription?: Subscription;
  date?: string;
  onClick?: () => void;
}
interface UpcomingStockSubscriptionProps {
  subscription: Subscription;
  onClick: () => void;
  date: string;
}

const UpcomingStockMain: FC<UpcomingStockProps> = ({ children }) => {
  return <article>{children}</article>;
};
const UpcomingStockStatus: FC<UpcomingStockStatusProps> = ({ status, children }) => {
  if (status) {
    return (
      <UpcomingStockStatusWrap>
        <Dot />
        <UpcomingStockStatusLabel color={colors.FONT.ACCENT}> 진행 중 </UpcomingStockStatusLabel>
        <span>{`마감일 ${children}`}</span>
      </UpcomingStockStatusWrap>
    );
  }
  return (
    <UpcomingStockStatusWrap>
      <UpcomingStockStatusLabel color={colors.FONT_LIGHT.TERIARY}>D - 5 </UpcomingStockStatusLabel>
      <span>{`청약일 ${children}`}</span>
    </UpcomingStockStatusWrap>
  );
};
const UpcomingStockCard: FC<UpcomingStockCardProps> = (props) => {
  const { category, title, price, love, account, subscription, onClick = () => {}, date = "" } = props;

  return (
    <UpcomingStockCardWarp>
      <UpcomingStockCardTop>
        <div>
          <UpcomingStockCardTopCategory>{category}</UpcomingStockCardTopCategory>
          <UpcomingStockCardTopTitle>{title}</UpcomingStockCardTopTitle>
        </div>
        <div>
          <HeartIcon color={colors.ON.PRIMARY} />
        </div>
      </UpcomingStockCardTop>
      <UpcomingStockCardInfos>
        <UpcomingStockCardInfoItem>
          <MoneyIcon />
          <span>{`${price[0]} ~ ${price[1]}`}</span>
        </UpcomingStockCardInfoItem>
        <UpcomingStockCardInfoItem>
          <BankIcon />
          <UpcomingStockCardInfoAccountList>
            <UpcomingStockCardInfoAccountListItem>
              <span>{account}</span>
            </UpcomingStockCardInfoAccountListItem>
            <UpcomingStockCardInfoAccountListItem>
              <span>{account}</span>
            </UpcomingStockCardInfoAccountListItem>
          </UpcomingStockCardInfoAccountList>
        </UpcomingStockCardInfoItem>
      </UpcomingStockCardInfos>
      {!!subscription && <UpcomingStockSubscription subscription={subscription} onClick={onClick} date={date} />}
    </UpcomingStockCardWarp>
  );
};
const UpcomingStockSubscription: FC<UpcomingStockSubscriptionProps> = (props) => {
  const { subscription, date = "", onClick = () => {} } = props;
  switch (subscription) {
    case "able":
      return (
        <UpcomingStockFooterWrap>
          <span>{`${date} 까지 계좌를 개설해주세요.`}</span>
          <Button shape="round" size="small">
            계좌 개설
          </Button>
        </UpcomingStockFooterWrap>
      );
    case "disable":
      return (
        <UpcomingStockFooterWrap>
          <DangerIcon />
          <span>청약불가</span>
          <span>계좌 개설 가능 기간이 지났어요.</span>
        </UpcomingStockFooterWrap>
      );
    case "limit":
      return (
        <UpcomingStockFooterWrap>
          <span>신규 계좌 개설이 제한되었습니다.</span>
          <Button color="secondary" shape="round" size="small">
            계좌 개설
          </Button>
        </UpcomingStockFooterWrap>
      );
    default:
      return null;
  }
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
  margin-right: 4px;
`;

const UpcomingStockStatusLabel = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  margin-right: 6px;
`;

const UpcomingStockCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UpcomingStockCardTopCategory = styled.span`
  color: ${colors.FONT.PRIMARY};
`;
const UpcomingStockCardTopTitle = styled.strong`
  display: block;
  margin-top: 3px;
`;
const UpcomingStockCardInfos = styled.ul`
  margin-top: 20px;
`;
const UpcomingStockCardInfoItem = styled.li`
  display: flex;
  gap: 0 4px;
  & + & {
    margin-top: 7px;
  }
`;
const UpcomingStockCardInfoAccountList = styled.ul``;
const UpcomingStockCardInfoAccountListItem = styled.li`
  & + & {
    margin-top: 3px;
  }
`;
const UpcomingStockCardWarp = styled.div`
  margin-top: 12px;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 1px 8px 0px rgba(27, 29, 31, 0.08);
`;
const UpcomingStockFooterWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid ${colors.GRAY[2]};
`;

export default Object.assign(UpcomingStockMain, {
  status: UpcomingStockStatus,
  cardWrap: UpcomingStockCard,
});
