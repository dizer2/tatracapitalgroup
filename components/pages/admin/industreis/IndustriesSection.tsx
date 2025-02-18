'use client'

import React from 'react'
import IndustriesCard from './industries-card'
import { useLanguage } from '@/context/LanguageContext';
import { useIndustries } from '@/hooks/getIndustries';

export default function IndustriesSection() {

	const { selectedLanguage } = useLanguage();
	const { loading, industries } = useIndustries(selectedLanguage);

	
	console.log(industries);

	return (
		<div className='mt-6'>
		<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
			Industry Experts

		</h3>
			<div className='w-full p-10 bg-darkS rounded-3xl flex justify-center gap-6'>
				
			{loading ? (
				<>
				Loading...
				</>
			) : (
				<>
					{industries.map((industries, index) => (
				<IndustriesCard 
					key={index}
					title={industries.translations.find((t) => t.lang ===selectedLanguage)?.title || 'No title available'}
					description={industries.translations.find((t) => t.lang === selectedLanguage)?.description || 'No description available'}

					id={industries.id}
					image={industries.image}
				/>
			))}
				</>
			)
			
			}
			
				
			</div>
		</div>
	)
}
