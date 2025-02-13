'use client';

import { Select, SelectContent, SelectGroup, SelectTrigger } from '@/components/ui/select';
import Image from 'next/image';
import { SelectItem } from './SelectItem';
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSelect() {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const LANGUAGES = {
    en: '/images/assets/landing/eng-flag.svg',
    sk: '/images/assets/landing/svk-flag.svg',
  };

  const handleSelectChange = (value: string) => {
    console.log('Selected language:', value);
    setSelectedLanguage(value);
  };

  if (!isClient) {
    return null; 
  }
  return (
    <div>
      <Select value={selectedLanguage} onValueChange={handleSelectChange}>
        <SelectTrigger>
          <Image
            src={selectedLanguage === 'en' ? LANGUAGES.en : LANGUAGES.sk}
            width={24}
            height={24}
            alt="flag"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(LANGUAGES)
              .filter(([key]) => key !== selectedLanguage)
              .map(([key, src]) => (
                <SelectItem key={key} value={key}>
                  <Image src={src} width={24} height={24} alt="flag" />
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
