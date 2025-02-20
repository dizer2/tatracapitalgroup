import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") || "en";

  try {
    const {
      id,
      newTitle,
      newDescription,
      newWorkType,
      newLocation,
      newMoney,
      newTitle2,
      newDescription2,
      newTitle3,
      newTitle3Labels,
      newTitle4,
      newTitle4Labels,
    } = await req.json();

    console.log(newTitle);
    console.log(newDescription);
    console.log(newWorkType);
    console.log(newLocation);
    console.log(newMoney);

    if (!id) {
      return NextResponse.json({ error: "Industry ID is required" }, { status: 400 });
    }

    const work = await prisma.workPost.findUnique({
      where: { id },
    });

    if (!work) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    const existingTranslations = work.translations || [];
    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        {
          lang,
          title: newTitle,
          miniDescription: newDescription,
          workType: newWorkType,
          location: newLocation,
          money: newMoney,
          workTypeLarge: newWorkType, 
          title2: newTitle2,
          description2: newDescription2,
          title3: newTitle3,
          title3Labels: newTitle3Labels,
          title4: newTitle4,
          title4Labels: newTitle4Labels,
        },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [
        ...existingTranslations,
        {
          lang,
          title: newTitle,
          miniDescription: newDescription,
          workType: newWorkType,
          location: newLocation,
          money: newMoney,
          workTypeLarge: newWorkType, 
          title2: newTitle2,
          description2: newDescription2,
          title3: newTitle3,
          title3Labels: Array.isArray(newTitle3Labels) ? newTitle3Labels : [newTitle3Labels],
          title4: newTitle4,
          title4Labels: newTitle4Labels,
        },
      ];
    }

    const teamMembers = await prisma.workPost.update({
      where: { id },
      data: {
        translations: updatedTranslations,
      },
    });

    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error("Error updating team section:", error);
    return NextResponse.json({ error: "Failed to update team section" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  console.log("SUUUUUUUUUUu");

  try {
    const { lang,
      title,
      miniDescription,
      workType,
      location,
      money,
      title2,
      description2,
      title3,
      title3Labels,
      title4,
      title4Labels } = await req.json();

      console.log("SUUUUUUUUUUu");
      console.log(title)

      const newMember = await prisma.workPost.create({
        data: {
          translations: [{
            lang,
            title,
            miniDescription,
            workType,
            location,
            money,
            workTypeLarge: workType,
            title2,
            description2,
            title3,
            title3Labels,
            title4,
            title4Labels
          }]
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

    await prisma.workPost.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting team member:", error);
    return NextResponse.json({ error: "Failed to delete team member" }, { status: 500 });
  }
}