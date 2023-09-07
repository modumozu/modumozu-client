"use client";

import colors from "@/styles/colors";
import { FC, ReactNode } from "react";
import styled from "styled-components";

interface DetailLayoutProps {
  children: ReactNode;
}

const DetailLayout: FC<DetailLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default DetailLayout;

const Layout = styled.div`
  box-shadow: 0px -8px 16px 0px rgba(192, 192, 192, 0.08);
  background-color: ${colors.WHITE};
  border-radius: 24px 24px 0px 0px;
`;
