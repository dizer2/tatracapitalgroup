'use client'

import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { imageConverter } from '@/utils/imageConverter'
import { TeamMemberProps } from '@/types/team'
import { usePutTeamMembers } from '@/hooks/putTeamMembers'
import { useDeleateTeamMember } from '@/hooks/delateTeamMember'

interface TeamCardProps extends TeamMemberProps {
  isNew?: boolean;
  isLastMember?: boolean;
  onCreate?: (id: string, data: TeamMemberProps) => void;
  onDelete?: () => void;
}

export default function TeamCard({
  id,
  name,
  position,
  description,
  image,
  isNew,
  isLastMember,
  onCreate,
  onDelete
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: TeamCardProps & { isNew?: boolean; onCreate?: (id: string, data: any) => void; onDelete?: () => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(isNew || false)
  const [isDeleting, setIsDeleting] = useState(false)

  const [newName, setNewName] = useState(name)
  const [newPosition, setNewPosition] = useState(position)
  const [newDescription, setNewDescription] = useState(description)
  const [newImage, setNewImage] = useState(image)

  const { selectedLanguage } = useLanguage()
  const { updateTeamMembers } = usePutTeamMembers()
  const { deleateTeamMember } = useDeleateTeamMember()

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const convertedImage = await imageConverter(file)
      setNewImage(convertedImage)
    }
  }

  const handleSave = async () => {
    try {
      if (isNew && onCreate) {
        await onCreate(id, {
          name: newName,
          position: newPosition,
          description: newDescription,
          image: newImage
        })
      } else {
        await updateTeamMembers(
          id,
          newName,
          newPosition,
          newDescription,
          newImage,
          selectedLanguage,
        )
      }
      setIsDialogOpen(false)
    } catch (error) {
      console.error('Failed to save member:', error)
    }
  }

  const handleDelete = async () => {
    if (isLastMember) return;

    if (!isNew) {
      setIsDeleting(true)
      try {
        await deleateTeamMember(id, selectedLanguage)
        onDelete?.()
      } finally {
        setIsDeleting(false)
      }
    } else {
      onDelete?.()
    }
  }

  return (
    <div className='w-36 h-auto p-2 bg-white text-black rounded-lg flex flex-col items-center justify-center gap-4 text-center relative z-10'>
      {!isNew && (
        <Button
        variant="ghost"
        size="icon"
        className='absolute -top-2 -right-2 rounded-full bg-red-500 text-white h-6 w-6 p-0'
        onClick={handleDelete}
        disabled={isDeleting || isLastMember}
        title={isLastMember ? "Cannot delete the last team member" : ""}
      >
        ×
      </Button>
      )}

      <Image
        src={newImage}
        width={64}
        height={64}
        alt='Profile'
        className='rounded-full'
      />
      {newName}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant='default' onClick={() => setIsDialogOpen(true)}>
            {isNew ? 'Create' : 'Edit'}
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader className='flex flex-col items-center gap-3'>
            <div className='flex flex-col items-center gap-2'>
              <input
                ref={fileInputRef}
                accept='image/*'
                type='file'
                className='hidden'
                onChange={handleFileChange}
              />
              <div
                className='w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-black text-center cursor-pointer'
                onClick={() => fileInputRef.current?.click()}
              >
                UPLOAD
              </div>
            </div>
            <DialogTitle className='w-full'>
              <Input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder='Name'
              />
            </DialogTitle>
            <Input
              value={newPosition}
              onChange={(e) => setNewPosition(e.target.value)}
              placeholder='Position'
            />
            <DialogDescription className='w-full'>
              <Textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder='Description'
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='sm:justify-between mt-4'>
            <Button
              onClick={handleSave}
              type='button'
              variant='green'
              className='w-40'
            >
              {isNew ? 'Create' : 'Save'}
            </Button>
            <DialogClose asChild>
              <Button type='button' variant='destructive' className='w-40'>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}