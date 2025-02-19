'use client'

import { Api } from "@/service/api-client";
import { TeamSection } from "@prisma/client";
import React from "react";

export const useTeamSection = (lang: string) => {
  const [teamSection, setTeamSection] = React.useState<TeamSection[]>([]);
  const [loading2, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchIndustries = async () => {
      setLoading(true);
      try {
        const data = await Api.team.getTeamSection(lang);
        setTeamSection(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, [lang]);

  return { teamSection, loading2 };
};