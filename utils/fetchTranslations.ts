// utils/fetchTranslations.ts
export const fetchTranslations = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch translations");
  }
  return res.json();
};
