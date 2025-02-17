import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
	const { searchParams} = new URL(req.url);
	const lang = searchParams.get('lang') || 'en';

	try {
		const industriesArray = await prisma.industry.findMany({
			where: {
				translations: {
					some: {
						lang: lang
					}
				}
			}
		})

		return NextResponse.json(industriesArray);
	} catch (error) {
		console.error(error);
		return NextResponse.json({ error: 'Failed to fetch industries'}, { status: 500})
	} 
}