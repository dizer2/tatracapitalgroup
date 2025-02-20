'use client'

import { Api } from '@/service/api-client';
import React from 'react';

export const usePutWork = () => {
  const [loading, setLoading] = React.useState(false);

  const updateWorkAdmin = async (
    lang: string,
    id: string,
    newTitle: string | undefined,
    newDescription: string | undefined,
    newWorkType: string | undefined,
    newLocation: string | undefined,
    newMoney: string | undefined,
    newTitle2: string | undefined,
    newDescription2: string | undefined,
    newTitle3: string | undefined,
    newTitle3Labels: string[] | undefined,
    newTitle4: string | undefined,
    newTitle4Labels: string[] | undefined
  ) => {
    setLoading(true);
    try {
      const data = await Api.work.getAdminWork(
        lang,
				id,
        newTitle,
        newDescription,
        newWorkType,
        newLocation,
        newMoney,
        newTitle2,
        newDescription2,
        newTitle3,
        newTitle3Labels,
        newTitle4,
        newTitle4Labels
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

  return { updateWorkAdmin, loading };
};
