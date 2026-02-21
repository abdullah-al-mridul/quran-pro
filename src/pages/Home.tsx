import { Favorite, PlayArrow, MoreVert, PlayCircle } from "@/components/Icons";
import { useSurahs } from "@/hooks/useSurahs";
import { Link } from "react-router-dom";

export default function QuranPlayer() {
  const { data: surahs, isLoading } = useSurahs();
  // console.log(surahs);

  const randomIndex = surahs ? Math.floor(Math.random() * surahs.length) : 0;
  const popularSurahs = surahs
    ? [
        surahs.find((s) => s.surahNo === 1),
        surahs.find((s) => s.surahNo === 18),
        surahs.find((s) => s.surahNo === 36),
        surahs.find((s) => s.surahNo === 55),
        surahs.find((s) => s.surahNo === 67),
      ].filter(Boolean)
    : [];

  const continueListening = surahs ? surahs.slice(0, 3) : [];

  return (
    <>
      <div className="relative w-full overflow-hidden mb-12 border border-border-muted">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_79_xuG-2HtsXmoNDosZfhIyVLMWWNpR3Jg8pvFx2e_s04aLFjrz92LyePh2SBfGkZVrSbXmfG2Nrwi222c8jDEVRsjvFss-pjlulXxxFIbJcgGOulVV7TpTtOEDRAPWATsSPWjDo7SnnckhUBB0bKNuTzTIGcvjx9gILeeBGoq6Rh6n43Smtnl6s1L-8lf1yCPBcgZ0v-CjjIldf2eqhmDvJc63OgAEwbaFDJl5Um32dbE5F3zQDigT9g5wGNWTFGdfyjzxfbvaA')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
        <div className="relative p-10 md:p-14 flex flex-col items-start justify-center min-h-[400px]">
          <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Featured Recitation
          </span>
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tighter">
            {surahs && surahs[randomIndex].surahName}
          </h1>
          <h2 className="text-2xl text-accent-gold/80 mb-8 font-light italic">
            {surahs && surahs[randomIndex].surahNameTranslation}{" "}
            <span className="font-arabic not-italic text-2xl ml-4">
              {surahs && surahs[randomIndex].surahNameArabic}
            </span>
          </h2>
          <p className="max-w-lg text-slate-400 text-sm mb-10 leading-relaxed font-light">
            Immerse yourself in the tranquility of "The Most Merciful". A
            recitation known for its soothing rhythm and profound reminders of
            Allah's blessings.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 bg-accent-gold text-background-dark px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
              <PlayArrow style={{ fontSize: 20 }} />
              <span>Listen Now</span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 border border-border-muted text-white hover:bg-surface-dark transition-colors bg-background-dark">
              <Favorite />
            </button>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8 border-b border-border-muted pb-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-2 h-2 bg-accent-gold"></span>
            Continue Listening
          </h2>
          <a
            className="text-[10px] font-bold text-primary hover:text-accent-gold uppercase tracking-widest transition-colors"
            href="#"
          >
            View All
          </a>
        </div>
        {isLoading ? (
          <div className="text-primary animate-pulse py-4">
            Loading recent activity...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {continueListening.map((surah: any, idx: number) => (
              <Link
                key={surah.surahNo}
                to={`/surahs/${surah.surahNo}`}
                className={`p-6 flex items-center gap-5 border cursor-pointer transition-all ${idx === 0 ? "bg-surface-dark border-primary/30 group" : "bg-surface-darker border-border-muted hover:bg-surface-dark group"}`}
              >
                <div className="relative w-16 h-16 border border-border-muted flex-shrink-0 bg-surface-dark text-white font-arabic text-2xl flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-accent-gold/10">
                    <PlayArrow
                      className={idx === 0 ? "text-white" : "text-accent-gold"}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                    {surah.surahNo}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">
                    {surah.surahName}
                  </h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">
                    {surah.surahNameTranslation}
                  </p>
                  <div className="mt-3 w-full h-[1px] bg-border-muted">
                    <div
                      className={`h-full ${idx === 0 ? "bg-accent-gold w-[45%]" : "bg-primary w-[10%]"}`}
                    ></div>
                  </div>
                </div>
                {idx === 0 && (
                  <button className="text-primary hover:text-white transition-colors">
                    <MoreVert className="text-xl" />
                  </button>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between mb-8 border-b border-border-muted pb-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-2 h-2 bg-primary"></span>
            Popular Surahs
          </h2>
        </div>
        {isLoading ? (
          <div className="text-primary animate-pulse py-4">
            Loading popular surahs...
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border-muted border border-border-muted">
            {popularSurahs.map((surah: any) => (
              <Link
                key={surah.surahNo}
                to={`/surahs/${surah.surahNo}`}
                className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer block"
              >
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">
                    {surah.surahNo.toLocaleString("ar-EG")}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <PlayCircle
                      className="text-accent-gold"
                      style={{ fontSize: 40 }}
                    />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">
                  {surah.surahName}
                </h3>
                <p className="text-[10px] text-primary uppercase font-medium">
                  {surah.surahNameTranslation}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="h-24"></div>
    </>
  );
}
