'use client'

import React from 'react'
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
import { IndustriesAdminCardProps } from '@/types/industries'
import { usePutIndustries } from '@/hooks/putIndustries'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { imageConverter } from '@/utils/imageConverter'

export default function IndustriesCard({
  title,
  description,
  id,
  image,
}: IndustriesAdminCardProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); 
  const [newTitle, setNewTitle] = React.useState(title);
  const [newDescription, setNewDescription] = React.useState(description)
  const [newImage, setNewImage] = React.useState(image);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
  
      const newFile = await imageConverter(file); 
      setNewImage(newFile);
    }
  };
  

  const { selectedLanguage } = useLanguage();


  const { updateIndustries } = usePutIndustries()

  const handleUpdateIndustries = async () => {
    if (newTitle.trim() !== '' && newDescription.trim() !== '') {
      if (id) {
        const success = await updateIndustries(selectedLanguage, id, newTitle, newImage, newDescription)
        if (success) {
          setIsDialogOpen(false);
        }
      }
    }
  }

  return (
    <div className='w-36 h-auto p-2 bg-white text-black rounded-lg flex flex-col items-center justify-center gap-4 text-center'>
       <Image
              src={newImage}
              width={24}
              height={24}
              alt='Industry'
            />
      {title}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}> {/* Bind dialog state */}
        <DialogTrigger asChild>
          <Button variant='default' onClick={() => setIsDialogOpen(true)}>
            Edit
            
          </Button>
        </DialogTrigger>
        <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className='sm:max-w-md'>
          <DialogHeader className='flex flex-col items-center gap-3'>
            <div className='flex flex-col items-center gap-2'>
              <input
                ref={fileInputRef}
                accept='image/*'
                type='file'
                onChange={handleFileChange}
                className='hidden'
              />
              <div
                className='w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-black text-center cursor-pointer'
                onClick={handleUploadClick}
              >
                UPLOAD
              </div>
            </div>
            <DialogTitle className='w-full'>{title}</DialogTitle>
           
            <Input
              className='text-black'
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              placeholder='Title'
            />
           
            <DialogDescription className='w-full'>
            <Textarea
              className='text-black resize-none'
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              placeholder='Type your description.'
            />
            </DialogDescription>
            
          </DialogHeader>
          <DialogFooter className='sm:justify-between mt-4'>
            <Button onClick={handleUpdateIndustries} type='button' variant='green' className='w-40'>
              Save
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
