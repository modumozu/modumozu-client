"use client";

import styled from "styled-components";

const IPOInfo = () => {
  return (
    <IPOInfoWrap>
      <IPOInfoTable>
        <tbody>
          <IPOInfoTr>
            <IPOInfoTd>주관사</IPOInfoTd>
            <IPOInfoTd>주관사</IPOInfoTd>
          </IPOInfoTr>
          <IPOInfoTr>
            <IPOInfoTd>공모가</IPOInfoTd>
            <IPOInfoTd>공모가</IPOInfoTd>
          </IPOInfoTr>
          <IPOInfoTr>
            <IPOInfoTd>청약증거금율</IPOInfoTd>
            <IPOInfoTd>청약증거금율</IPOInfoTd>
          </IPOInfoTr>
          <IPOInfoTr>
            <IPOInfoTd>기관투자자 경쟁률</IPOInfoTd>
            <IPOInfoTd>기관투자자 경쟁률</IPOInfoTd>
          </IPOInfoTr>
          <IPOInfoTr>
            <IPOInfoTd>의무보유 확약률</IPOInfoTd>
            <IPOInfoTd>의무보유 확약률</IPOInfoTd>
          </IPOInfoTr>
        </tbody>
      </IPOInfoTable>
    </IPOInfoWrap>
  );
};

export default IPOInfo;

const IPOInfoWrap = styled.div`
  padding: 40px 16px 32px 16px;
`;

const IPOInfoTable = styled.table`
  width: 100%;
`;
const IPOInfoTr = styled.tr`
  display: flex;
  gap: 0 24px;
`;
const IPOInfoTd = styled.td``;
