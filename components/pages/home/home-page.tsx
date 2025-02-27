'use client'

import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/context/LanguageContext'
import { useMain } from '@/hooks/getMain';
import Image from 'next/image'
import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

export default function Home() {
	const { selectedLanguage } = useLanguage();
	const { mainInfo, loading } = useMain(selectedLanguage);

	console.log(mainInfo)
	return (
		<>
			<ParallaxBanner
				layers={[
					{
						image: '/images/assets/landing/home/background.png',
						speed: 35,
						scale: [1, 2],
					},
				]}
				className='w-full h-screen bg-cover bg-center flex flex-col items-center justify-center overflow-hidden overflow-y-hidden'
			>
				<Parallax
					speed={120}
					className='w-full 2xl:px-20 lg:px-16 md:px-10 px-10 z-10'
				>
					<h3 className='font-bebas text-6xl sm:text-7xl  md:text-8xl text-center flex items-center justify-center z-10'>
						{loading ? (
							<Skeleton className='w-1/2 h-12' />
						) : (
							<p className='z-10'>{mainInfo[0]?.translations.find(
								(t) => t.lang === selectedLanguage
							)?.title}</p>
						)
							}
						<span className='absolute w-1/2 h-20 bg-black top-0 z-0 blur-[50px]'></span>
					</h3>
				</Parallax>
				<Parallax
					speed={100}
					className='absolute z-0 md:-left-1/4 -left-3/4 w-[800px] md:w-2/3 md:translate-y-[20%] translate-y-[20%] select-none'
				>
					<Image
						width={1200}
						height={600}
						src={'/images/assets/landing/home/clouds.png'}
						alt='Tatra Capital Group'
						draggable='false'
					/>
				</Parallax>
				<Parallax
					speed={-30}
					className='absolute z-0 right-0 w-[800px] lg:w-2/3 lg:translate-y-[5%] translate-y-[-35%] select-none'
				>
					<Image
						width={800}
						height={400}
						src={'/images/assets/landing/home/clouds2.png'}
						alt='Tatra Capital Group'
						className='absolute z-0 right-0 md:w-2/3 lg:translate-y-[5%] translate-y-[-35%] select-none'
						draggable='false'
					/>
				</Parallax>
				<div className="absolute w-full left-0 bottom-0 h-screen bg-[url('/images/assets/landing/home/mountains.png')] bg-cover bg-center z-0 select-none "></div>
				<Parallax
					className='w-full h-2/3 absolute bottom-0 left-0 translate-y-full'
					speed={45}
				>
					<div className='w-full h-full bg-black'></div>
				</Parallax>
				x
			</ParallaxBanner>
		</>
	)
}
