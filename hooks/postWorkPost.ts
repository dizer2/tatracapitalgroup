// /hooks/postWorkPost.ts
'use client'
import React from 'react'
import { Api } from '@/service/api-client'
import { WorkPost } from '@prisma/client'

export interface CreateWorkPostParams {
  lang: string
  newTitle?: string
  newDescription?: string
  newWorkType?: string
  newLocation?: string
  newMoney?: string
  newTitle2?: string
  newDescription2?: string
  newTitle3?: string
  newTitle3Labels?: string[]
  newTitle4?: string
  newTitle4Labels?: string[]
}

export const usePostWorkPost = () => {
  const [loading, setLoading] = React.useState(false)

  const postWorkPost = async (params: CreateWorkPostParams): Promise<WorkPost> => {
    setLoading(true)
    try {
      const data = await Api.work.createWorkPost(
        params.lang,
        params.newTitle,
        params.newDescription,
        params.newWorkType,
        params.newLocation,
        params.newMoney,
        params.newTitle2,
        params.newDescription2,
        params.newTitle3,
        params.newTitle3Labels,
        params.newTitle4,
        params.newTitle4Labels
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
