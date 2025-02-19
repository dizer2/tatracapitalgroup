'use client'

import React from 'react'
import TeamCard from './team-card'
import { useLanguage } from '@/context/LanguageContext'
import { useTeam } from '@/hooks/getTeam'
import { Button } from '@/components/ui/button'

export default function TeamMembers() {
	const { selectedLanguage } = useLanguage()
	const { team, loading } = useTeam(selectedLanguage)

	return (
		<div className='mt-12'>
			<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
				Team Members
			</h3>
			<div className='w-full p-10 bg-darkS rounded-3xl flex justify-center gap-6'>
				{loading ? (
					<>Loading...</>
				) : (
					team.map((member, index) => (
						<TeamCard
							key={index}
							position={
								member.translations.find(
									(t) => t.lang === selectedLanguage
								)?.position || 'No title available'
							}
							description={
								member.translations.find(
									(t) => t.lang === selectedLanguage
								)?.description || 'No description available'
							}
							id={member.id}
							image={member.image || '/default-avatar.png'} // Added fallback image
							name={member.name}
						/>
					))
				)}
			</div>
			<div className='w-full flex justify-center mt-10'>
				<Button>Add a new member</Button>
			</div>
		</div>
	)
}
