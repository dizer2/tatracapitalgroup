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

export default function TeamCard({
	id,
	name,
	position,
	description,
	image,
}: TeamMemberProps) {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const [newName, setNewName] = useState(name)
	const [newPosition, setNewPosition] = useState(position)
	const [newDescription, setNewDescription] = useState(description)
	const [newImage, setNewImage] = useState(image)

	const handleUploadClick = () => {
		fileInputRef.current?.click()
	}

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0]
			const convertedImage = await imageConverter(file)
			setNewImage(convertedImage)
		}
	}

	const { selectedLanguage } = useLanguage()

	const { updateTeamMembers } = usePutTeamMembers();

	const handleUpdateTeamMember = async () => {
		if (
			newName.trim() !== '' &&
			newPosition.trim() !== '' &&
			newDescription.trim() !== ''
		) {
			const success = await updateTeamMembers(
				id,
				newName,
				newPosition,
				newDescription,
				newImage,
				selectedLanguage,
			)
			if (success) {
				setIsDialogOpen(false)
			}
		}
	}

	return (
		<div className='w-36 h-auto p-2 bg-white text-black rounded-lg flex flex-col items-center justify-center gap-4 text-center'>
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
						Edit
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
								onClick={handleUploadClick}
							>
								UPLOAD
							</div>
						</div>
						<DialogTitle className='w-full'>{newName}</DialogTitle>
						<Input
							className='text-black'
							onChange={(e) => setNewName(e.target.value)}
							value={newName}
							placeholder='Name'
						/>
						<Input
							className='text-black mt-2'
							onChange={(e) => setNewPosition(e.target.value)}
							value={newPosition}
							placeholder='Position'
						/>
						<DialogDescription className='w-full'>
							<Textarea
								className='text-black resize-none'
								onChange={(e) => setNewDescription(e.target.value)}
								value={newDescription}
								placeholder='Description'
							/>
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className='sm:justify-between mt-4'>
					
						<Button
							onClick={handleUpdateTeamMember}
							type='button'
							variant='green'
							className='w-40'
						>
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
