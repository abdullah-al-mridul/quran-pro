import { useQuery } from "@tanstack/react-query";

export interface Ayah {
  number: number;
  text: string;
  translation: string;
}

export interface SurahDetails {
  surahNo: number;
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
  audio: Record<string, any>;
  ayahs: Ayah[];
}

const fetchSurahDetails = async (
  surahNo: number,
  language: string,
): Promise<SurahDetails> => {
  const response = await fetch(
    `https://quranapi.pages.dev/api/${surahNo}.json`,
  );

  if (!response.ok) {
    throw new Error("Network response for surah details was not ok");
  }
  const result = await response.json();

  const ayahs: Ayah[] = result.arabic1.map(
    (arabicText: string, index: number) => ({
      number: index + 1,
      text: arabicText,
      translation: result[language]?.[index] || result.english[index],
    }),
  );

  return {
    surahNo: result.surahNo,
    surahName: result.surahName,
    surahNameArabic: result.surahNameArabic,
    surahNameArabicLong: result.surahNameArabicLong,
    surahNameTranslation: result.surahNameTranslation,
    revelationPlace: result.revelationPlace,
    totalAyah: result.totalAyah,
    audio: result.audio,
    ayahs,
  };
};

export const useSurahDetails = (
  surahNo: number,
  language: string = "english",
) => {
  return useQuery({
    queryKey: ["surah", surahNo, language],
    queryFn: () => fetchSurahDetails(surahNo, language),
    enabled: !!surahNo,
  });
};
