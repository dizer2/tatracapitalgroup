import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import React from 'react'

export default function Nav() {
	const { translations, selectedLanguage } = useLanguage();
	
	const getTranslation = (key: string) => {
    const translation = translations.find(
      (t) => t.key === key && t.lang === selectedLanguage
    );
    return translation ? translation.value : key;
  };
	return (
		<>
			<Link href="/">{getTranslation('nav_1')}</Link>
			<Link href="/career">{getTranslation('nav_2')}</Link>
			<Link href="/">{getTranslation('nav_3')}</Link>
		</>
			 
	)
}
