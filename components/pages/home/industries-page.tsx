import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useIndustries } from '@/hooks/getIndustries'
import IndustriesCard from '@/components/ui/industries/industries-card'
import IndustriesCardSkeleton from '@/components/ui/industries/industries-skeleton'

export default function IndustriesPage() {
	const { selectedLanguage } = useLanguage()
	const { loading, industries } = useIndustries(selectedLanguage)

	console.log(industries)
	console.log(selectedLanguage)

	return (
		<div className='w-full mb-40 2xl:px-20 lg:px-16 md:px-10 px-10'>
			<h3 className='font-bebas lg:text-8xl text-6xl text-center mb-12 text-white'>
				Industry Experts
			</h3>

			<div className='flex lg:flex-row flex-col z-10 relative gap-14'>
				{loading ? (
					<>
						<IndustriesCardSkeleton />
						<IndustriesCardSkeleton />
						<IndustriesCardSkeleton />
					</>
				) : (
					<>
						{industries?.map((industry, index) => (
							<IndustriesCard
								key={index}
								title={
									industry.translations.find((t) => t.lang === selectedLanguage)
										?.title || 'No title available'
								}
								description={
									industry.translations.find((t) => t.lang === selectedLanguage)
										?.description || 'No description available'
								}
								image={industry.image}
							/>
						))}
					</>
				)}
			</div>
		</div>
	)
}
