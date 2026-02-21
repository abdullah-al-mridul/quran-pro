import { useParams } from "react-router-dom";
import {
  PlayArrow,
  PlayCircle,
  Share,
  BookmarkBorder,
} from "@/components/Icons";
import { useSurahDetails } from "@/hooks/useSurahDetails";

export default function SurahDetailPage() {
  const params = useParams();
  const surahId = Number(params.surahId);

  const { data: surah, isLoading, error } = useSurahDetails(surahId);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full text-primary animate-pulse w-full pt-20">
        <p>Loading Surah...</p>
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
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold text-white">{surah.surahName}</h1>
        <h2 className="font-arabic text-5xl text-accent-gold/90 my-4">
          {surah.surahNameArabicLong || surah.surahNameArabic}
        </h2>
        <p className="text-lg text-slate-400 font-light">
          {surah.surahNameTranslation}
        </p>
        <div className="flex items-center gap-4 mt-2 text-xs text-primary uppercase font-bold tracking-widest">
          <span>{surah.revelationPlace}</span>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <span>{surah.totalAyah} Ayahs</span>
        </div>
        <button className="flex items-center gap-3 bg-accent-gold text-background-dark px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white transition-all mt-8">
          <PlayArrow style={{ fontSize: 20 }} />
          <span>Play Surah</span>
        </button>
      </div>

      <div className="space-y-4">
        {surah.ayahs &&
          surah.ayahs.map((ayat, index) => (
            <div
              key={index}
              className="bg-surface-darker/50 border border-border-muted p-6"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-accent-gold text-lg">
                  {surah.surahNo}:{ayat.number}
                </span>
                <div className="flex items-center gap-4 text-primary">
                  <button className="hover:text-accent-gold transition-colors">
                    <PlayCircle style={{ fontSize: 24 }} />
                  </button>
                  <button className="hover:text-accent-gold transition-colors">
                    <Share style={{ fontSize: 20 }} />
                  </button>
                  <button className="hover:text-accent-gold transition-colors">
                    <BookmarkBorder style={{ fontSize: 22 }} />
                  </button>
                </div>
              </div>
              <p
                className="text-right font-arabic text-3xl text-slate-200 my-6 leading-relaxed"
                dir="rtl"
              >
                {ayat.text}
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                {ayat.translation}
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
