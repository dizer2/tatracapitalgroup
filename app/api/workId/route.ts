import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const lang = searchParams.get("lang") || "en";

  console.log("Fetching workPost with ID:", id, "and Lang:", lang);

  if (!id) {
    return NextResponse.json({ error: "Work post id is required" }, { status: 400 });
  }

  try {
    const workPost = await prisma.workPost.findUnique({
      where: { id },
    });

    if (!workPost) {
      return NextResponse.json({ error: "Work post not found" }, { status: 404 });
    }

    console.log("workPost data:", workPost);

    const filteredTranslations = workPost.translations?.filter((t) => t.lang === lang);

    if (!filteredTranslations || filteredTranslations.length === 0) {
      return NextResponse.json({ error: "Translations not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...workPost,
      translations: filteredTranslations,
    });
  } catch (error) {
    console.error("Error fetching workPost:", error);
    return NextResponse.json({ error: "Failed to fetch work post" }, { status: 500 });
  }
}
