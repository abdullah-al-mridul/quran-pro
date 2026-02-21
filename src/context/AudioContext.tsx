import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

interface CurrentSurah {
  surahNo: number;
  surahName: string;
  reciter: string;
}

interface AudioContextType {
  currentSurah: CurrentSurah | null;
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  volume: number;
  recentSurahs: CurrentSurah[];
  selectedReciterId: string;
  isMaximized: boolean;
  availableReciters: { id: string; name: string }[];
  setReciter: (id: string) => void;
  toggleMaximize: () => void;
  playSurah: (surahNo: number, surahName: string) => Promise<void>;
  togglePlay: () => void;
  seek: (percent: number) => void;
  setVolume: (vol: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const HISTORY_KEY = "quran_pro_recent_surahs";
const RECITER_KEY = "quran_pro_selected_reciter";

const RECITERS_MAP = [
  { id: "1", name: "Mishary Rashid Al Afasy" },
  { id: "2", name: "Abu Bakr Al Shatri" },
  { id: "3", name: "Nasser Al Qatami" },
  { id: "4", name: "Yasser Al Dosari" },
  { id: "5", name: "Hani Ar Rifai" },
];

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSurah, setCurrentSurah] = useState<CurrentSurah | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [selectedReciterId, setSelectedReciterId] = useState<string>(() => {
    return localStorage.getItem(RECITER_KEY) || "1";
  });
  const [recentSurahs, setRecentSurahs] = useState<CurrentSurah[]>(() => {
    const saved = localStorage.getItem(HISTORY_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(recentSurahs));
  }, [recentSurahs]);

  useEffect(() => {
    localStorage.setItem(RECITER_KEY, selectedReciterId);
    // If we're already playing something, restart it with the new reciter
    if (currentSurah && isPlaying) {
      playSurah(currentSurah.surahNo, currentSurah.surahName);
    }
  }, [selectedReciterId]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("waiting", handleWaiting);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("waiting", handleWaiting);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playSurah = async (surahNo: number, surahName: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://quranapi.pages.dev/api/audio/${surahNo}.json`,
      );
      const audioData = await response.json();
      const audioInfo = audioData[selectedReciterId] || audioData["1"];

      if (audioRef.current) {
        audioRef.current.src = audioInfo.url;
        await audioRef.current.play();

        const newSurah = {
          surahNo,
          surahName,
          reciter: audioInfo.reciter,
        };

        setCurrentSurah(newSurah);
        setIsPlaying(true);
        setIsMaximized(true);

        setRecentSurahs((prev) => {
          const filtered = prev.filter((s) => s.surahNo !== surahNo);
          const updated = [newSurah, ...filtered].slice(0, 10);
          return updated;
        });
      }
    } catch (error) {
      console.error("Failed to play audio:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const setReciter = (id: string) => {
    setSelectedReciterId(id);
  };

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentSurah) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const seek = (percent: number) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const time = (percent / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
  };

  return (
    <AudioContext.Provider
      value={{
        currentSurah,
        isPlaying,
        isLoading,
        progress,
        currentTime,
        duration,
        volume,
        recentSurahs,
        selectedReciterId,
        isMaximized,
        availableReciters: RECITERS_MAP,
        setReciter,
        toggleMaximize,
        playSurah,
        togglePlay,
        seek,
        setVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
