'use client'

import { Api } from "@/service/api-client";
import { Industry } from "@prisma/client";
import React from "react";

export const useIndustries = (lang: string) => {
  const [industries, setIndustries] = React.useState<Industry[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchIndustries = async () => {
      setLoading(true);
      try {
        const data = await Api.industries.getAllIndustries(lang);
        setIndustries(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, [lang]);

  return { industries, loading };
};