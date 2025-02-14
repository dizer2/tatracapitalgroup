'use client'

import LanguageSelect from '@/components/ui/language-select'
import Image from 'next/image'
import React from 'react'
import BurgerMenu from './burger-menu'
import Socials from './socials'
import Nav from './nav'

export default function MobilePhone() {
	const [isClient, setIsClient] = React.useState(false)
	const [isOpen, setIsOpen] = React.useState(false)
	const [burgerMenuElements, setShowBurgerMenuElements] = React.useState(false)

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
			className={`block md:hidden w-full fixed bg-opacity-5 transition-all duration-700 z-50 ${
				isOpen
					? 'h-screen backdrop-blur-lg bg-black'
					: 'h-24 backdrop-blur-md bg-white'
			}`}
		>
			<div className='w-full h-24 2xl:px-20 lg:px-16 md:px-10 px-10'>
				<div className='w-full h-full flex items-center justify-between md:justify-between relative'>
					<div className='z-10'>
						<Image
							width={60}
							height={50}
							src={'/images/assets/landing/logo.svg'}
							alt='logo'
							className='w-14 lg:w-16'
						/>
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
