import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/context/LanguageContext';
import { useMain } from '@/hooks/getMain';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Socials() {
		const { selectedLanguage } = useLanguage()
		const { mainInfo, loading } = useMain(selectedLanguage);

	return (
		<>
		{loading ? (
			<Skeleton className='md:w-24 w-12 h-4' />
		) : (
			<>
			{mainInfo[0]?.socialMedia.map((social, index) => (
				<Link target='_blank' href={social.link} key={index}>
				<Image
					width={35}	
					height={35}
					src={social.icon}
				alt='Tatra Capital Group'
				/>
			</Link>
			))}

			<a target='_blank' href={`mailto:${mainInfo[0]?.email}`}>
				<Image
					width={35}
					height={35}
					src={'/images/assets/landing/socials/gmail.svg'}
					alt='Tatra Capital Group'
				/>
			</a>

			<a target='_blank' className='cursor-pointer' href={`tel:${mainInfo[0]?.phone}`}>
				<Image
					width={35}
					height={35}
					className='cursor-pointer'
					src={'/images/assets/landing/socials/phone.svg'}
					alt='Tatra Capital Group'
				/>
			</a>
			</>
		)}
			
		</>
	)
}
