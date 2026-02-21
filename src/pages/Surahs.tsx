import { Link } from "react-router-dom";
import { PlayCircle } from "@/components/Icons";
import { surahs } from "@/lib/surah-data";
export default function SurahsPage() {
  return (<>
          <h1 className="text-3xl font-bold text-white mb-8 tracking-tighter">
            Surahs
          </h1>
          <div className="bg-surface-darker border border-border-muted">
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
                    key={surah.number}
                    className="border-b border-border-muted hover:bg-surface-dark group transition-colors"
                  >
                    <td className="p-4 w-16 text-center font-mono text-accent-gold">
                      {surah.number}
                    </td>
                    <td className="p-4">
                      <Link
                        to={`/surahs/${surah.number}`}
                        className="group-hover:text-accent-gold transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-white font-bold">
                            {surah.englishName}
                          </span>
                          <span className="font-arabic text-lg text-primary group-hover:text-accent-gold/70 transition-colors">
                            {surah.name}
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td className="p-4">{surah.englishNameTranslation}</td>
                    <td className="p-4 hidden sm:table-cell">
                      {surah.numberOfAyahs}
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      {surah.revelationType}
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
  </>);
}