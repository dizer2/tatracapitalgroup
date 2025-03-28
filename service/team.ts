import { Team, TeamSection } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constant";


export const getAllTeamMember = async (lang: string): Promise<Team[]> => {
	const { data } = await axiosInstance.get<Team[]>(`${ApiRoutes.TEAM_API}?lang=${lang}`)

	return data;
}

export const createTeamMember = async (
  name: string,
  position: string,
  description: string,
  image: string | undefined,
  lang: string
): Promise<Team> => {
  const { data } = await axiosInstance.post<Team>(ApiRoutes.TEAM_ADMIN_MEMBER_API, {
    name,
    image,
    lang,
    position,
    description
  });
  return data;
};

export const deleteTeamMember = async (id: string, lang: string): Promise<Team> => {
	const { data } = await axiosInstance.delete<Team>(`${ApiRoutes.TEAM_ADMIN_MEMBER_API}?lang=${lang}`, {
		data: { id }
	})

	return data;
}


export const getTeamSection = async (lang: string): Promise<TeamSection[]> => {
	const { data } = await axiosInstance.get<TeamSection[]>(`${ApiRoutes.TEAM_SECTION_API}?lang=${lang}`)

	return data;
}

export const getIdTeamSection = async (lang: string, updatedTitle: string, cardPosition: string, cardButtonText: string, cardNormalButtonText: string, cardButtonCloseText: string, newImage: string | undefined): Promise<TeamSection> => {
	const { data } = await axiosInstance.put<TeamSection>(`${ApiRoutes.TEAM_ADMIN_SECTION_API}?lang=${lang}`, {
		updatedTitle, cardPosition, cardButtonText, cardNormalButtonText, cardButtonCloseText, newImage
	})

	return data;
}

export const getIdTeamMember = async (id:string, newName: string, newPosition: string, newDescription: string, newImage: string | undefined, lang: string): Promise<Team> => {
	const { data } = await axiosInstance.put<Team>(`${ApiRoutes.TEAM_ADMIN_MEMBER_API}?lang=${lang}`, {
		id, newName, newPosition, newDescription, newImage
	})

	return data;
}