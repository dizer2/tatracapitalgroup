import { Industry } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constant";


export const getAllIndustries = async (lang: string): Promise<Industry[]> => {
	const { data } = await axiosInstance.get<Industry[]>(`${ApiRoutes.INDUSTRIES_API}?lang=${lang}`)

	return data;
}