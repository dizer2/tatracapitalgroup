import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/context/LanguageContext'
import { useAbout } from '@/hooks/getAboutUs'
import Image from 'next/image'

export default function AboutUs() {
	const { selectedLanguage } = useLanguage()
	const { aboutUs, loading } = useAbout(selectedLanguage)
	console.log(aboutUs)


	return (
		<div className='w-full h-screen2xl:px-20 lg:px-16 md:px-10 px-10'>
			<div className='md:mb-40 mb-20'>
				<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6  text-white flex justify-center'>
					{loading ? (
						<Skeleton className='w-1/2 h-10' />
					) : (
						aboutUs[0]?.translations.find((t) => t.lang === selectedLanguage)
							?.title1
					)}
				</h3>
				<div className='md:text-2xl text-lg text-center flex justify-center'>
					{loading ? (
						<>
							<div className='w-2/3 flex flex-col gap-2'>
								<Skeleton className='w-full h-4' />
								<Skeleton className='w-full h-4' />
								<Skeleton className='w-full h-4' />
								<Skeleton className='w-full h-4' />
								<Skeleton className='w-full h-4' />
								<Skeleton className='w-full h-4' />
							</div>
						</>
					) : (
						aboutUs[0]?.translations.find((t) => t.lang === selectedLanguage)
							?.description1
					)}
				</div>
			</div>

			{loading ? (
				<div className='md:mb-40 mb-20 relative'>
					<Skeleton className='w-full h-40 rounded-2xl' />
				</div>
			) : (
				<>
					{aboutUs[0]?.image && (
						<div className='md:mb-40 mb-20 relative'>
							<Image
								src={`${aboutUs[0]?.image}`}
								width={1920}
								height={1080}
								alt='main'
								className='w-full sm:h-auto h-40 rounded-2xl absolute z-10 object-cover'
							/>

							<Image
								src={`${aboutUs[0]?.image}`}
								width={1920}
								height={1080}
								alt='main'
								className='w-full sm:h-auto rounded-2xl h-40 blur-md object-cover'
							/>
						</div>
					)}
				</>
			)}

			{loading ? (
				<div className='w-full md:flex md:flex-row flex-col md:justify-between md:gap-20 mb-40'>
					<div className='w-full md:mb-0 mb-12'>
						<Skeleton className='w-full h-10 md:mb-12 mb-6' />

						<div className='flex flex-col gap-2 items-center'>
							<Skeleton className='w-2/3 h-4' />
							<Skeleton className='w-2/3 h-4' />
							<Skeleton className='w-2/3 h-4' />
							<Skeleton className='w-2/3 h-4' />
						</div>
					</div>
					<div className='w-full md:mt-0 mt-6'>
						<Skeleton className='w-full h-10 md:mb-12 mb-6' />

						<div className='flex flex-col gap-2 items-center'>
							<Skeleton className='w-2/3 h-4' />
							<Skeleton className='w-2/3 h-4' />
							<Skeleton className='w-2/3 h-4' />
							<Skeleton className='w-2/3 h-4' />
						</div>
					</div>
				</div>
			) : (
				<div className='md:flex md:flex-row flex-col md:justify-between md:gap-20 mb-40'>
					<div>
						<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6 text-white'>
							{aboutUs[0]?.translations.find((t) => t.lang === selectedLanguage)
								?.title2 || 'No title available'}
						</h3>
						<p className='md:text-2xl text-lg text-center'>
							{aboutUs[0]?.translations.find((t) => t.lang === selectedLanguage)
								?.description2 || 'No title available'}
						</p>
					</div>
					<div className='md:mt-0 mt-6'>
						<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6 text-white'>
							{aboutUs[0]?.translations.find((t) => t.lang === selectedLanguage)
								?.title3 || 'No title available'}
						</h3>
						<p className='md:text-2xl text-lg text-center'>
							{aboutUs[0]?.translations.find((t) => t.lang === selectedLanguage)
								?.description3 || 'No title available'}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
