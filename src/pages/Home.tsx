import {
  Favorite,
  PlayArrow,
  MoreVert,
  PlayCircle,
  Loader,
  FavoriteBorder,
  History,
  ArrowForward,
} from "@/components/Icons";
import { useSurahs } from "@/hooks/useSurahs";
import { Link } from "react-router-dom";
import { useAudio } from "@/context/AudioContext";
import { useMemo } from "react";

export default function Home() {
  const { data: surahs, isLoading: isSurahsLoading } = useSurahs();
  const {
    playSurah,
    recentSurahs,
    currentSurah,
    isLoading: isAudioLoading,
    loadingSurahNo,
  } = useAudio();

  const featuredSurah = useMemo(() => {
    if (!surahs || surahs.length === 0) return null;
    return surahs[Math.floor(Math.random() * surahs.length)];
  }, [surahs]);

  const popularSurahs = useMemo(() => {
    if (!surahs) return [];
    // first 20 surahs
    return surahs.slice(0, 20);
  }, [surahs]);

  const continueListening = recentSurahs.slice(0, 4);

  if (isSurahsLoading) {
    return (
      <div className="space-y-12 animate-pulse">
        <div className="h-[300px] md:h-[400px] w-full bg-surface-dark border border-border-muted"></div>
        <div className="space-y-6">
          <div className="h-6 w-48 bg-surface-dark"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-24 bg-surface-dark border border-border-muted"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section / Featured Surah */}
      {featuredSurah && (
        <section>
          <div className="bg-surface-dark border border-border-muted relative group overflow-hidden">
            <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
              <div className="w-full md:w-1/2 relative overflow-hidden h-[250px] sm:h-[300px] md:h-auto bg-surface-darker flex items-center justify-center border-b md:border-b-0 md:border-r border-border-muted group/hero">
                <div className="absolute inset-0 bg-islamic-pattern opacity-10 group-hover/hero:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-dark via-transparent to-transparent z-10"></div>
                <span className="font-arabic text-7xl sm:text-8xl md:text-9xl text-primary/40 group-hover/hero:text-accent-gold/50 transition-all duration-700 relative z-0 transform group-hover/hero:scale-110">
                  {featuredSurah.surahNameArabic}
                </span>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative z-10">
                <span className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.3em] mb-4 block">
                  Featured Selection
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic leading-tight">
                  {featuredSurah.surahName}
                </h2>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs text-primary font-bold uppercase tracking-widest border-r border-border-muted pr-4">
                    Surah No • {featuredSurah.surahNo}
                  </span>
                  <span className="text-xs text-primary font-bold uppercase tracking-widest">
                    {featuredSurah.totalAyah} Ayahs
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      playSurah(
                        featuredSurah.surahNo,
                        featuredSurah.surahName,
                        featuredSurah.surahNameArabic,
                      )
                    }
                    disabled={
                      isAudioLoading &&
                      (loadingSurahNo === featuredSurah.surahNo ||
                        (!loadingSurahNo &&
                          currentSurah?.surahNo === featuredSurah.surahNo))
                    }
                    className="flex-1 md:flex-none px-6 md:px-8 py-3 bg-accent-gold text-background-dark font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group/btn disabled:opacity-70"
                  >
                    {isAudioLoading &&
                    (loadingSurahNo === featuredSurah.surahNo ||
                      (!loadingSurahNo &&
                        currentSurah?.surahNo === featuredSurah.surahNo)) ? (
                      <Loader className="animate-spin text-xl" />
                    ) : (
                      <PlayArrow className="text-xl" />
                    )}
                    Listen Now
                  </button>
                  <button className="w-12 h-12 border border-border-muted flex items-center justify-center text-white hover:bg-white hover:text-background-dark transition-all shrink-0">
                    <FavoriteBorder />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Continue Listening Section (Recent Surahs) */}
      {continueListening.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm md:text-lg font-bold text-white uppercase tracking-widest">
              Continue Listening
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {continueListening.map((item) => (
              <div
                key={item.surahNo}
                className="bg-surface-dark p-4 md:p-5 border border-border-muted group hover:border-accent-gold transition-all relative overflow-hidden"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 flex items-center justify-center border border-primary/20 shrink-0">
                    <History className="text-accent-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate">
                      {item.surahName}
                    </h4>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-tighter truncate mt-1">
                      {item.reciter}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      playSurah(
                        item.surahNo,
                        item.surahName,
                        item.surahNameArabic,
                      )
                    }
                    disabled={
                      isAudioLoading &&
                      (loadingSurahNo === item.surahNo ||
                        (!loadingSurahNo &&
                          currentSurah?.surahNo === item.surahNo))
                    }
                    className="w-8 h-8 rounded-full bg-accent-gold text-background-dark flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-all hover:bg-white disabled:opacity-70 shrink-0"
                  >
                    {isAudioLoading &&
                    (loadingSurahNo === item.surahNo ||
                      (!loadingSurahNo &&
                        currentSurah?.surahNo === item.surahNo)) ? (
                      <Loader className="animate-spin text-sm" />
                    ) : (
                      <PlayArrow className="text-sm" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Popular Surahs Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm md:text-lg font-bold text-white uppercase tracking-[0.2em]">
            Popular Highlights
          </h3>
          <Link
            to="/surahs"
            className="text-[10px] font-bold text-accent-gold uppercase tracking-widest hover:text-white transition-all flex items-center gap-2"
          >
            Explore All <ArrowForward style={{ fontSize: 14 }} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {popularSurahs.map((surah) => (
            <div
              key={surah.surahNo}
              className="bg-surface-dark border border-border-muted p-4 md:p-6 hover:border-accent-gold transition-all group flex flex-col h-full relative"
            >
              <div className="absolute top-4 right-4 text-[10px] font-bold text-primary opacity-30 group-hover:opacity-100 transition-opacity">
                {surah.surahNo.toString().padStart(3, "0")}
              </div>
              <div className="mb-6">
                <Link to={`/surahs/${surah.surahNo}`}>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1 hover:text-accent-gold transition-colors">
                    {surah.surahName}
                  </h4>
                </Link>
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                  {surah.totalAyah} Ayahs
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-border-muted/50">
                <div className="text-lg md:text-xl font-arabic text-primary/80">
                  {surah.surahNameArabic}
                </div>
                <button
                  onClick={() =>
                    playSurah(
                      surah.surahNo,
                      surah.surahName,
                      surah.surahNameArabic,
                    )
                  }
                  disabled={
                    isAudioLoading &&
                    (loadingSurahNo === surah.surahNo ||
                      (!loadingSurahNo &&
                        currentSurah?.surahNo === surah.surahNo))
                  }
                  className="w-10 h-10 bg-surface-darker border border-border-muted flex items-center justify-center text-white group-hover:bg-accent-gold group-hover:text-background-dark group-hover:border-accent-gold transition-all disabled:opacity-70"
                >
                  {isAudioLoading &&
                  (loadingSurahNo === surah.surahNo ||
                    (!loadingSurahNo &&
                      currentSurah?.surahNo === surah.surahNo)) ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <PlayArrow />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
