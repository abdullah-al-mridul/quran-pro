import { useParams } from "react-router-dom";
import {
  PlayArrow,
  PlayCircle,
  Share,
  BookmarkBorder,
  Loader,
} from "@/components/Icons";
import { useSurahDetails } from "@/hooks/useSurahDetails";
import { useAudio } from "@/context/AudioContext";
import {
  useTranslation,
  TranslationLanguage,
} from "@/context/TranslationContext";

export default function SurahDetailPage() {
  const {
    playSurah,
    currentSurah,
    isLoading: isAudioLoading,
    loadingSurahNo,
  } = useAudio();
  const { language, setLanguage } = useTranslation();
  const params = useParams();
  const surahId = Number(params.surahId);

  const { data: surah, isLoading, error } = useSurahDetails(surahId, language);

  if (isLoading)
    return (
      <div className="w-full pt-10 animate-pulse">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="h-10 w-48 bg-white/10 mb-4"></div>
          <div className="h-14 w-64 bg-accent-gold/10 my-4"></div>
          <div className="h-6 w-32 bg-white/5 mb-8"></div>
          <div className="flex gap-4">
            <div className="h-3 w-16 bg-white/5"></div>
            <div className="h-3 w-16 bg-white/5"></div>
          </div>
          <div className="h-12 w-40 bg-accent-gold/20 mt-8"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-surface-darker/50 border border-border-muted p-8"
            >
              <div className="flex justify-between mb-8">
                <div className="h-6 w-12 bg-white/5"></div>
                <div className="flex gap-4">
                  <div className="h-6 w-6 bg-white/5"></div>
                  <div className="h-6 w-6 bg-white/5"></div>
                </div>
              </div>
              <div className="h-10 w-3/4 bg-white/10 ml-auto mb-6"></div>
              <div className="h-4 w-full bg-white/5 mb-2"></div>
              <div className="h-4 w-2/3 bg-white/5"></div>
            </div>
          ))}
        </div>
      </div>
    );
  if (error || !surah)
    return (
      <div className="flex justify-center items-center h-full text-red-500 w-full pt-20">
        <p>Failed to load Surah details.</p>
      </div>
    );

  return (
    <>
      <div className="flex flex-col items-center text-center mb-8 md:mb-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">
          {surah.surahName}
        </h1>
        <h2 className="font-arabic text-3xl md:text-5xl text-accent-gold/90 my-3 md:my-4">
          {surah.surahNameArabicLong || surah.surahNameArabic}
        </h2>
        <p className="text-sm md:text-lg text-slate-400 font-light max-w-lg">
          {surah.surahNameTranslation}
        </p>
        <div className="flex items-center gap-3 md:gap-4 mt-2 text-[10px] md:text-xs text-primary uppercase font-bold tracking-widest">
          <span>{surah.revelationPlace}</span>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <span>{surah.totalAyah} Ayahs</span>
        </div>
        <button
          className="flex items-center gap-3 bg-accent-gold text-background-dark px-6 md:px-8 py-2 md:py-3 font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all mt-6 md:mt-8 shrink-0"
          onClick={() =>
            playSurah(surah.surahNo, surah.surahName, surah.surahNameArabic)
          }
          disabled={isAudioLoading}
        >
          {isAudioLoading &&
          (loadingSurahNo === surah.surahNo ||
            (!loadingSurahNo && currentSurah?.surahNo === surah.surahNo)) ? (
            <Loader className="animate-spin text-lg md:text-xl" />
          ) : (
            <PlayArrow className="text-lg md:text-xl" />
          )}
          <span>Play Surah</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-border-muted pb-6 gap-6">
        <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
          <div className="w-10 h-10 rounded-full border border-accent-gold/30 flex items-center justify-center text-accent-gold font-bold shrink-0">
            {surah.surahNo}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight truncate">
              {surah.surahName}
            </h2>
            <p className="text-[10px] md:text-xs text-primary font-medium uppercase tracking-widest mt-1">
              {surah.ayahs.length} Ayahs • {surah.revelationPlace}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4 w-full md:w-auto">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as TranslationLanguage)}
            className="flex-1 md:flex-none bg-surface-dark border border-border-muted text-white text-[10px] md:text-xs px-3 md:px-4 py-2 outline-none focus:border-accent-gold transition-colors"
          >
            <option value="english">English</option>
            <option value="bengali">Bengali</option>
            <option value="urdu">Urdu</option>
            <option value="turkish">Turkish</option>
            <option value="uzbek">Uzbek</option>
          </select>

          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <button className="p-2 text-primary hover:text-white transition-colors">
              <Share className="text-lg md:text-xl" />
            </button>
            <button className="p-2 text-primary hover:text-white transition-colors">
              <BookmarkBorder className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {surah.ayahs &&
          surah.ayahs.map((ayat, index) => (
            <div
              key={index}
              className="bg-surface-darker/50 border border-border-muted p-4 md:p-8"
            >
              <div className="flex justify-between items-start mb-4 md:mb-8">
                <span className="font-mono text-accent-gold text-base md:text-lg">
                  {surah.surahNo}:{ayat.number}
                </span>
                <div className="flex items-center gap-3 md:gap-4 text-primary">
                  <button className="hover:text-accent-gold transition-colors">
                    <PlayCircle className="text-xl md:text-2xl" />
                  </button>
                  <button className="hover:text-accent-gold transition-colors">
                    <Share className="text-lg md:text-xl" />
                  </button>
                  <button className="hover:text-accent-gold transition-colors">
                    <BookmarkBorder className="text-xl md:text-2xl" />
                  </button>
                </div>
              </div>
              <p
                className="text-right font-arabic text-2xl md:text-4xl text-slate-200 mb-4 md:mb-8 leading-loose md:leading-relaxed"
                dir="rtl"
              >
                {ayat.text}
              </p>
              <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
                {ayat.translation}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
