'use client'

import AboutUs from '@/components/pages/home/about-us-page'
import Home from '@/components/pages/home/home-page'
import IndustriesPage from '@/components/pages/home/industries-page'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function HomePage() {
	return (
		<ParallaxProvider>
			<Home />

			<IndustriesPage />

			<AboutUs />
		</ParallaxProvider>
	)
}
