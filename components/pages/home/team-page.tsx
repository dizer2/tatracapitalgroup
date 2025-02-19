import { Button } from '@/components/ui/button'
import TeamCard from '@/components/ui/team/team-card'
import TeamSkeletonCard from '@/components/ui/team/team-skeleton-card'
import { useLanguage } from '@/context/LanguageContext'
import { useTeamSection } from '@/hooks/getSectionTeam'
import { useTeam } from '@/hooks/getTeam'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamPage() {
	const { selectedLanguage } = useLanguage()
	const { team, loading } = useTeam(selectedLanguage)
	const { teamSection, loading2 } = useTeamSection(selectedLanguage)

	console.log(teamSection)
	console.log(team)

	return (
		<>
			<div className='2xl:px-20 lg:px-16 md:px-0'>
				<div className='w-full md:p-12 p-6 bg-darkS rounded-t-3xl relative z-10'>
					<Image
						width={1920}
						height={1080}
						src={'/images/assets/career/post/bg.svg'}
						alt='career'
						className='absolute top-0 left-0 w-full h-full object-cover -z-10'
					/>

					<h3 className='font-bebas lg:text-8xl text-6xl text-center mb-12  text-white'>
						{
							teamSection[0]?.translations.find(
								(t) => t.lang === selectedLanguage
							)?.title
						}
					</h3>

					<div className='flex flex-wrap md:gap-12 gap-6 justify-center'>
						{loading ? (
							<>
								<TeamSkeletonCard />
								<TeamSkeletonCard />
								<TeamSkeletonCard />
								<TeamSkeletonCard />
								<TeamSkeletonCard />
							</>
						) : (
							<>
								{team.map((member, index) => (
									<TeamCard
										key={index}
										name={member.name}
										position={
											member?.translations.find(
												(t) => t.lang === selectedLanguage
											)?.position
										}
										description={
											member?.translations.find(
												(t) => t.lang === selectedLanguage
											)?.description
										}
										image={member.image}
										buttonCard={
											teamSection[0]?.translations.find(
												(t) => t.lang === selectedLanguage
											)?.buttonCard
										}
										buttonClose={
											teamSection[0]?.translations.find(
												(t) => t.lang === selectedLanguage
											)?.buttonClose
										}
									/>
								))}
							</>
						)}

						{loading2 ? (
							<TeamSkeletonCard />
						) : (
							<div className='md:w-80 w-full h-96 bg-mainS flex flex-col items-center justify-between rounded-2xl p-5'>
								<div className='flex flex-col w-full h-full items-center justify-between gap-4'>
									<div className='w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center'>
										<Image
											src={teamSection[0]?.image}
											width={70}
											height={70}
											alt='team-icon'
										/>
									</div>

									<div className='w-full text-white flex flex-col items-center gap-5'>
										<p className='font-bebas font-medium text-3xl'>
											{
												teamSection[0]?.translations.find(
													(t) => t.lang === selectedLanguage
												)?.position
											}
										</p>
										<Link
											target='_blank'
											className='w-full'
											href='https://meet.google.com/landing'
										>
											<Button className='w-full h-16' variant='white'>
												{
													teamSection[0]?.translations.find(
														(t) => t.lang === selectedLanguage
													)?.buttonText
												}
											</Button>
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
