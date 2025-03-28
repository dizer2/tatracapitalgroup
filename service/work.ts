import { WorkPostSection, WorkPost } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constant'

export const getAllWorkPost = async (lang: string): Promise<WorkPost[]> => {
	const { data } = await axiosInstance.get<WorkPost[]>(
		`${ApiRoutes.WORK_API}?lang=${lang}`
	)

	return data
}

export const getWorkById = async (
	lang: string,
	id: string
): Promise<WorkPost[]> => {
	const { data } = await axiosInstance.get<WorkPost[]>(
		`${ApiRoutes.WORK_ID_API}?lang=${lang}&id=${id}`
	)
	return data
}

export const getAllWorkSection = async (
	lang: string
): Promise<WorkPostSection[]> => {
	const { data } = await axiosInstance.get<WorkPostSection[]>(
		`${ApiRoutes.WORK_SECTION_API}?lang=${lang}`
	)

	return data
}

export const getAdminWork = async (
	lang: string,
	id: string,
	newTitle: string | undefined,
	newDescription: string | undefined,
	newWorkType: string | undefined,
	newLocation: string | undefined,
	newMoney: string | undefined,
	newTitle2: string | undefined,
	newDescription2: string | undefined,
	newTitle3: string | undefined,
	newTitle3Labels: string[] | undefined,
	newTitle4: string | undefined,
	newTitle4Labels: string[] | undefined
): Promise<WorkPost[]> => {
	const { data } = await axiosInstance.put<WorkPost[]>(
		`${ApiRoutes.WORK_ADMIN_API}?lang=${lang}`,
		{
			id,
			newTitle,
			newDescription,
			newWorkType,
			newLocation,
			newMoney,
			newTitle2,
			newDescription2,
			newTitle3,
			newTitle3Labels,
			newTitle4,
			newTitle4Labels
		}
	)

	return data
}


export const createWorkPost = async (
	lang: string,
	title: string,
  miniDescription: string | undefined,
  workType: string | undefined,
  location: string | undefined,
  money: string | undefined,
  title2: string | undefined,
  description2: string | undefined,
  title3: string | undefined,
  title3Labels: string[] | undefined,
  title4: string | undefined,
  title4Labels: string[] | undefined
	
): Promise<WorkPost> => {
	const { data } = await axiosInstance.post<WorkPost>(ApiRoutes.WORK_ADMIN_API, {
		lang,
		title,
		miniDescription,
		workType,
		location,
		money,
		title2,
		description2,
		title3,
		title3Labels,
		title4,
		title4Labels
	});
	return data;
};

export const delateWorkPost = async (id: string, lang: string): Promise<WorkPost> => {
	const { data } = await axiosInstance.delete<WorkPost>(`${ApiRoutes.WORK_ADMIN_API}?lang=${lang}`, {
		data: { id }
	})

	return data;
}


export const getWorkSectionById = async (	lang: string,
	title: string,
	description: string,
	buttonCardText: string,
	buttonApplyText: string, ): Promise<WorkPostSection> => {
	const { data } = await axiosInstance.put<WorkPostSection>(`${ApiRoutes.WORK_ADMIN_SECTION_API}?lang=${lang}`, {
		title,
		description,
		buttonCardText,
		buttonApplyText
	})

	return data;
}