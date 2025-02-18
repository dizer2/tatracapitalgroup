import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  console.log("START");

  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'en';

  try {
    const { title, description, id, image } = await req.json();
    console.log('Received data:', title, description, image, id);

    if (!id) {
      return NextResponse.json({ error: 'Industry ID is required' }, { status: 400 });
    }

    // Validate required fields (title and description)
    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    // Fetch the current industry document by id
    const industry = await prisma.industry.findUnique({
      where: { id },
    });

    console.log('Industry:', industry);

    if (!industry) {
      return NextResponse.json({ error: 'Industry not found' }, { status: 404 });
    }

    const existingTranslations = industry.translations || [];


    const translationIndex = existingTranslations.findIndex((t) => t.lang === lang);

    let updatedTranslations;
    if (translationIndex > -1) {
      updatedTranslations = [
        ...existingTranslations.slice(0, translationIndex),
        { lang, title, description },
        ...existingTranslations.slice(translationIndex + 1),
      ];
    } else {
      updatedTranslations = [...existingTranslations, { lang, title, description }];
    }

    // Ensure the image is only updated if a new image is provided
    const updatedIndustry = await prisma.industry.update({
      where: { id },
      data: {
        image: image ?? industry.image, 
        translations: updatedTranslations,
      },
    });

    return NextResponse.json(updatedIndustry);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update industry' }, { status: 500 });
  }
}
