'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const usePutAbout = () => {
	const [loading, setLoading] = React.useState(false)

	const updateAboutUs = async (
		lang: string,
		title1: string,
		description1: string,
		title2: string,
		description2: string,
		title3: string,
		description3: string,
		updateImage: string
	) => {
		setLoading(true)
		try {
			const data = await Api.about.getAboutById(
				lang,
				title1,
				description1,
				title2,
				description2,
				title3,
				description3,
				updateImage
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

	return { updateAboutUs, loading }
}
