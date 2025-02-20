'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const useDeleateTeamMember = () => {
	const [loading, setLoading] = React.useState(false)

	const deleateTeamMember = async (
		id: string,
		lang: string,
	) => {
		setLoading(true)
		try {
			const data = await Api.team.deleteTeamMember(
				id,
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

	return { deleateTeamMember, loading }
}
