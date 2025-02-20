'use client'

import LanguageSelect from '@/components/ui/language-select'
import Image from 'next/image'
import React from 'react'
import BurgerMenu from './burger-menu'
import Socials from './socials'
import Nav from './nav'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { useMain } from '@/hooks/getMain'
import { Skeleton } from '@/components/ui/skeleton'

export default function MobilePhone() {
	const [isClient, setIsClient] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const [burgerMenuElements, setShowBurgerMenuElements] = React.useState(false);
	const { selectedLanguage } = useLanguage()
	const { mainInfo, loading } = useMain(selectedLanguage)

	React.useEffect(() => {
		setIsClient(true)
	}, [])

	React.useEffect(() => {
		if (isOpen) {
			const showElements = setTimeout(() => {
				setShowBurgerMenuElements(true)
			}, 300)
			return () => clearTimeout(showElements)
		} else {
			setShowBurgerMenuElements(false)
		}
	}, [isOpen])

	if (!isClient) {
		return null
	}

	return (
		<div
			className={`block md:hidden w-full fixed bg-opacity-10 transition-all duration-700 z-50 ${
				isOpen
					? 'h-screen backdrop-blur-lg bg-black'
					: 'h-24 backdrop-blur-lg bg-black'
			}`}
		>
			<div className='w-full h-24 2xl:px-20 lg:px-16 md:px-10 px-10'>
				<div className='w-full h-full flex items-center justify-between md:justify-between relative'>
					<div className='z-10'>
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
						<LanguageSelect />
						<BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
					</div>
				</div>
			</div>

			<div
				className={`${
					burgerMenuElements ? 'block' : 'hidden'
				} w-full h-full transition-all duration-700 py-32 flex flex-col gap-8`}
			>
				<div className='flex flex-col text-center text-lg font-medium z-20 lg:gap-12 md:gap-8 gap-4'>
					<Nav />
				</div>

				<div className='flex justify-center gap-4'>
					<Socials />
				</div>
			</div>
		</div>
	)
}
