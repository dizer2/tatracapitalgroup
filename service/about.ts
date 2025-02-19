import { AboutUs } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constant";


export const getAllAboutUsData = async (lang: string): Promise<AboutUs[]> => {
	const { data } = await axiosInstance.get<AboutUs[]>(`${ApiRoutes.ABOUT_API}?lang=${lang}`)

	return data;
}


export const getAboutById = async (lang:string, title1: string, description1: string, title2: string, description2: string, title3: string, description3: string ): Promise<AboutUs> => {
	const { data } = await axiosInstance.put<AboutUs>(`${ApiRoutes.ABOUT_ADMIN_API}?lang=${lang}`, {
		title1,
		description1,
		title2,
		description2,
		title3,
		description3
	})

	return data;
}