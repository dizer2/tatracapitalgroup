import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import IndustriesCard from '@/components/pages/admin/industries-card'

export default function page() {
	return (
		<div className='p-20'>
			<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
				Dashboard
			</h3>
			<div className='p-10 bg-darkS rounded-3xl flex flex-col gap-6'>
				<h3 className='font-bebas text-4xl text-white'>Main</h3>

				<div className='w-52 flex flex-col gap-2'>
					<Label htmlFor='picture'>Logo</Label>
					<Input id='picture' type='file' />
				</div>

				<div className='flex flex-wrap gap-4'>
					<div className='flex flex-col gap-2'>
						<Label className='flex items-center'>
							<Image
								src='/images/assets/landing/socials/x.svg'
								width={24}
								height={24}
								alt='x'
							/>
							X Link
						</Label>
						<Input type='text' placeholder='' />
					</div>

					<div className='flex flex-col gap-2'>
						<Label className='flex items-center'>
							<Image
								src='/images/assets/landing/socials/linkedin.svg'
								width={24}
								height={24}
								alt='x'
							/>
							LinkedIn Link
						</Label>
						<Input type='text' />
					</div>

					<div className='flex flex-col gap-2'>
						<Label className='flex items-center'>
							<Image
								src='/images/assets/landing/socials/phone.svg'
								width={24}
								height={24}
								alt='x'
							/>
							Mobile Phone
						</Label>
						<Input type='number' />
					</div>

					<div className='flex flex-col gap-2'>
						<Label className='flex items-center'>
							<Image
								src='/images/assets/landing/socials/gmail.svg'
								width={24}
								height={24}
								alt='x'
							/>
							Email
						</Label>
						<Input type='email' />
					</div>
				</div>

				{/* <div className='w-full h-[2px] bg-gray-100'></div> */}

				<div>
					<Button variant='default'>Save</Button>
				</div>
			</div>


			<div className='flex flex-col justify-center mt-20'>
			<Tabs defaultValue='eng' className='flex justify-center'>
				<TabsList>
					<TabsTrigger value='eng'>
							<Image
							src={'/images/assets/landing/eng-flag.svg'}
							width={24}
							height={24}
							alt="flag"
						/>
					</TabsTrigger>
					<TabsTrigger value='svk'>
					<Image
							src={'/images/assets/landing/svk-flag.svg'}
							width={24}
							height={24}
							alt="flag"
						/>
					</TabsTrigger>
				</TabsList>
			</Tabs>

			<div className='mt-6'>
			<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
				Industry Experts

			</h3>
				<div className='w-full p-10 bg-darkS rounded-3xl flex justify-center gap-6'>
					
				{Array.from({ length: 3 }).map((_, i) => (
					<IndustriesCard key={i} />
				))}
					
				</div>
			</div>
			</div>

		</div>
	)
}
