"use client";

import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import { InvestmentBankCard } from "../common/InvestmentBankCardList";
import Image from "next/image";
import { getBankName } from "@/util/getBankName";
import CircledCheckIcon from "@/svg/CircledCheckIcon";
import { FC, useState } from "react";
import styled from "styled-components";

interface AccountListProps {
  selectedAgent: boolean[];
  onChange: (id: number) => void;
}

const AccountList: FC<AccountListProps> = ({ onChange, selectedAgent }) => {
  //TODO: 계좌 관련된 로직, 컴포넌트 공통으로 쓸 수 있게 수정하는게 좋을듯
  const allInvestmentBanks = Array.from({ length: 23 }, (v, i) => i + 1);

  return (
    <AccountListWrapper>
      {allInvestmentBanks.map((id) => (
        <InvestmentBankCard key={id} $active={selectedAgent[id]} onClick={() => onChange(id)}>
          <Image src={getInvestmentBankLogo(id)} width="60" height="60" alt={String(id)} />
          {getBankName(id)}
          {selectedAgent[id] && <CircledCheckIcon />}
        </InvestmentBankCard>
      ))}
    </AccountListWrapper>
  );
};

export default AccountList;

const AccountListWrapper = styled.div`
  flex: 1;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px 16px 36px 16px;
`;
