"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CheckBackground from "@/svg/CheckBackground";
import IngIcon from "@/svg/IngIcon";
import styled from "styled-components";
import dayjs from "dayjs";

const processes: POPlanProcessList = [
  { label: "수요 예측일", date: "2023-09-20" },
  { label: "청약일", date: ["2023-09-23", "2023-10-03"] },
  { label: "환불일", date: "2023-10-04" },
  { label: "상장일", date: "2023-10-15" },
];

export type POPlanProcessList = POPlanProcessObject[];
interface POPlanProcessObject {
  label: string;
  date: string | [string, string];
}

const POPlan = () => {
  const renderProcessElement = () => {};
  const renderProcess = () => {
    const today = dayjs();

    return processes.map((process, index) => {
      const { date, label } = process;
      if (typeof date === "string") {
        if (index === 0) {
          return (
            <POPlanProcessItem key={label}>
              <CheckBackground />
              <div>
                <div>label</div>
                <div>date</div>
              </div>
            </POPlanProcessItem>
          );
        }
        return (
          <POPlanProcessItem key={label}>
            <CheckBackground />
            <div>
              <div>label</div>
              <div>date</div>
            </div>
          </POPlanProcessItem>
        );
      } else {
        const [start, end] = date;
        return (
          <POPlanProcessItem key={label}>
            <CheckBackground />
            <div>
              <div>label</div>
              <div>date</div>
            </div>
          </POPlanProcessItem>
        );
      }
    });
  };

  renderProcess();

  return (
    <POPlanWrap>
      <POPlanTitle>공모 일정</POPlanTitle>
      <POPlanProcessList>{renderProcess()}</POPlanProcessList>
    </POPlanWrap>
  );
};

export default POPlan;

const POPlanWrap = styled.div`
  padding: 32px 16px;
`;

const POPlanTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;

const POPlanProcessList = styled.ul`
  margin-top: 24px;
`;

const POPlanProcessItem = styled.li`
  display: flex;
  align-items: center;
`;

const BarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bar = styled.div`
  width: 2px;
  height: 24px;
  background-color: ${colors.BLUE[5]};
`;
const DisabledBar = styled.div`
  width: 2px;
  height: 24px;
  background-color: ${colors.GRAY[2]};
`;
