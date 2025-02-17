'use client'

import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export default function IndustriesCard() {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleUploadClick = () => {
		fileInputRef.current?.click()
	}

	return (
		<div className="w-36 h-auto p-2 bg-white text-black rounded-lg flex flex-col items-center justify-center gap-4">
			Food Industry
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="default">Edit</Button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-md">
					<DialogHeader className="flex flex-col items-center gap-3">
						<div className="flex flex-col items-center gap-2">
							<input ref={fileInputRef} accept='image/*' type="file" className="hidden" />

							<div
								className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-black text-center cursor-pointer"
								onClick={handleUploadClick}
							>
								UPLOAD
							</div>
						</div>

						<DialogTitle className="w-full">
							<Input className="text-black" placeholder="Title" />
						</DialogTitle>

						<Textarea className="text-black" placeholder="Type your description." />
					</DialogHeader>

					<DialogFooter className="sm:justify-between mt-4">
						<Button type="button" variant="green" className="w-40">
							Save
						</Button>
						<DialogClose asChild>
							<Button type="button" variant="destructive" className="w-40">
								Close
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}
