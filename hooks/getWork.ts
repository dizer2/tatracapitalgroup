'use client'

import { Api } from "@/service/api-client";
import { WorkPost } from "@prisma/client";
import React from "react";

export const useWork = (lang: string) => {
  const [work, setWork] = React.useState<WorkPost[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchTeam = React.useCallback(async () => {
    setLoading(true);
    try {
      const data = await Api.work.getAllWorkPost(lang);

      setWork(data);
    } catch (error) {
      console.error("Error fetching team members:", error);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  React.useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  // Add mutate function to refresh data
  const mutate = React.useCallback(async () => {
    await fetchTeam();
  }, [fetchTeam]);

  return { work, loading, mutate };
};