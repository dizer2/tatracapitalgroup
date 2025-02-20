'use client'

import { Api } from '@/service/api-client';
import React from 'react';

export const usePutMain = () => {
  const [loading, setLoading] = React.useState(false);

  const updateMainInfo = async (
    lang: string,
    updatedTitle: string,
    updateImage: string,
    updatePhone: string,
    updateEmail: string,
    socialLinks: { link: string; icon: string }[]
  ) => {
    setLoading(true);
    try {
      const data = await Api.main.putMainInfo(
        lang,
        updatedTitle,
        updateImage,
        updatePhone,
        updateEmail,
        socialLinks
      );
      console.log('Updated main info:', data);
      return data;
    } catch (error) {
      console.error('Error updating main info:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateMainInfo, loading };
};
