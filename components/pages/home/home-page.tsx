import Image from 'next/image'
import React from 'react'

export default function Home() {
	return (
		<div className="w-full h-screen bg-[url('/images/assets/landing/home/background.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-hidden overflow-y-hidden">
			<h3 className='font-bebas text-8xl z-10 text-center'>Shaping Tomorrow, Today</h3>
			<Image
				width={1200}
				height={600}
				src={'/images/assets/landing/home/clouds.png'}
				alt='clouds'
				className='absolute z-0 -left-1/4 w-2/3 translate-y-[20%] select-none'
				 draggable="false"
			/>

			<Image
				width={800}
				height={400}
				src={'/images/assets/landing/home/clouds2.png'}
				alt='clouds'
				className='absolute z-0 right-0 w-2/3 translate-y-[25%] select-none'
				draggable="false"
			/>

			<div className="absolute w-full h-screen bg-[url('/images/assets/landing/home/mountains.png')] bg-cover bg-center z-0 select-none left-0"></div>

			<div className='absolute bottom-0 mb-8'>
				<div className='flex flex-col items-center gap-8 cursor-pointer '>
					<p className='w-auto h-auto rotate-90'>SCROLL</p>
					<Image
						src={'/images/assets/landing/mouse.svg'}
						width={24}
						height={24}
						alt='mouse'
						draggable="false"
					/>
				</div>
			</div>
		</div>
	)
}
