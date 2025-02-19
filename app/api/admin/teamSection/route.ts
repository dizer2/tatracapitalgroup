import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { updatedTitle, cardPosition, cardButtonText, cardNormalButtonText, cardButtonCloseText, newImage } = await req.json();

    const teamSections = await prisma.teamSection.findMany();
    if (!teamSections || teamSections.length === 0) {
      return NextResponse.json({ error: 'Team section not found' }, { status: 404 });
    }
    const teamSection = teamSections[0];

    const existingTranslations = teamSection.translations || [];
    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        {
          lang,
          title: updatedTitle,
          position: cardPosition,
          buttonText: cardButtonText,
          buttonCard: cardNormalButtonText,
          buttonClose: cardButtonCloseText
        },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [
        ...existingTranslations,
        {
          lang,
          title: updatedTitle,
          position: cardPosition,
          buttonText: cardButtonText,
          buttonCard: cardNormalButtonText,
          buttonClose: cardButtonCloseText
        },
      ];
    }

    const updatedTeamSection = await prisma.teamSection.update({
      where: { id: teamSection.id },
      data: {
        image: newImage ?? teamSection.image,
        translations: updatedTranslations,
      },
    });

    return NextResponse.json(updatedTeamSection);
  } catch (error) {
    console.error("Error updating team section:", error);
    return NextResponse.json({ error: 'Failed to update team section' }, { status: 500 });
  }
}
