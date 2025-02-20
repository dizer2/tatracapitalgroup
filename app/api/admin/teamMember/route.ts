import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { id, newName, newPosition, newDescription, newImage } = await req.json();

   
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

export async function POST(req: Request) {
  try {
    const { name, image, lang, position, description } = await req.json();

    const newMember = await prisma.team.create({
      data: {
        name,
        image,
        translations: {
            lang,
            position,
            description
        }
      },
      include: {
        translations: true
      }
    });

    return NextResponse.json(newMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.team.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting team member:", error);
    return NextResponse.json({ error: 'Failed to delete team member' }, { status: 500 });
  }
}
