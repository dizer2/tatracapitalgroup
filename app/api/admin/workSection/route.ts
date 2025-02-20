import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { title,
      description,
      buttonCardText,
      buttonApplyText } = await req.json();

    const workSection = await prisma.workPostSection.findMany();

    if (!workSection || workSection.length === 0) {
      return NextResponse.json({ error: 'About Us data not found' }, { status: 404 });
    }

    const existingTranslations = workSection[0].translations || [];
    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        { lang,
          title,
          description,
          buttonCardText,
          buttonApplyText },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [
        ...existingTranslations,
        { lang, 
          title,
          description,
          buttonCardText,
          buttonApplyText },
      ];
    }

   
    const updatedAboutUs = await prisma.workPostSection.update({
      where: { id: workSection[0].id }, 
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
