import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Socials() {
	return (
		<>
			<Link href={'/'}>
				<Image
					width={35}
					height={35}
					src={'/images/assets/landing/socials/x.svg'}
					alt='X'
				/>
			</Link>

			<Link href={'/'}>
				<Image
					width={35}
					height={35}
					src={'/images/assets/landing/socials/linkedin.svg'}
					alt='LinkedIn'
				/>
			</Link>

			<a href='mailto:example@gmail.com'>
				<Image
					width={35}
					height={35}
					src={'/images/assets/landing/socials/gmail.svg'}
					alt='gmail'
				/>
			</a>

			<a className='cursor-pointer' href='tel:+234-123-456-7890'>
				<Image
					width={35}
					height={35}
					className='cursor-pointer'
					src={'/images/assets/landing/socials/phone.svg'}
					alt='phone'
				/>
			</a>
		</>
	)
}
