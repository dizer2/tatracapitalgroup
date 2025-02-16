import React from 'react'
import Image from 'next/image'

export default function IndustriesPage() {
	return (
		<div className='w-ful mb-40 2xl:px-20 lg:px-16 md:px-10 px-10'>
			<h3 className='font-bebas lg:text-8xl text-6xl text-center mb-12  text-white'>
				Industry Experts
			</h3>
			<div className='flex lg:flex-row flex-col z-10 relative gap-14'>
				<div className='w-full flex flex-col lg:gap-8 gap-4 items-center'>
					<div className='md:w-24 md:h-24 w-16 h-16 bg-white rounded-full flex items-center justify-center'>
						<Image width={40} height={40} src={'/images/assets/landing/industries/Food.svg'} alt='food' className='md:size-10 size-6' />
					</div>

					<div className='flex flex-col md:gap-3 gap-1'>
						<p className='md:text-2xl text-lg font-bold text-center'>Food Industry</p>
						<p className='md:text-2xl text-lg text-center'>
							Tatra Capital Group supports businesses in food manufacturing,
							distribution, and supply chains by providing capital and helping
							them expand into new markets.
						</p>
					</div>
				</div>

				<div className='w-full flex flex-col lg:gap-8 gap-4 items-center'>
					<div className='md:w-24 md:h-24 w-16 h-16 bg-white rounded-full flex items-center justify-center'>
						<Image width={40} height={40} src={'/images/assets/landing/industries/Manufacturing.svg'} alt='food' className='md:size-10 size-6' />
					</div>

					<div className='flex flex-col md:gap-3 gap-1'>
						<p className='md:text-2xl text-lg font-bold text-center'>Manufacturing</p>
						<p className='md:text-2xl text-lg text-center'>
							We invest in manufacturing businesses, injecting capital into production and helping companies broaden their market reach across Slovakia and Central Europe.
						</p>
					</div>
				</div>

				<div className='w-full flex flex-col lg:gap-8 gap-4 items-center'>
					<div className='md:w-24 md:h-24 w-16 h-16 bg-white rounded-full flex items-center justify-center'>
						<Image width={40} height={40} src={'/images/assets/landing/industries/Food.svg'} alt='food' className='md:size-10 size-6' />
					</div>

					<div className='flex flex-col md:gap-3 gap-1'>
						<p className='md:text-2xl text-lg font-bold text-center'>Real Estate</p>
						<p className='md:text-2xl text-lg text-center'>
							Our real estate investments focus on strategic developments that improve urban growth, logistics infrastructure, and commercial properties, ensuring long-term business viability.
						</p>
					</div>
				</div>

			</div>
		</div>
	)
}
