'use client'

import { Api } from '@/service/api-client'
import React from 'react'

export const usePostTeamMember = () => {
  const [loading, setLoading] = React.useState(false)

  const postTeamMemberData = async (
    name: string,
    position: string,
    description: string,
    image: string | undefined,
    lang: string,
  ) => {
    setLoading(true)
    try {
      const data = await Api.team.createTeamMember(
        name,
        position,
        description,
        image,
        lang,
      )
      console.log('Created member:', data)
      return data
    } catch (error) {
      console.error('Error creating member:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return { postTeamMemberData, loading }
}