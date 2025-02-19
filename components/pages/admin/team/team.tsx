'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/context/LanguageContext'
import { useTeamSection } from '@/hooks/getSectionTeam'
import { imageConverter } from '@/utils/imageConverter'
import Image from 'next/image'
import { usePutTeamSection } from '@/hooks/putTeamSection'

export default function Team() {
  const { selectedLanguage } = useLanguage()
  const { teamSection, loading2 } = useTeamSection(selectedLanguage)
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [cardPosition, setCardPosition] = useState('')
  const [cardButtonText, setCardButtonText] = useState('')
  const [cardNormalButtonText, setCardNormalButtonText] = useState('')
  const [cardButtonCloseText, setCardButtonCloseText] = useState('')
  const [newImage, setNewImage] = useState<string | undefined>(teamSection[0]?.image)

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (teamSection.length > 0) {
      const translation = teamSection[0]?.translations.find(
        (t) => t.lang === selectedLanguage
      )
      setUpdatedTitle(translation?.title || 'No title available')
      setCardPosition(translation?.position || 'No position available')
      setCardButtonText(translation?.buttonText || 'No button text')
      setCardNormalButtonText(translation?.buttonCard || 'No normal button text')
      setCardButtonCloseText(translation?.buttonClose || 'No close button text')
      if (teamSection[0]?.image) {
        setNewImage(teamSection[0].image)
      }
    }
  }, [teamSection, selectedLanguage])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const newFile = await imageConverter(file)
      setNewImage(newFile)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const { updatedTeamSection } = usePutTeamSection()

  const handleUpdateTeamSection = async () => {
    if (
      updatedTitle.trim() !== '' &&
      cardPosition.trim() !== '' &&
      cardButtonText.trim() !== '' &&
      cardNormalButtonText.trim() !== '' &&
      cardButtonCloseText.trim() !== ''
    ) {
      await updatedTeamSection(
        selectedLanguage,
        updatedTitle,
        cardPosition,
        cardButtonText,
        cardNormalButtonText,
        cardButtonCloseText,
        newImage
      )
    }
  }

  return (
    <div className='mt-20'>
      <h3 className='font-bebas text-8xl mb-10 text-white text-center'>
        Team Section
      </h3>
      {loading2 ? (
        <div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
          Loading...
        </div>
      ) : (
        <div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-6'>
          <div>
            <h3 className='font-bebas text-4xl mb-2 text-white'>Title Section</h3>
            <Input
              type='text'
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className='w-full p-2 text-black'
              placeholder='Enter title'
            />
          </div>
          <div className='sm:w-[300px] w-full bg-mainS p-4 rounded-2xl flex flex-col gap-4'>
            <h3 className='font-bebas text-2xl text-white text-center'>
              Card Setting
            </h3>
            <div className='flex flex-col items-center gap-2'>
              <input
                ref={fileInputRef}
                accept='image/*'
                type='file'
                className='hidden'
                onChange={handleFileChange}
              />
              <div className='flex gap-2'>
              <div
                className='w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-black text-center cursor-pointer'
                onClick={handleUploadClick}
              >
                UPLOAD
              </div>
              {newImage && (
                <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center'>
                <Image src={newImage} width={48} height={48} alt='Icon Team' />
                </div>
              )}
              </div>
             
            </div>
            <Input
              type='text'
              value={cardPosition}
              onChange={(e) => setCardPosition(e.target.value)}
              className='w-full p-2 text-black'
              placeholder='Card Position'
            />
            <Input
              type='text'
              value={cardButtonText}
              onChange={(e) => setCardButtonText(e.target.value)}
              className='w-full p-2 text-black'
              placeholder='Card Button Text'
            />
            <Input
              type='text'
              value={cardNormalButtonText}
              onChange={(e) => setCardNormalButtonText(e.target.value)}
              className='w-full p-2 text-black'
              placeholder='Normal Button Text'
            />
            <Input
              type='text'
              value={cardButtonCloseText}
              onChange={(e) => setCardButtonCloseText(e.target.value)}
              className='w-full p-2 text-black'
              placeholder='Button Close Text'
            />
          </div>
          <div className='mt-10'>
            <Button variant='default' onClick={handleUpdateTeamSection}>
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}