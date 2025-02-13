import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const translations = await prisma.translation.findMany();
    return NextResponse.json(translations);
  } catch (error) {
		console.log(error);
    return NextResponse.json({ error: "Failed to fetch translations" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
