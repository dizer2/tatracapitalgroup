'use client';

import LanguageSelect from '@/components/ui/language-select';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const { translations, selectedLanguage } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const getTranslation = (key: string) => {
    const translation = translations.find(
      (t) => t.key === key && t.lang === selectedLanguage
    );
    return translation ? translation.value : key;
  };

  if (!isClient) {
    return null; 
  }
  return (
    <div className="w-full h-24 fixed backdrop-blur-md bg-white bg-opacity-5 2xl:px-20 lg:px-16 md:px-10 px-10">
      <div className="w-full h-full flex items-center justify-between relative">
        <div className="flex text-sm font-medium z-20 lg:gap-12 md:gap-8 gap-4">
          
          <Link href="/">{getTranslation('nav_1')}</Link>
          <Link href="/">{getTranslation('nav_2')}</Link>
          <Link href="/">{getTranslation('nav_3')}</Link>
        </div>
        <div className="w-full absolute flex justify-center z-10">
          <Image
            width={60}
            height={50}
            src={'/images/assets/landing/logo.svg'}
            alt="logo"
            className="w-14 lg:w-16"
          />
        </div>
        <div className='flex items-center lg:gap-12 md:gap-8 gap-4 z-20'>
					<div className='flex lg:gap-5 gap-2'>
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
					</div>

					<div>
            <LanguageSelect />
					</div>
        </div>
      </div>
    </div>
  );
}
