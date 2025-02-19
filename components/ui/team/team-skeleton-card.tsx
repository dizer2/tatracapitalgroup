
import React from 'react'
import { Skeleton } from '../skeleton'

export default function TeamSkeletonCard() {
	return (
		<div className='md:w-80 w-full h-96 bg-gray-900 flex flex-col items-center justify-between rounded-2xl p-5'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-36 h-36 bg-black rounded-full flex items-center justify-center'>
					<Skeleton className='w-36 h-36 rounded-full' />
				</div>

				<div className='w-full text-black flex flex-col items-center gap-1'>
					<Skeleton className='w-2/3 h-4' />
					<Skeleton className='w-full h-2' />
				</div>
			</div>

			<Skeleton className='w-full h-12'/>
			
		</div>
	)
}
