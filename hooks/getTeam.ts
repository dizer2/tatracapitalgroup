'use client'

import { Api } from "@/service/api-client";
import { Team } from "@prisma/client";
import React from "react";

export const useTeam = (lang: string) => {
  const [team, setTeam] = React.useState<Team[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchTeam = React.useCallback(async () => {
    setLoading(true);
    try {
      const data = await Api.team.getAllTeamMember(lang);
      setTeam(data);
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

  return { team, loading, mutate };
};