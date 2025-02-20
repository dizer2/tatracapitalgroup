'use client'

import { Api } from "@/service/api-client";
import { WorkPost } from "@prisma/client";
import React from "react";

export const useWorkId = (lang: string, id: string) => {
  const [workId, setWorkId] = React.useState<WorkPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchIndustries = async () => {
      setLoading(true);
      try {
        const data = await Api.work.getWorkById(lang, id);
        setWorkId(data);
      } catch (error) {
        console.error("Error wrok by ID:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, [lang, id]);

  return { workId, loading };
};