"use client";

import { FC, useEffect } from "react";
import UpcomingStockSection from "@/components/home/UpcomingStockSection";
import EndedStockSection from "@/components/home/EndedStockSection";
import { getIPOList } from "@/api/ipo";

const HomePage: FC = () => {
  useEffect(() => {
    getIPOList();
  }, []);
  return (
    <>
      <UpcomingStockSection />
      <EndedStockSection />
    </>
  );
};

export default HomePage;
