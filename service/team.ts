import { Team } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constant";


export const getAllTeamMember = async (lang: string): Promise<Team[]> => {
	const { data } = await axiosInstance.get<Team[]>(`${ApiRoutes.TEAM_API}?lang=${lang}`)

	return data;
}

// export const getIndustryById = async (id: string, lang: string, title: string, description: string, image: string): Promise<Industry> => {
// 	const { data } = await axiosInstance.put<Industry>(`${ApiRoutes.INDUSTRIES_ADMIN_API}?lang=${lang}`, {
// 		title,
// 		description,
// 		image,
// 		id
// 	})

// 	return data;
// }