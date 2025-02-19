'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/context/LanguageContext'
import { useAbout } from '@/hooks/getAboutUs'
import { usePutAbout } from '@/hooks/putAbout'

export default function AboutUs() {
	const { selectedLanguage } = useLanguage()
	const { aboutUs, loading } = useAbout(selectedLanguage)
	const [updatedTitle1, setUpdatedTitle1] = React.useState('')
	const [updatedDescription1, setUpdatedDescription1] = React.useState('')
	const [updatedTitle2, setUpdatedTitle2] = React.useState('')
	const [updatedDescription2, setUpdatedDescription2] = React.useState('')
	const [updatedTitle3, setUpdatedTitle3] = React.useState('')
	const [updatedDescription3, setUpdatedDescription3] = React.useState('')

	React.useEffect(() => {
		if (aboutUs.length > 0) {
			const translation = aboutUs[0]?.translations.find(
				(t) => t.lang === selectedLanguage
			)
			setUpdatedTitle1(translation?.title1 || 'No title available')
			setUpdatedDescription1(
				translation?.description1 || 'No description available'
			)
			setUpdatedTitle2(translation?.title2 || 'No title available')
			setUpdatedDescription2(
				translation?.description2 || 'No description available'
			)
			setUpdatedTitle3(translation?.title3 || 'No title available')
			setUpdatedDescription3(
				translation?.description3 || 'No description available'
			)
		}
	}, [aboutUs, selectedLanguage])

	console.log(aboutUs);

const { updateAboutUs } = usePutAbout()

	const hanlderUpdateAboutUs = async () => {
		if (updatedTitle1.trim() !== '' && updatedDescription1.trim() !== '' && updatedTitle2.trim() !== '' && updatedDescription2.trim() !== '' && updatedTitle3.trim() !== '' && updatedDescription3.trim() !== '') {
				updateAboutUs(
					selectedLanguage,
					updatedTitle1,
					updatedDescription1,
					updatedTitle2,
					updatedDescription2,
					updatedTitle3,
					updatedDescription3
				)
			
		}
	}

	return (
		<>
			{loading ? (
				<div className='mt-20'>
					<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
						About Us
					</h3>
					<div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
						Loading...
					</div>
				</div>
			) : (
				<div className='mt-20'>
					<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
						About Us
					</h3>
					<div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>
									{updatedTitle1}
								</h3>
								<Input
									value={updatedTitle1}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setUpdatedTitle1(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<Textarea
									value={updatedDescription1}
									className='w-full p-2 text-black resize-none'
									placeholder='Type your description.'
									onChange={(e) => setUpdatedDescription1(e.target.value)}
								/>
							</div>
						</div>

						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>
									{updatedTitle2}
								</h3>
								<Input
									value={updatedTitle2}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setUpdatedTitle2(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<Textarea
									value={updatedDescription2}
									className='w-full p-2 text-black resize-none'
									placeholder='Type your description.'
									onChange={(e) => setUpdatedDescription2(e.target.value)}
								/>
							</div>
						</div>

						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>
									{updatedTitle3}
								</h3>
								<Input
									value={updatedTitle3}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setUpdatedTitle3(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<Textarea
									value={updatedDescription3}
									className='w-full p-2 text-black resize-none'
									placeholder='Type your description.'
									onChange={(e) => setUpdatedDescription3(e.target.value)}
								/>
							</div>
						</div>

						<div className='mt-10'>
							<Button onClick={hanlderUpdateAboutUs} variant='default'>Save</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
