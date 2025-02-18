import { IndustriesCardProps } from '@/types/industries'
import Image from 'next/image'
import React from 'react'



export default function IndustriesCard({
	title,
	description,
	image,
}: IndustriesCardProps) {
	return (
		<div className='w-full flex flex-col lg:gap-8 gap-4 items-center'>
			<div className='md:w-24 md:h-24 w-16 h-16 bg-white rounded-full flex items-center justify-center'>
				<Image
					width={40}
					height={40}
					src={image}
					alt='food'
					className='md:size-10 size-6'
				/>
			</div>

			<div className='flex flex-col md:gap-3 gap-1'>
				<p className='md:text-2xl text-lg font-bold text-center'>{title}</p>
				<p className='md:text-2xl text-lg text-center'>{description}</p>
			</div>
		</div>
	)
}
