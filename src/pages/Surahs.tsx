import { Link } from "react-router-dom";
import { PlayCircle, Loader } from "@/components/Icons";
import { useSurahs } from "@/hooks/useSurahs";
import { useAudio } from "@/context/AudioContext";

export default function SurahsPage() {
  const { data: surahs, isLoading, error } = useSurahs();
  const {
    playSurah,
    currentSurah,
    isLoading: isAudioLoading,
    loadingSurahNo,
  } = useAudio();

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-8 tracking-tighter">
        Surahs
      </h1>

      {isLoading && (
        <div className="bg-surface-darker border border-border-muted overflow-x-auto animate-pulse">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-primary uppercase bg-surface-dark border-b border-border-muted">
              <tr>
                <th className="p-4 w-16"></th>
                <th className="p-4"></th>
                <th className="p-4"></th>
                <th className="p-4 hidden sm:table-cell"></th>
                <th className="p-4 hidden md:table-cell"></th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="border-b border-border-muted">
                  <td className="p-4">
                    <div className="h-4 w-8 bg-white/5 mx-auto"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 w-32 bg-white/10 mb-2"></div>
                    <div className="h-3 w-20 bg-white/5"></div>
                  </td>
                  <td className="p-4">
                    <div className="h-4 w-24 bg-white/5"></div>
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <div className="h-4 w-8 bg-white/5"></div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="h-4 w-16 bg-white/5"></div>
                  </td>
                  <td className="p-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && (
        <p className="text-red-500 text-center my-10">Error loading surahs.</p>
      )}

      {!isLoading && !error && surahs && (
        <div className="bg-surface-darker border border-border-muted overflow-hidden">
          {/* Desktop Table View */}
          <table className="hidden lg:table w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-primary uppercase bg-surface-dark border-b border-border-muted">
              <tr>
                <th scope="col" className="p-4 w-16 text-center">
                  #
                </th>
                <th scope="col" className="p-4">
                  Name
                </th>
                <th scope="col" className="p-4">
                  Translation
                </th>
                <th scope="col" className="p-4">
                  Ayahs
                </th>
                <th scope="col" className="p-4">
                  Revelation
                </th>
                <th scope="col" className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {surahs.map((surah) => (
                <tr
                  key={surah.surahNo}
                  className="border-b border-border-muted hover:bg-surface-dark group transition-colors"
                >
                  <td className="p-4 w-16 text-center font-mono text-accent-gold">
                    {surah.surahNo}
                  </td>
                  <td className="p-4">
                    <Link
                      to={`/surahs/${surah.surahNo}`}
                      className="group-hover:text-accent-gold transition-colors"
                    >
                      <div className="flex flex-col">
                        <span className="text-white font-bold">
                          {surah.surahName}
                        </span>
                        <span className="font-arabic text-lg text-primary group-hover:text-accent-gold/70 transition-colors">
                          {surah.surahNameArabic}
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td className="p-4">{surah.surahNameTranslation}</td>
                  <td className="p-4">{surah.totalAyah}</td>
                  <td className="p-4">{surah.revelationPlace}</td>
                  <td className="p-4 text-right">
                    <button
                      className="text-primary group-hover:text-accent-gold transition-colors opacity-0 group-hover:opacity-100"
                      onClick={() =>
                        playSurah(
                          surah.surahNo,
                          surah.surahName,
                          surah.surahNameArabic,
                        )
                      }
                    >
                      {isAudioLoading &&
                      (loadingSurahNo === surah.surahNo ||
                        (!loadingSurahNo &&
                          currentSurah?.surahNo === surah.surahNo)) ? (
                        <Loader
                          className="animate-spin text-accent-gold"
                          style={{ fontSize: 24 }}
                        />
                      ) : (
                        <PlayCircle style={{ fontSize: 24 }} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="lg:hidden grid grid-cols-1 gap-px bg-border-muted">
            {surahs.map((surah) => (
              <div
                key={surah.surahNo}
                className="bg-surface-dark p-4 flex items-center justify-between group"
              >
                <Link
                  to={`/surahs/${surah.surahNo}`}
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-surface-darker text-accent-gold font-mono text-xs border border-border-muted shrink-0">
                    {surah.surahNo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-bold truncate">
                        {surah.surahName}
                      </h4>
                      <span className="font-arabic text-primary">
                        {surah.surahNameArabic}
                      </span>
                    </div>
                    <p className="text-[10px] text-primary uppercase tracking-widest truncate">
                      {surah.surahNameTranslation}
                    </p>
                  </div>
                </Link>
                <button
                  className="ml-4 p-2 text-primary hover:text-accent-gold transition-colors"
                  onClick={() =>
                    playSurah(
                      surah.surahNo,
                      surah.surahName,
                      surah.surahNameArabic,
                    )
                  }
                >
                  {isAudioLoading &&
                  (loadingSurahNo === surah.surahNo ||
                    (!loadingSurahNo &&
                      currentSurah?.surahNo === surah.surahNo)) ? (
                    <Loader
                      className="animate-spin text-accent-gold"
                      style={{ fontSize: 24 }}
                    />
                  ) : (
                    <PlayCircle style={{ fontSize: 24 }} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
