import CareerCard from '@/components/ui/career-card'
import Image from 'next/image'
import React from 'react'

export default function CareerPosts() {
	return (
		<div className='w-full min-h-screen relative'>
			<div className='md:mb-40 mb-20 mt-40 2xl:px-20 lg:px-16 md:px-10 px-10'>
				<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6  text-white'>
					Who We Are
				</h3>
				<p className='md:text-2xl text-lg text-center'>
					<span className='font-bold'>Tatra Capital Group</span> is a
					multinational holding company founded by a group of international
					investors from the US, UK, and the Middle East. With a strong presence
					in Slovakia, we partner with and develop businesses in key
					industries—Food, Manufacturing, and Real Estate—that are essential for
					long-term economic development in Central Europe. Our approach
					combines global business expertise with deep local market knowledge,
					ensuring that every business within our portfolio operates
					efficiently, scales sustainably, and contributes to regional economic
					growth. We focus on long-term business development and sustainable
					expansion.
				</p>
			</div>

			<div className='2xl:px-20 lg:px-16 md:px-10 px-10 w-full flex flex-wrap items-center xl:justify-between justify-center gap-8'>
				{Array.from({ length: 5 }).map((_, idx) => (
					<CareerCard key={idx}/>
				))}
	
			</div>

			<Image
				width={1920}
				height={1080}
				src={'/images/assets/career/bg.svg'}
				alt='career'
				className='absolute bottom-0 left-0 w-full lg:h-auto h-[600px] object-cover -z-10 translate-y-10'
			/>
		</div>
	)
}
