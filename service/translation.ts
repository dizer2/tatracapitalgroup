import { ApiRoutes } from "./constant";
import { axiosInstance } from "./instance";
import { Translation } from "@/types/translation"; 

export const getAllData = async (lang: string): Promise<Translation[]> => {
  const { data } = await axiosInstance.get<Translation[]>(`${ApiRoutes.TRANSLATION_API}?lang=${lang}`);
  return data;
};
