'use client'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectTrigger,
} from '@/components/ui/select'
import Image from 'next/image'
import { SelectItem } from './SelectItem'
import React, { useEffect } from 'react'
import { Api } from '@/service/api-client'
import { Translation } from '@/types/translation' 

interface LanguageSelectProps {
	setTranslations: React.Dispatch<React.SetStateAction<Translation[]>>
	translations: Translation[]
	setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
	selectedLanguage: string
}

export default function LanguageSelect({setTranslations, translations, setSelectedLanguage, selectedLanguage}: LanguageSelectProps) {


	const LANGUAGES = {
		en: "/images/assets/landing/eng-flag.svg",
		sk: "/images/assets/landing/svk-flag.svg",
	}

	const handleSelectChange = (value: string) => {
    console.log("Selected language:", value)
    setSelectedLanguage(value)
  }


	useEffect(() => {
		const fetchTranslations = async () => {
			try {
				const response = await Api.translation.getAllData();
				setTranslations(response);
				console.log("Translations:", response);
				console.log(translations);
			} catch (error) { 
        console.error("Error fetching TRANLSATIONS:", error);
			}
		}

		fetchTranslations();
	}, []);

	return (
		<div>
			<Select value={selectedLanguage} onValueChange={handleSelectChange}>
				<SelectTrigger>
					<Image
						src={selectedLanguage === "en" ? LANGUAGES.en : LANGUAGES.sk}
						width={24}
						height={24}
						alt='flag'
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
	)
}
