import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { title1, description1, title2, description2, title3, description3 } = await req.json();

    const aboutUs = await prisma.aboutUs.findMany();

    if (!aboutUs || aboutUs.length === 0) {
      return NextResponse.json({ error: 'About Us data not found' }, { status: 404 });
    }

    const existingTranslations = aboutUs[0].translations || [];
    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        { lang, title1, description1, title2, description2, title3, description3 },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [
        ...existingTranslations,
        { lang, title1, description1, title2, description2, title3, description3 },
      ];
    }

   
    const updatedAboutUs = await prisma.aboutUs.update({
      where: { id: aboutUs[0].id },  // Assuming only one record exists, you can modify this if necessary
      data: {
        translations: updatedTranslations,
      },
    });

    return NextResponse.json(updatedAboutUs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update About Us section' }, { status: 500 });
  }
}
