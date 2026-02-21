import { useQuery } from "@tanstack/react-query";

export interface AudioInfo {
  reciter: string;
  url: string;
  originalUrl: string;
}

export type AudioFiles = Record<string, AudioInfo>;

const fetchSurahAudio = async (surahNo: number): Promise<AudioFiles> => {
  const response = await fetch(
    `https://quranapi.pages.dev/api/audio/${surahNo}.json`,
  );
  if (!response.ok) {
    throw new Error("Network response for audio was not ok");
  }
  return response.json();
};

export const useSurahAudio = (surahNo: number) => {
  return useQuery({
    queryKey: ["audio", surahNo],
    queryFn: () => fetchSurahAudio(surahNo),
    enabled: !!surahNo,
  });
};
