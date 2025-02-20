import { MainInfo } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constant";

export const mainInfo = async (lang: string): Promise<MainInfo[]> => {
  const { data } = await axiosInstance.get<MainInfo[]>(`${ApiRoutes.MAIN_API}?lang=${lang}`);
  return data;
};

export const putMainInfo = async (
  lang: string,
  updatedTitle: string,
  updateImage: string,
  updatePhone: string,
  updateEmail: string,
  socialLinks: { link: string; icon: string }[]
) => {
  const { data } = await axiosInstance.put(`${ApiRoutes.MAIN_ADMIN_API}?lang=${lang}`, {
    updatedTitle,
    updateImage,
    updatePhone,
    updateEmail,
    socialLinks,
  });
  return data;
};
