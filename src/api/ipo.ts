import { EndedStockType, UpcomingStockType } from "@/types";
import api from "./common";
import { IPODetailResponse } from "@/dto/detail";
import { ApiResponse } from "./network";
import { NewsResponse } from "@/dto/news";

const url = "/api/ipo/v1";

/**
 * IPO 상세 조회
 */
export const getDetailById = async (id: string) => {
  const {
    data: { data },
  } = await api.get<ApiResponse<IPODetailResponse>>(`${url}/ipo/${id}`);

  return data;
};

/**
 * IPO 상세 news
 */
export const getDetailNewsById = async (id: string) => {
  const {
    data: { data },
  } = await api.get<ApiResponse<NewsResponse>>(`${url}/ipo/${id}/news`);

  return data.news;
};

/**
 * 관심 공모주 수정
 */
export const updateDetailPin = async (ipoId: number) => {
  await api.put(`${url}/ipo/pin`, { ipoId });
};

/**
 * 다가오는 공모주 조회
 */
export const fetchUpcomingStocks = async (): Promise<UpcomingStockType> => {
  const { data } = await api.get(url + "/ipo");
  return data.data;
};

/**
 * 종료된 공모주 조회
 */
export const fetchEndedStocks = async (): Promise<EndedStockType[]> => {
  const { data } = await api.get(url + "/closed-ipo");
  return data.data.ipos;
};
