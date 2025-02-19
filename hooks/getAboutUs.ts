'use client'

import { Api } from "@/service/api-client";
import { AboutUs } from "@prisma/client";
import React from "react";

export const useAbout = (lang: string) => {
	const [aboutUs, setAboutUs] = React.useState<AboutUs[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchIndustries = async () => {
			setLoading(true);
			try {
				const data = await Api.about.getAllAboutUsData(lang);
				setAboutUs(data);
			} catch (error) {
				console.error("Error fetching industries:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchIndustries();
	}, [lang]);

	return { aboutUs, loading };
};