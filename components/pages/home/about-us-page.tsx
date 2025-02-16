import Image from 'next/image'

export default function AboutUs() {
	return (
		<div className='w-full h-screen2xl:px-20 lg:px-16 md:px-10 px-10'>
			<div className='md:mb-40 mb-20'>
				<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6  text-white'>
					Who We Are
				</h3>
				<p className='md:text-2xl text-lg text-center'>
					<span className='font-bold'>Tatra Capital Group</span> is a
					multinational holding company founded by a group of international
					investors from the US, UK, and the Middle East. With a strong presence
					in Slovakia, we partner with and develop businesses in key
					industries—Food, Manufacturing, and Real Estate—that are essential for
					long-term economic development in Central Europe. Our approach
					combines global business expertise with deep local market knowledge,
					ensuring that every business within our portfolio operates
					efficiently, scales sustainably, and contributes to regional economic
					growth. We focus on long-term business development and sustainable
					expansion.
				</p>
			</div>

			<div className='md:mb-40 mb-20 relative'>
				<Image
					src={'/images/assets/landing/aboutUs/main.jpg'}
					width={1920}
					height={1080}
					alt='main'
					className='w-full sm:h-auto h-40 rounded-2xl absolute z-10 object-cover'
				/>

				<Image
					src={'/images/assets/landing/aboutUs/main.jpg'}
					width={1920}
					height={1080}
					alt='main'
					className='w-full sm:h-auto rounded-2xl h-40 blur-md object-cover'
				/>
			</div>

			<div className='md:flex md:flex-row flex-col md:justify-between md:gap-20 mb-40'>
				<div>
					<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6 text-white'>
						Mission
					</h3>
					<p className='md:text-2xl text-lg text-center'>
						We aim to develop and support strategic projects that enhance
						Slovakia’s economic landscape, injecting capital into industries and
						broadening their market reach.
					</p>
				</div>
				<div className='md:mt-0 mt-6'>
					<h3 className='font-bebas lg:text-8xl text-6xl text-center md:mb-12 mb-6 text-white'>
						Vision
					</h3>
					<p className='md:text-2xl text-lg text-center'>
						To drive sustainable growth in Slovakia and Central Europe by
						partnering with and developing businesses that create long-term
						value in food, manufacturing, and real estate.
					</p>
				</div>
			</div>
		</div>
	)
}
