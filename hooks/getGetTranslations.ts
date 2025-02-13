// hooks/useGetTranslations.ts
'use client';

import useSWR from 'swr';
import { Api } from '@/service/api-client';
import { Translation } from '@prisma/client';

const fetchTranslations = async (lang: string): Promise<Translation[]> => {
  const data = await Api.translation.getAllData(lang);
  return data;
};

export default function useGetTranslations(selectedLanguage: string) {
  const { data, error } = useSWR<Translation[]>(
    `/api/translations?lang=${selectedLanguage}`,
    () => fetchTranslations(selectedLanguage),
    { suspense: false }
  );

  return {
    translations: data || [],
    loading: !data && !error,
    error,
  };
}
