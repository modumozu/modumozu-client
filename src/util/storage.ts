import StorageKeys from "@/constants/storage";

export const getStorage = (key: keyof typeof StorageKeys) => {
  if (typeof window === "object") {
    return localStorage.getItem(StorageKeys[key]);
  }
};
export const setStorage = (key: keyof typeof StorageKeys, value: any) => {
  localStorage.setItem(StorageKeys[key], value);
};
