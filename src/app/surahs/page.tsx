'use client'

import Image from 'next/image';
import Link from 'next/link';
import { MenuBook, Home, Mic, Layers, Favorite, History, PlaylistPlay, Search, Notifications, Settings, Menu, PlayArrow, MoreVert, SkipPrevious, SkipNext, Pause, Shuffle, Repeat, VolumeUp, QueueMusic, OpenInFull, FavoriteBorder, PlayCircle } from '@/components/Icons';
import { surahs } from '@/lib/surah-data';

export default function SurahsPage() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <aside className="hidden md:flex flex-col w-64 h-full bg-surface-darker border-r border-border-muted z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-primary border border-border-muted">
            <MenuBook className="text-accent-gold" style={{ fontSize: 20 }} />
          </div>
          <div>
            <h1 className="text-white text-base font-bold tracking-tight uppercase">Quran<span className="text-accent-gold">Pro</span></h1>
            <p className="text-[10px] text-primary uppercase tracking-[0.2em]">Premium Audio</p>
          </div>
        </div>
        <nav className="flex-1 px-6 py-2 space-y-1 overflow-y-auto">
          <p className="px-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Discovery</p>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="/">
            <Home style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Home</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 bg-primary/10 border border-primary/20 text-white group" href="/surahs">
            <MenuBook className="text-accent-gold" style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Surahs</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="#">
            <Mic style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Reciters</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="#">
            <Layers style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Juz</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="#">
            <Favorite style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Favorites</span>
          </a>
          <p className="px-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-4 mt-8">Library</p>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="#">
            <History style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">History</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="#">
            <PlaylistPlay style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Playlists</span>
          </a>
        </nav>
        <div className="p-6 border-t border-border-muted bg-surface-darker">
          <div className="flex items-center gap-3 p-2 border border-transparent hover:border-border-muted cursor-pointer transition-all">
            <div className="w-8 h-8 bg-cover bg-center border border-border-muted" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv-MriHAjknFsg0p2Xxvsz8l_GfTNGDjiaUemn-0eZ2YaCFqrh9evC-l9X0hqZ-fXGnKA9STI0yyzydE82_9gXIk0HPwvAYP-L5axDuwRg_VssSp_73xBxXRDb1MosVaFXXmRsVo91Ek9QOuZVjyewXbjpxKc1Ut92kxojHYqIgZCDWTtia2RihMrfg2N6rUZaMW_o5kebVQn9-FC2rYkoSLmbSEAJjsN7dBhGBNumygQTSTVn-8btTpBl8FLzt0BdO7kjl2bhHOFO')" }}></div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Ahmed Ali</span>
              <span className="text-[10px] text-accent-gold uppercase tracking-tighter">Premium</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern pointer-events-none"></div>
        <header className="h-20 px-10 flex items-center justify-between z-10 bg-background-dark border-b border-border-muted sticky top-0">
          <button className="md:hidden text-white mr-4">
            <Menu />
          </button>
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-primary" style={{ fontSize: 18 }} />
              </div>
              <input className="block w-full pl-10 pr-3 py-2 bg-surface-dark border border-border-muted rounded-none leading-5 text-slate-300 placeholder-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-gold focus:border-accent-gold sm:text-sm transition-all" placeholder="Search Surah, Ayah, or Reciter..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6 ml-6">
            <button className="text-primary hover:text-accent-gold transition-colors relative">
              <Notifications />
              <span className="absolute top-0 right-0 w-1 h-1 bg-accent-gold"></span>
            </button>
            <button className="text-primary hover:text-accent-gold transition-colors">
              <Settings />
            </button>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-10 relative z-0">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tighter">Surahs</h1>
            <div className="bg-surface-darker border border-border-muted">
              <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs text-primary uppercase bg-surface-dark border-b border-border-muted">
                  <tr>
                    <th scope="col" className="p-4 w-16 text-center">#</th>
                    <th scope="col" className="p-4">Name</th>
                    <th scope="col" className="p-4">Translation</th>
                    <th scope="col" className="p-4 hidden sm:table-cell">Ayahs</th>
                    <th scope="col" className="p-4 hidden md:table-cell">Revelation</th>
                    <th scope="col" className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {surahs.map((surah) => (
                    <tr key={surah.number} className="border-b border-border-muted hover:bg-surface-dark group transition-colors">
                      <td className="p-4 w-16 text-center font-mono text-accent-gold">{surah.number}</td>
                      <td className="p-4">
                        <Link href={`/surahs/${surah.number}`} className="group-hover:text-accent-gold transition-colors">
                            <div className="flex flex-col">
                                <span className="text-white font-bold">{surah.englishName}</span>
                                <span className="font-arabic text-lg text-primary group-hover:text-accent-gold/70 transition-colors">{surah.name}</span>
                            </div>
                        </Link>
                      </td>
                      <td className="p-4">{surah.englishNameTranslation}</td>
                      <td className="p-4 hidden sm:table-cell">{surah.numberOfAyahs}</td>
                      <td className="p-4 hidden md:table-cell">{surah.revelationType}</td>
                      <td className="p-4 text-right">
                        <button className="text-primary group-hover:text-accent-gold transition-colors opacity-0 group-hover:opacity-100">
                          <PlayCircle style={{fontSize: 24}}/>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="h-24"></div>
        </div>
      </main>
      <footer className="h-24 bg-surface-darker border-t border-border-muted flex items-center justify-between px-10 z-30 w-full fixed bottom-0 left-0">
        <div className="flex items-center gap-5 w-1/4">
          <div className="w-12 h-12 border border-border-muted relative group overflow-hidden">
            <Image alt="Cover" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV9YrGpnUyTmen5rB8hlVf0wsi50zOUR8EA7F_LYUpbk3fhwd2MipkXu9DWmgNIkbn_Znf99xA4IVQPY9PxBwfQhB8m5YkRINQaTELIRuqIIwJv1JerORO-dJrD_g5jQU1KEbZ7wsLQYpfTqAyroqdPbr_h3vFt494RbVogWONS98rbuhpiObD-TwbfHrGInfI7Agn0AL887M7e0qwfh35nTsgA4d-761J25iYGdNSFjK8s4mWNdu5F4KEA-_OX5vwqHfBPnxOgx_7" width={48} height={48}/>
            <div className="absolute inset-0 bg-background-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <OpenInFull className="text-white text-sm" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Surah Yasin</h4>
              <span className="text-accent-gold font-arabic text-xs">يس</span>
            </div>
            <p className="text-[10px] text-primary font-bold uppercase tracking-tight">Abdul Basit</p>
          </div>
          <button className="text-primary hover:text-accent-gold ml-2 transition-colors">
            <FavoriteBorder className="text-lg" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-2/4">
          <div className="flex items-center gap-8 mb-2">
            <button className="text-primary hover:text-white transition-colors" title="Shuffle">
              <Shuffle className="text-lg" />
            </button>
            <button className="text-white hover:text-accent-gold transition-colors" title="Previous">
              <SkipPrevious className="text-2xl" />
            </button>
            <button className="w-12 h-12 bg-accent-gold text-background-dark flex items-center justify-center hover:bg-white transition-all" title="Play/Pause">
              <Pause className="text-2xl" />
            </button>
            <button className="text-white hover:text-accent-gold transition-colors" title="Next">
              <SkipNext className="text-2xl" />
            </button>
            <button className="text-primary hover:text-white transition-colors" title="Repeat">
              <Repeat className="text-lg" />
            </button>
          </div>
          <div className="flex items-center gap-4 w-full max-w-lg">
            <span className="text-[9px] font-mono text-primary tracking-widest uppercase">04:20</span>
            <div className="relative flex-1 h-[2px] bg-border-muted cursor-pointer">
              <div className="absolute left-0 top-0 h-full bg-accent-gold w-[35%] z-10"></div>
              <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white z-20"></div>
            </div>
            <span className="text-[9px] font-mono text-primary tracking-widest uppercase">12:34</span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-6 w-1/4">
          <button className="px-2 py-0.5 border border-primary text-[9px] font-bold text-primary hover:border-accent-gold hover:text-accent-gold transition-all">HD</button>
          <div className="flex items-center gap-3">
            <VolumeUp className="text-primary text-lg" />
            <input className="w-20 h-0.5 bg-border-muted appearance-none cursor-pointer" max="100" min="0" type="range" defaultValue="70"/>
          </div>
          <button className="text-primary hover:text-white transition-colors">
            <QueueMusic />
          </button>
        </div>
      </footer>
    </div>
  );
}
