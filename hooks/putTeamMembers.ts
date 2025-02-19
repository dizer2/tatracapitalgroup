'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const usePutTeamMembers = () => {
	const [loading, setLoading] = React.useState(false)

	const updateTeamMembers = async (
		id: string,
		newName: string,
		newPosition: string,
		newDescription: string,
		newImage: string | undefined,
		lang: string,
	) => {
		setLoading(true)
		try {
			const data = await Api.team.getIdTeamMember(
				id,
				newName,
				newPosition,
				newDescription,
				newImage,
				lang,
			)
			console.log('Updated industry:', data)
			return data
		} catch (error) {
			console.error('Error updating industry:', error)
			throw error
		} finally {
			setLoading(false)
		}
	}

	return { updateTeamMembers, loading }
}
