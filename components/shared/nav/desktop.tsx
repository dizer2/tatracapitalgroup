'use client'

import LanguageSelect from '@/components/ui/language-select'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Nav from './nav'
import Socials from './socials'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { useMain } from '@/hooks/getMain'
import { Skeleton } from '@/components/ui/skeleton'


export default function Header() {
	const [isClient, setIsClient] = useState(false);
	const { selectedLanguage } = useLanguage()
	const { mainInfo, loading } = useMain(selectedLanguage)
	

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null
	}
	return (
		<div className='hidden md:block w-full h-24 fixed backdrop-blur-lg bg-black bg-opacity-10 2xl:px-20 lg:px-16 md:px-10 px-10 z-50'>
			<div className='w-full h-full flex items-center justify-between relative'>
				<div className='flex text-sm font-medium z-50 lg:gap-12 md:gap-8 gap-4'>
					<Nav />
				</div>
				<div className='w-full absolute flex justify-center z-20'>
					<Link	href='/'>
					{loading ? (
						<Skeleton className='w-14 lg:w-16 h-14 lg:h-16 rounded-full' />
					) : (
<Image
						width={60}
						height={50}
						src={mainInfo[0]?.logo}
						alt='logo'
						className='w-14 lg:w-16'
					/>
					)}
					
					</Link>
					
				</div>
				<div className='flex items-center lg:gap-12 md:gap-8 gap-4 z-20'>
					<div className='flex lg:gap-5 gap-2'>
						<Socials />
					</div>

					<div>
						<LanguageSelect />
					</div>
				</div>
			</div>
		</div>
	)
}
