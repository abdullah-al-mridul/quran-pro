import { Link } from "react-router-dom";
import { PlayCircle } from "@/components/Icons";
import { useSurahs } from "@/hooks/useSurahs";

export default function SurahsPage() {
  const { data: surahs, isLoading, error } = useSurahs();

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-8 tracking-tighter">
        Surahs
      </h1>

      {isLoading && (
        <p className="text-primary text-center my-10 animate-pulse text-lg">
          Loading surahs...
        </p>
      )}
      {error && (
        <p className="text-red-500 text-center my-10">Error loading surahs.</p>
      )}

      {!isLoading && !error && surahs && (
        <div className="bg-surface-darker border border-border-muted overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
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
                <th scope="col" className="p-4 hidden sm:table-cell">
                  Ayahs
                </th>
                <th scope="col" className="p-4 hidden md:table-cell">
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
                  <td className="p-4 hidden sm:table-cell">
                    {surah.totalAyah}
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    {surah.revelationPlace}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-primary group-hover:text-accent-gold transition-colors opacity-0 group-hover:opacity-100">
                      <PlayCircle style={{ fontSize: 24 }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
