'use client'

import { Api } from "@/service/api-client";
import { WorkPostSection } from "@prisma/client";
import React from "react";

export const useWorkSection = (lang: string) => {
  const [workSection, setWorkSection] = React.useState<WorkPostSection[]>([]);
  const [loading2, setLoading2] = React.useState(true);

  React.useEffect(() => {
    const fetchIndustries = async () => {
      setLoading2(true);
      try {
        const data = await Api.work.getAllWorkSection(lang);
        setWorkSection(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading2(false);
      }
    };

    fetchIndustries();
  }, [lang]);

  return { workSection, loading2 };
};