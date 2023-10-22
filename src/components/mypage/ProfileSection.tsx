"use cliect";

import { getMemberInfo } from "@/api/member";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import KakaoIcon from "@/svg/KakaoIcon";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";

const ProfileSection = () => {
  const { data } = useQuery({ queryKey: ["getMemberInfo"], queryFn: getMemberInfo });

  return (
    <ProfileWrapper>
      <h2>{data?.name}님 안녕하세요!</h2>
      <KakaoInfo>
        <KakaoIcon />
        <p>카카오톡 로그인 {data?.email}</p>
      </KakaoInfo>
    </ProfileWrapper>
  );
};

export default ProfileSection;

const ProfileWrapper = styled.section`
  background-color: ${colors.WHITE};
  padding-top: 24px;
  padding-inline: 16px;

  h2 {
    ${getFonts("H2_SEMIBOLD")}
    margin-bottom: 6px;
  }
`;

const KakaoInfo = styled.div`
  display: flex;

  svg {
    margin-right: 7px;
  }

  p {
    ${getFonts("H5_REGULAR")}
    color: ${colors.FONT_LIGHT.SECONDARY}
  }
`;
