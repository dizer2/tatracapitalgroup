import { ApiRoutes } from "./constant"
import { axiosInstance } from "./instance"


export const sendEmail = async (password: string): Promise<void> => {
	const { data } = await axiosInstance.post(`${ApiRoutes.EMAIL_API}?password=${password}`)
	return data
}