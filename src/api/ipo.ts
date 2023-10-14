import instance from "./common";

const url = "/api/ipo/v1";

/**
 * IPO 상세 조회
 */
export const getDetailById = async (id: string) => {
  const data = await instance.get(`${url}/${id}`);
  console.log("data", data);
};
/**
 * IPO home 조회
 */
export const getIPOList = async () => {
  const data = await instance.get(`${url}/ipo`);
  console.log("data", data);
};
