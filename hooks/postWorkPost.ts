// /hooks/postWorkPost.ts
'use client'
import React from 'react'
import { Api } from '@/service/api-client'
import { WorkPost } from '@prisma/client'

export interface CreateWorkPostParams {
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
}

export const usePostWorkPost = () => {
  const [loading, setLoading] = React.useState(false)

  const postWorkPost = async (params: CreateWorkPostParams): Promise<WorkPost> => {
    setLoading(true)
    try {
      const data = await Api.work.createWorkPost(
        params.lang,
        params.title,
        params.miniDescription,
        params.workType,
        params.location,
        params.money,
        params.title2,
        params.description2,
        params.title3,
        params.title3Labels,
        params.title4,
        params.title4Labels
      )
      console.log('Created post:', data)
      return data
    } catch (error) {
      console.error('Error creating work post:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { postWorkPost, loading }
}
