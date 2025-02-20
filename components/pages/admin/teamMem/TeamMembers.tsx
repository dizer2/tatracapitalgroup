'use client'

import React, { useState } from 'react'
import TeamCard from './team-card'
import { useLanguage } from '@/context/LanguageContext'
import { useTeam } from '@/hooks/getTeam'
import { Button } from '@/components/ui/button'
import { usePostTeamMember } from '@/hooks/postTeamMember'

export default function TeamMembers() {
	const { selectedLanguage } = useLanguage()
	const { team, loading, mutate } = useTeam(selectedLanguage)
	console.log(team)
	const postTeamMember = usePostTeamMember()
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [newMembers, setNewMembers] = useState<any[]>([])

	const handleAddMember = async () => {
		const tempId = Date.now().toString()
		setNewMembers([
			...newMembers,
			{
				id: tempId,
				name: 'New Member',
				position: 'Position',
				description: 'Description',
				image: '/images/assets/landing/team/icon.svg',
				isNew: true,
			},
		])
	}

	const handleCreateMember = async (
		tempId: string,
		data: {
			name: string
			position: string
			description: string
			image: string
		}
	) => {
		try {
			await postTeamMember.postTeamMemberData(
				data.name,
				data.position,
				data.description,
				data.image,
				selectedLanguage
			)
			setNewMembers(newMembers.filter((m) => m.id !== tempId))
			mutate()
		} catch (error) {
			console.error('Failed to create member:', error)
		}
	}

	return (
		<div className='mt-12'>
			<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
				Team Members
			</h3>
			<div className='w-full p-10 bg-darkS rounded-3xl flex justify-center gap-6 flex-wrap'>
				{loading ? (
					<>Loading...</>
				) : (
					<>
				{[...team, ...newMembers].map((member) => {
  const isLastMember = team.length === 1 && !member.isNew;
  return (
    <TeamCard
      key={member.id}
      id={member.id}
      name={member.name}
      position={
        member.isNew 
          ? member.position 
          : member.translations?.find((t: { lang: string }) => t.lang === selectedLanguage)?.position || 'Position'
      }
      description={
        member.isNew
          ? member.description
          : member.translations?.find((t: { lang: string }) => t.lang === selectedLanguage)?.description || 'Description'
      }
      image={member.image}
      isNew={member.isNew}
      isLastMember={isLastMember}
      onCreate={handleCreateMember}
      onDelete={() => {
        if (!isLastMember) {
          setNewMembers(newMembers.filter(m => m.id !== member.id));
          mutate();
        }
      }}
    />
  );
})}
					</>
				)}
			</div>
			<div className='w-full flex justify-center mt-10'>
				<Button onClick={handleAddMember}>Add a new member</Button>
			</div>
		</div>
	)
}
