'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const useDeleateWorkPost = () => {
	const [loading, setLoading] = React.useState(false)

	const deleateWorkPost = async (
		id: string,
		lang: string,
	) => {
		setLoading(true)
		try {
			const data = await Api.work.delateWorkPost(
				id,
				lang,
			)
			return data
		} catch (error) {
			console.error('Error removing post:', error)
			throw error
		} finally {
			setLoading(false)
		}
	}

	return { deleateWorkPost, loading }
}
