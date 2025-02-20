import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/context/LanguageContext'
import { useMain } from '@/hooks/getMain'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
	const { selectedLanguage } = useLanguage()
	const { mainInfo, loading } = useMain(selectedLanguage)

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const scrollToSection = (id: any) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<>
			{loading ? (
				<Skeleton className='md:w-20 w-12 h-4' />
			) : (
				<>
					<button onClick={() => scrollToSection('team')}>
						{
							mainInfo[0]?.translations.find((t) => t.lang === selectedLanguage)
								?.nav1
						}
					</button>

					<Link href='/career'>
						{
							mainInfo[0]?.translations.find((t) => t.lang === selectedLanguage)
								?.nav2
						}
					</Link>
				</>
			)}
		</>
	)
}
