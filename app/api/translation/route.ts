// pages/api/translations.ts
import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const translationsArray = await prisma.translation.findMany({
      where: { lang },
    });

    return NextResponse.json(translationsArray);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch translations' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
