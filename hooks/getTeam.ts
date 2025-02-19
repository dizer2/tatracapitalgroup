'use client'

import { Api } from "@/service/api-client";
import { Team } from "@prisma/client";
import React from "react";

export const useTeam = (lang: string) => {
  const [team, setTeam] = React.useState<Team[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchIndustries = async () => {
      setLoading(true);
      try {
        const data = await Api.team.getAllTeamMember(lang);
        setTeam(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, [lang]);

  return { team, loading };
};