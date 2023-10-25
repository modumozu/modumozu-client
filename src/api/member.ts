import { MemberInfoType } from "@/types";
import instance from "./common";

const url = "/api/member/v1";

/**
 * 멤버 정보 조회
 */
export const getMemberInfo = async (): Promise<MemberInfoType> => {
  const { data } = await instance.get(url + "/member/me");
  return data.data;
};

/**
 * 계정 탈퇴
 */
export const deleteMember = async () => {
  const { data } = await instance.delete(url + "/member/me");
  return data.data;
};
