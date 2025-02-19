'use client'

import { Api } from "@/service/api-client";
import React from "react";

export const usePutIndustries = () => {
  const [loading, setLoading] = React.useState(false);

  const updateIndustries = async (
    lang: string,
    id: string ,
    title: string,
    image: string,
    description: string,
    titleSection: string
  ) => {
    setLoading(true);
    try {
      const data = await Api.industries.getIndustryById(id, lang, title, description, image, titleSection);
      console.log("Updated industry:", data);
      return data;
    } catch (error) {
      console.error("Error updating industry:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { updateIndustries, loading };
};