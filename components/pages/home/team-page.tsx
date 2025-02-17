import { Button } from '@/components/ui/button'
import TeamCard from '@/components/ui/team-card'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function TeamPage() {
	return (
		<>
			<div className='2xl:px-20 lg:px-16 md:px-0'>
				<div className='w-full md:p-12 p-6 bg-darkS rounded-t-3xl relative z-10'>
					<Image
						width={1920}
						height={1080}
						src={'/images/assets/career/post/bg.svg'}
						alt='career'
						className='absolute top-0 left-0 w-full h-full object-cover -z-10'
					/>

					<h3 className='font-bebas lg:text-8xl text-6xl text-center mb-12  text-white'>
						OUT TEAM
					</h3>

					<div className='flex flex-wrap md:gap-12 gap-6 justify-center'>
						{Array.from({ length: 5 }).map((_, index) => (
							<TeamCard key={index} />
						))}

						<div className='md:w-80 w-full h-96 bg-mainS flex flex-col items-center justify-between rounded-2xl p-5'>
							<div className='flex flex-col w-full h-full items-center justify-between gap-4'>
								<div className='w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center'>
									<Image
										src={'/images/assets/landing/team/icon.svg'}
										width={70}
										height={70}
										alt='team-icon'
									/>
								</div>

								<div className='w-full text-white flex flex-col items-center gap-5'>
									<p className='font-bebas font-medium text-3xl'>
										Here can be you
									</p>
									<Link
										target='_blank'
										className='w-full'
										href='https://meet.google.com/landing'
									>
										<Button className='w-full h-16' variant='white'>
											JOIN US
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
