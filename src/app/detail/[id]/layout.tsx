import PageHeader from "@/components/common/PageHeader";
import { FC, ReactNode } from "react";

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return (
    <div>
      <PageHeader />
      {children}
    </div>
  );
};

export default DetailLayout;
