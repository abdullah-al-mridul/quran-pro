import { useQuery } from "@tanstack/react-query";

export interface Surah {
  surahNo: number;
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
}

const fetchSurahs = async (): Promise<Surah[]> => {
  const response = await fetch("https://quranapi.pages.dev/api/surah.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.map((surah: any, index: number) => ({
    ...surah,
    surahNo: index + 1,
  }));
};

export const useSurahs = () => {
  return useQuery({
    queryKey: ["surahs"],
    queryFn: fetchSurahs,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
