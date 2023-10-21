import instance from "./common";

const url = "/api/ipo/v1";

/**
 * IPO 상세 조회
 */
export const getDetailById = async (id: string) => {
  console.log("dlffhdha");
  const data = await instance.get(`${url}/${id}`);
  console.log("data", data);
  return [];
};
/**
 * IPO home 조회
 */
export const getIPOList = async () => {
  const data = await instance.get(`${url}/ipo`);
  console.log("datasms?", data);
};
