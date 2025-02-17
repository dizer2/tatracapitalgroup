import Link from 'next/link';
import React from 'react'

export default function Nav() {

	return (
		<>
			<Link href="/">Nav 1</Link>
			<Link href="/career">Nav 2</Link>
			<Link href="/">Nav 3</Link>
		</>
			 
	)
}


// const result = industriesArray.map(industry => {
// 	const translation = industry.translations.find(t => t.lang === lang);
// 	return {
// 		image: industry.image,
// 		...translation,
// 	};
// });
