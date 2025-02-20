'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useWorkId } from '@/hooks/getWorkById';
import { Skeleton } from '@/components/ui/skeleton';
import { useWorkSection } from '@/hooks/getWorkSection';


export default function CareerPosts() {
  const { id } = useParams() as { id: string };

	const { selectedLanguage } = useLanguage();
	const { workId, loading } = useWorkId(selectedLanguage, id);
	const { workSection, loading2 } = useWorkSection(selectedLanguage)
	console.log(workId)

  const workPost = Array.isArray(workId) ? workId[0] : workId;
	

  if (loading) {
    return  ( 
		<div className='2xl:px-20 lg:px-16 md:px-10 px-10 mt-40'>
			<div className='w-full bg-darkS rounded-3xl flex flex-col md:gap-12 gap-6 md:p-12 p-6 relative z-10 overflow-hidden md:mb-40 mb-20'>
				<Skeleton className='w-full h-40' />
			</div>
			</div>
		)
  }

  const translations = workPost.translations;

	
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
					{loading ? (
						<div>
							Loading...
						</div>
					) : (
						<>
								{translations[0]?.title}
						</>
					)}
		
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
						{translations[0]?.location}
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
						{translations[0]?.workType}
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
						{translations[0]?.money}
					</Button>
				</div>

					{loading2 ? (
						<Skeleton className='md:w-72 w-full h-16' />
					) : (
						<Button
							variant="main"
							className="md:w-72 w-full h-16 uppercase"
							asChild
						>
							<a
								href={`mailto:job@tatracapitalgroup.com?subject=${encodeURIComponent(translations[0]?.title || 'Job Application')}`}
							>
								{workSection[0].translations.find((t) => t.lang === selectedLanguage)?.buttonApplyText}
							</a>
						</Button>

					)}
				
			</div>

			<div className='md:mb-40 mb-20 '>
				<h3 className='font-bebas lg:text-6xl text-4xl md:mb-6 mb-4  text-white'>
				{translations[0]?.title2}
				</h3>
				<p className='md:text-2xl text-lg'>
				{translations[0]?.description2}
				</p>
			</div>

			<div className='lg:flex  2xl:gap-40 md:gap-20 gap-20 mb-40'>
				<div className='md:w-1/2'>
					<h3 className='font-bebas lg:text-6xl text-4xl md:mb-6 mb-4  text-white'>
					{translations[0]?.title3}
					</h3>
					<div className='flex flex-col gap-4'>
						{translations[0]?.title3Labels.map((label: string, index: number) => (
							<div className='flex gap-2 items-start' key={index}>
							<Image
								src={'/images/assets/career/post/RequirementsIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								{label}
							</p>
						</div>
						))}
						
				
					</div>
				</div>

				<div className='md:w-1/2 lg:mt-0 mt-10'>
					<h3 className='font-bebas lg:text-6xl text-4xl md:mb-6 mb-4  text-white'>
					{translations[0]?.title4}
					</h3>
					<div className='flex flex-col gap-4'>
						{translations[0]?.title4Labels.map((label: string, index: number) => (
							<div className='flex gap-2 items-start' key={index}>
							<Image
								src={'/images/assets/career/post/ResponsibilitiesIcon.svg'}
								width={24}
								height={24}
								alt='check'
								className='mt-1'
							/>
							<p className='md:text-2xl text-lg'>
								{label}
							</p>
						</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
