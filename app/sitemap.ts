import { WorkPost } from "@prisma/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/work`);
  
  if (!response.ok) {
    console.error("Failed to fetch work posts:", response.statusText);
    return [];
  }
  
  const data = await response.json();
  
	console.log(data[0].id);
	const work: WorkPost[] = Array.isArray(data) ? data : data.work || [];

  const postEntries = work.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/career/${post.id}`,
    lastmod: new Date(post.updatedAt).toISOString(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/career`,
    },
    ...postEntries,
  ];
}
