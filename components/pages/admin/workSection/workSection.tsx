'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/context/LanguageContext'
import { useWorkSection } from '@/hooks/getWorkSection'
import { usePutWorkSection } from '@/hooks/putWorkSection'

export default function WorkSection() {
	const { selectedLanguage } = useLanguage()
	const { workSection, loading2 } = useWorkSection(selectedLanguage)
	console.log(workSection)

	const [title, setTitle] = React.useState('')
	const [description, setDescription] = React.useState('')
	const [buttonCardText, setButtonCardText] = React.useState('')
	const [buttonApplyText, setButtonApplyText] = React.useState('')


	React.useEffect(() => {
		if (workSection.length > 0) {
			const translation = workSection[0]?.translations.find(
				(t) => t.lang === selectedLanguage
			)
			setTitle(translation?.title || 'No title available')
			setDescription(translation?.description || 'No title available')
			setButtonCardText(translation?.buttonCardText || 'No title available')
			setButtonApplyText(translation?.buttonApplyText || 'No title available')
		}
	}, [workSection, selectedLanguage])



	const { updateWorkSection } = usePutWorkSection()

	const hanlderUpdateAboutUs = async () => {
		updateWorkSection(
				selectedLanguage,
				title,
				description,
				buttonCardText,
				buttonApplyText
			)
	}

	return (
		<>
			{loading2 ? (
				<div className='mt-20'>
					<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
					Work Section
					</h3>
					<div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
						Loading...
					</div>
				</div>
			) : (
				<div className='mt-20'>
					<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
						Work Section 
					</h3>
		
					<div className='w-full p-10 bg-darkS rounded-3xl flex flex-col gap-12'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>
									{title}
								</h3>
								<Input
									value={title}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<Textarea
									value={description}
									className='w-full p-2 text-black resize-none'
									placeholder='Type your description.'
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>
						</div>

						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>
									{buttonCardText}
								</h3>
								<Input
									value={buttonCardText}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setButtonCardText(e.target.value)}
								/>
							</div>
						</div>

						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<h3 className='font-bebas text-4xl text-white'>
									{buttonApplyText}
								</h3>
								<Input
									value={buttonApplyText}
									type='text'
									className='w-full p-2 text-black'
									onChange={(e) => setButtonApplyText(e.target.value)}
								/>
							</div>
						</div>

						<div className='mt-10'>
							<Button onClick={hanlderUpdateAboutUs} variant='default'>
								Save
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
