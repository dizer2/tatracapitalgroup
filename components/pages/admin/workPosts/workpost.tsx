// /components/work-posts/WorkPosts.tsx
'use client'
import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'
import WorkCard from './work-card'
import { useWork } from '@/hooks/getWork'
import { usePostWorkPost } from '@/hooks/postWorkPost'
import { useDeleateWorkPost } from '@/hooks/delateWorkPost'

export default function WorkPosts() {
  const { selectedLanguage } = useLanguage()
  const { work, loading, mutate } = useWork(selectedLanguage)
  // Temporary posts created locally before saving to the database.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [newPosts, setNewPosts] = useState<any[]>([])
  const { postWorkPost } = usePostWorkPost()
  const { deleateWorkPost } = useDeleateWorkPost() // hook for deletion

  const handleAddPost = () => {
    const tempId = Date.now().toString()
    setNewPosts([
      ...newPosts,
      {
        id: tempId,
        translations: [
          {
            lang: selectedLanguage,
            workType: 'Full-time',
            title: 'New Position',
            miniDescription: '',
            location: '',
            workTypeLarge: '',
            money: '',
            title2: 'Responsibilities',
            description2: '',
            title3: 'Requirements',
            title3Labels: [] as string[],
            title4: 'Benefits',
            title4Labels: [] as string[]
          }
        ],
        isNew: true
      }
    ])
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreatePost = async (tempId: string, data: any) => {
    try {
      // Extract the first (and only) translation from data.translations
      const translation = data.translations[0]
      await postWorkPost({
        lang: selectedLanguage,
        newTitle: translation.title,
        newDescription: translation.miniDescription,
        newWorkType: translation.workType,
        newLocation: translation.location,
        newMoney: translation.money,
        newTitle2: translation.title2,
        newDescription2: translation.description2,
        newTitle3: translation.title3,
        newTitle3Labels: translation.title3Labels,
        newTitle4: translation.title4,
        newTitle4Labels: translation.title4Labels
      })
      setNewPosts(newPosts.filter(p => p.id !== tempId))
      mutate()
    } catch (error) {
      console.error('Failed to create work post:', error)
    }
  }

  const handleDeletePost = async (id: string, isNew: boolean) => {
    if (isNew) {
      setNewPosts(newPosts.filter(p => p.id !== id))
    } else {
      try {
        await deleateWorkPost(id, selectedLanguage)
        mutate()
      } catch (error) {
        console.error('Failed to delete work post:', error)
      }
    }
  }

  return (
    <div className='mt-12'>
      <h3 className='font-bebas text-8xl mb-10 text-white text-center'>
        Work Posts
      </h3>
      <div className='w-full p-10 bg-darkS rounded-3xl flex justify-center gap-6 flex-wrap'>
        {loading ? (
          <>Loading...</>
        ) : (
          [...work, ...newPosts].map((post) => (
            <WorkCard
              key={post.id}
              {...post}
              isNew={post.isNew}
              onCreate={handleCreatePost}
              onDelete={() => handleDeletePost(post.id, !!post.isNew)}
            />
          ))
        )}
      </div>
      <div className='w-full flex justify-center mt-10'>
        <Button onClick={handleAddPost}>Add new post</Button>
      </div>
    </div>
  )
}