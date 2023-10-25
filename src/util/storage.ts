import StorageKeys from "@/constants/storage";

export const getStorage = (key: keyof typeof StorageKeys) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(StorageKeys[key]);
  }
};
export const setStorage = (key: keyof typeof StorageKeys, value: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(StorageKeys[key], value);
  }
};
export const removeStorage = (key: keyof typeof StorageKeys) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(StorageKeys[key]);
  }
};
export const removeAllTokens = () => {
  removeStorage("ACCESS_TOKEN");
  removeStorage("REFRESH_TOKEN");
};
