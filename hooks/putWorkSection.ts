'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const usePutWorkSection = () => {
	const [loading, setLoading] = React.useState(false)

	const updateWorkSection = async (
		lang: string,
		title: string,
		description: string,
		buttonCardText: string,
		buttonApplyText: string,
	
	) => {
		setLoading(true)
		try {
			const data = await Api.work.getWorkSectionById(
				lang,
				title,
				description,
				buttonCardText,
				buttonApplyText
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

	return { updateWorkSection, loading }
}
