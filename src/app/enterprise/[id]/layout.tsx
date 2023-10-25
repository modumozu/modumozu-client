import PageHeader from "@/components/common/PageHeader";
import { FC, ReactNode } from "react";

interface EnterPriseLayoutProps {
  children: ReactNode;
}

const EnterPriseLayout: FC<EnterPriseLayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <PageHeader />
      {children}
    </div>
  );
};

export default EnterPriseLayout;
