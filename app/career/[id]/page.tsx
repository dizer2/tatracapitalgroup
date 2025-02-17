import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function CareerPosts() {
	return (
		<div className='2xl:px-20 lg:px-16 md:px-10 px-10 mt-40'>
			<div className='w-full bg-darkS rounded-3xl flex flex-col md:gap-12 gap-6 md:p-12 p-6 relative z-10 overflow-hidden md:mb-40 mb-20'>
				<Image
					width={1920}
					height={1080}
					src={'/images/assets/career/post/bg.svg'}
					alt='career'
					className='absolute top-0 left-0 w-full h-full object-cover -z-10'
				/>
				<h3 className='font-bebas lg:text-8xl text-6xl text-white'>
					Business Registration & Compliance Specialist
				</h3>

				<div className='flex flex-wrap gap-6'>
					<Button
						className='md:h-16 h-auto py-4 text-md w-full md:w-auto cursor-auto break-words whitespace-normal text-left'
						variant='default'
					>	
						<Image
							src={'/images/assets/career/post/map.svg'}
							width={24}
							height={24}
							alt='map'
						/>
						Kosica, Slovakia (Remote or On-Site)
					</Button>

					<Button
						className='md:h-16 h-auto py-4 text-md w-full md:w-auto cursor-auto break-words whitespace-normal text-left'
						variant='default'
					>
						<Image
							src={'/images/assets/career/post/work.svg'}
							width={24}
							height={24}
							alt='map'
						/>
						Contract / Part-Time
					</Button>

					<Button
						className='md:h-16 h-auto py-4 text-md w-full md:w-auto cursor-auto break-words whitespace-normal text-left'
						variant='default'
					>
						<Image
							src={'/images/assets/career/post/money.svg'}
							width={24}
							height={24}
							alt='map'
						/>
						Based on experience
					</Button>
				</div>

				<Button variant='main' className='md:w-72 w-full h-16'>
					APPLY TO THE JOB
				</Button>
			</div>

			<div className='md:mb-40 mb-20 '>
				<h3 className='font-bebas lg:text-6xl text-4xl md:mb-6 mb-4  text-white'>
					About This Role
				</h3>
				<p className='md:text-2xl text-lg'>
					Tatra Capital Group is launching a Kosher-certified wholesale business
					in Slovakia, supplying retailers, restaurants, and communities across
					Central Europe. We are in the setup phase and looking for
					professionals who can assist with company registration, regulatory
					compliance, trade licensing, market research, and operational setup.
					If you have experience in legal compliance, business registration,
					logistics, research, or data analysis, we’d love to hear from you!
				</p>
			</div>

			<div className='lg:flex justify-between 2xl:gap-12 md:gap-10 gap-8 mb-40'>
				<div>
					<h3 className='font-bebas lg:text-6xl text-4xl md:mb-6 mb-4  text-white'>
						Responsibilities
					</h3>
					<div className='flex flex-col gap-4'>
						<div className='flex gap-2 items-start'>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								Assist with company registration and business incorporation in
								Slovakia
							</p>
						</div>
						<div className='flex gap-2 items-start'>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								Assist with company registration and business incorporation in
								Slovakia
							</p>
						</div>
						<div className='flex gap-2 items-start'>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								Assist with company registration and business incorporation in
								Slovakia
							</p>
						</div>
					</div>
				</div>

				<div className='lg:mt-0 mt-10'>
					<h3 className='font-bebas lg:text-6xl text-4xl md:mb-6 mb-4  text-white'>
						Responsibilities
					</h3>
					<div className='flex flex-col gap-4'>
						<div className='flex gap-2 items-start'>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								Assist with company registration and business incorporation in
								Slovakia
							</p>
						</div>
						<div className='flex gap-2 items-start'>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								Assist with company registration and business incorporation in
								Slovakia
							</p>
						</div>
						<div className='flex gap-2 items-start'>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								Assist with company registration and business incorporation in
								Slovakia
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
