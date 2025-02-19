'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const usePutTeamSection = () => {
	const [loading, setLoading] = React.useState(false)

	const updatedTeamSection = async (
		lang: string,
		updatedTitle: string,
		cardPosition: string,
		cardButtonText: string,
		cardNormalButtonText: string,
		cardButtonCloseText: string,
		newImage: string | undefined
	) => {
		setLoading(true)
		try {
			const data = await Api.team.getIdTeamSection(
				lang,
        updatedTitle,
        cardPosition,
        cardButtonText,
        cardNormalButtonText,
        cardButtonCloseText,
        newImage
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

	return { updatedTeamSection, loading }
}
