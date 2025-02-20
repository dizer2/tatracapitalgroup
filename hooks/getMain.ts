'use client'

import { Api } from "@/service/api-client";
import { MainInfo } from "@prisma/client";
import React from "react";

export const useMain = (lang: string) => {
	const [mainInfo, setMainInfo] = React.useState<MainInfo[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchIndustries = async () => {
			setLoading(true);
			try {
				const data = await Api.main.mainInfo(lang);
				setMainInfo(data);
			} catch (error) {
				console.error("Error fetching industries:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchIndustries();
	}, [lang]);

	return { mainInfo, loading };
};