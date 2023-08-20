"use client";

import { getFonts } from "@/styles/fonts";
import styled from "styled-components";

const Test = () => {
  return (
    <div>
      <TestD>안녕하세요?</TestD>
      <TestE>안녕하세요?</TestE>
      <TestF>안녕하세요?</TestF>
    </div>
  );
};
export default Test;

const TestD = styled.div`
  ${getFonts("H2_BOLD")};
`;

const TestE = styled.div`
  ${getFonts("H2_SEMIBOLD")};
`;

const TestF = styled.div`
  ${getFonts("H2_REGULAR")};
`;
