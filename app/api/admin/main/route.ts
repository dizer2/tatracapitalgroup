import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { 
      updatedTitle,
      updateImage,
      updatePhone,
      updateEmail,
      socialLinks 
    } = await req.json();

    const mainSection = await prisma.mainInfo.findMany();

    if (!mainSection || mainSection.length === 0) {
      return NextResponse.json({ error: 'Main Info not found' }, { status: 404 });
    }

    // Handle translations update
    const existingTranslations = mainSection[0].translations || [];
    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        { 
          ...existingTranslations[translationIndex],
          title: updatedTitle || existingTranslations[translationIndex].title
        },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [
        ...existingTranslations,
        { 
          lang,
          title: updatedTitle,
          nav1: existingTranslations[0]?.nav1 || '',
          nav2: existingTranslations[0]?.nav2 || ''
        }
      ];
    }

    // Update main info
    const updatedMainInfo = await prisma.mainInfo.update({
      where: {
        id: mainSection[0].id
      },
      data: {
        logo: updateImage || mainSection[0].logo,
        phone: updatePhone || mainSection[0].phone,
        email: updateEmail || mainSection[0].email,
        socialMedia: socialLinks || mainSection[0].socialMedia,
        translations: updatedTranslations
      },
    });

    return NextResponse.json(updatedMainInfo);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update Main Info' }, { status: 500 });
  }
}