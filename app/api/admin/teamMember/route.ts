import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { id, newName, newPosition, newDescription, newImage } = await req.json();

    console.log("id", id);
    console.log("newName", newName);
    console.log("newPosition", newPosition);
    console.log("newDescription", newDescription);
    console.log("newImage", newImage);

   
    if (!id) {
      return NextResponse.json({ error: 'Industry ID is required' }, { status: 400 });
    }

      if (!newName || !newDescription || !newPosition) {
        return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
      }

    const team = await prisma.team.findUnique({
      where: { id },
    });


    if (!team) {
      return NextResponse.json({ error: 'Team not found' }, { status: 404 });
    }

    const existingTranslations = team.translations || [];
    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        {
          lang,
          position: newPosition,
          description: newDescription,
        },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [
        ...existingTranslations,
        {
          lang,
          position: newPosition,
          description: newDescription,
        },
      ];
    }

    const teamMembers = await prisma.team.update({
      where: { id },
      data: {
        image: newImage ?? team.image, 
        name: newName ?? team.name,
        translations: updatedTranslations,
      },
    });


    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error("Error updating team section:", error);
    return NextResponse.json({ error: 'Failed to update team section' }, { status: 500 });
  }
}
