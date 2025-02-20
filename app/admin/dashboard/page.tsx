import React from 'react'
import IndustriesSection from '@/components/pages/admin/industreis/IndustriesSection'
import LanguageSelect from '@/components/ui/language-select'
import AboutUs from '@/components/pages/admin/about/aboutUs'
import Team from '@/components/pages/admin/team/team'
import TeamMebmerss from '@/components/pages/admin/teamMem/TeamMembers'
import MainSection from '@/components/pages/admin/mainSection/mainSection'
import WorkPost from '@/components/pages/admin/workPosts/workpost'

export default function page() {
	return (
		<>
		
		<div className='fixed w-full h-10 py-10 bg-darkS flex justify-center items-center border-b-2 border-white'>
		<LanguageSelect />
		</div>
		<div className='p-20'>
		
			<h3 className='font-bebas text-8xl mb-10 text-white text-center'>
				Dashboard
			</h3>

			<div className='flex flex-col justify-center mt-20'>
				<MainSection />
				<IndustriesSection />
				<AboutUs />
				<Team />
				<TeamMebmerss	/>
				<WorkPost />
			</div>
		</div>
		</>

	)
}
