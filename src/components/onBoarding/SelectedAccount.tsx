"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import BankIcon from "@/svg/BankIcon";
import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { InvestmentBankCard } from "../common/InvestmentBankCardList";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import { getBankName } from "@/util/getBankName";

interface SelectedAccountProps {
  selectedAccount: number[];
}

const SelectedAccount: FC<SelectedAccountProps> = ({ selectedAccount }) => {
  return (
    <SelectedAccountListWrap>
      <SelectedAccountListTitle>
        <BankIcon color={colors.ON.PRIMARY} />
        <span>내 증권 계좌</span>
      </SelectedAccountListTitle>
      <SelectedAccountList>
        {selectedAccount.map((id) => {
          return (
            <InvestmentBankCard key={id} $active={true}>
              <Image src={getInvestmentBankLogo(id)} width="60" height="60" alt={String(id)} />
              {getBankName(id)}
            </InvestmentBankCard>
          );
        })}
      </SelectedAccountList>
    </SelectedAccountListWrap>
  );
};

export default SelectedAccount;

const SelectedAccountListWrap = styled.div`
  flex: 1;
  padding: 16px 16px 36px 16px;
`;
const SelectedAccountListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  color: ${colors.FONT.PRIMARY};
  ${getFonts("H5_SEMIBOLD")}
`;
const SelectedAccountList = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px 16px 36px 16px;
`;
