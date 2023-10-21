"use client";

import { useState } from "react";
import TapMenu from "../common/TapMenu";
import POPlan from "./POPlan";
import PONewsList from "./PONewsList";

const IPOTapMenu = () => {
  const [state, setState] = useState(true);

  const handleChangeTapMenu = (value: boolean) => {
    setState(value);
  };

  return (
    <div>
      <TapMenu
        value={state}
        options={[
          { label: "공모주 정보", value: true },
          { label: "관련 뉴스", value: false },
        ]}
        onChange={handleChangeTapMenu}
      />
      {state ? (
        <POPlan />
      ) : (
        <PONewsList
          newsList={[
            {
              title:
                "틸론, VDI 공공 조달시장 1위...시·군·구청 업무환경 혁신 도모 - 틸론, VDI 공공 조달시장 1위...시·군·구청 업무환경 혁신 ...",
              site: "헬로티",
              link: "",
              date: "1시간 전",
            },
          ]}
        />
      )}
    </div>
  );
};

export default IPOTapMenu;
