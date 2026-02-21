'use client'

import Image from 'next/image';
import { MenuBook, Home, Mic, Layers, Favorite, History, PlaylistPlay, Search, Notifications, Settings, Menu, PlayArrow, MoreVert, SkipPrevious, SkipNext, Pause, Shuffle, Repeat, VolumeUp, QueueMusic, OpenInFull, FavoriteBorder } from '@/components/Icons';


export default function QuranPlayer() {
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
          <a className="flex items-center gap-3 px-4 py-2.5 bg-primary/10 border border-primary/20 text-white group" href="/">
            <Home className="text-accent-gold" style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Home</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted" href="/surahs">
            <MenuBook style={{ fontSize: 20 }} />
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
          <div className="relative w-full overflow-hidden mb-12 border border-border-muted">
            <div className="absolute inset-0 bg-cover bg-center grayscale opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_79_xuG-2HtsXmoNDosZfhIyVLMWWNpR3Jg8pvFx2e_s04aLFjrz92LyePh2SBfGkZVrSbXmfG2Nrwi222c8jDEVRsjvFss-pjlulXxxFIbJcgGOulVV7TpTtOEDRAPWATsSPWjDo7SnnckhUBB0bKNuTzTIGcvjx9gILeeBGoq6Rh6n43Smtnl6s1L-8lf1yCPBcgZ0v-CjjIldf2eqhmDvJc63OgAEwbaFDJl5Um32dbE5F3zQDigT9g5wGNWTFGdfyjzxfbvaA')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
            <div className="relative p-10 md:p-14 flex flex-col items-start justify-center min-h-[400px]">
              <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Featured Recitation</span>
              <h1 className="text-5xl font-bold text-white mb-3 tracking-tighter">Mishary Al-Afasy</h1>
              <h2 className="text-2xl text-accent-gold/80 mb-8 font-light italic">Surah Ar-Rahman <span className="font-arabic not-italic text-2xl ml-4">سورة الرحمن</span></h2>
              <p className="max-w-lg text-slate-400 text-sm mb-10 leading-relaxed font-light">
                Immerse yourself in the tranquility of "The Most Merciful". A recitation known for its soothing rhythm and profound reminders of Allah's blessings.
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
              <a className="text-[10px] font-bold text-primary hover:text-accent-gold uppercase tracking-widest transition-colors" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="bg-surface-dark p-6 flex items-center gap-5 border border-primary/30 group cursor-pointer transition-all">
                <div className="relative w-16 h-16 border border-border-muted flex-shrink-0">
                  <Image alt="Islamic architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-k_Bk0IynwZwHr_puL614ueAwt6NOF8NBTJ8tD7ke5JFLBnI9DCGiWaBh5iwceExN4_OG39XIO1eWlh1jT8fZ_V18X-BC_1BhNMcn8Sb6poevUL5owXFEf7nfpZzDoj1CMOsmN-tLflNGwUZRHoyce8y-MxjymgN5PeZrcg8m-FuMzstSrq_WeZyg0Z3ye7nDlZku2onU1hmvsIQNAAJrA0FHmOdx78BBHUDI0tdrjcIAak9hUAUPbu5ocyMMzG2Pcc7ThvC4gMME" width={64} height={64}/>
                  <div className="absolute inset-0 bg-accent-gold/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayArrow className="text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">Surah Yasin</h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">Abdul Basit</p>
                  <div className="mt-3 w-full h-[1px] bg-border-muted">
                    <div className="h-full bg-accent-gold w-[45%]"></div>
                  </div>
                </div>
                <button className="text-primary hover:text-white transition-colors">
                  <MoreVert className="text-xl" />
                </button>
              </div>
              <div className="bg-surface-darker p-6 flex items-center gap-5 border border-border-muted group cursor-pointer hover:bg-surface-dark transition-all">
                <div className="relative w-16 h-16 border border-border-muted flex-shrink-0">
                  <Image alt="Ornate detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr3kBwh-NeR2_zV0jfMAGLqdxWEKpuZcbFz8og35JPm6lTNxFo1qcL934xJEE-qiZkH9gzXQG-cf8ZIKX0y7EKjFOx929hMJoIgDnQ-1CL4xRLPha4xIWtYNJ9PGdVcXnD4p3HaSJh1gvivrQBqxnhu1ax9GX5eKQGgb72HjLjdlkHY-qQ0AT-Q9IWYxHsKlUdu2dMwqvzq1Jr-yKTyp0MWunGSWBDimAC9rbpj8lQdMrVWOZ1p37Nn8SJJ8r1IPBquYdnmczblWFl" width={64} height={64}/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">Surah Al-Mulk</h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">Omar Hisham</p>
                  <div className="mt-3 w-full h-[1px] bg-border-muted">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-darker p-6 flex items-center gap-5 border border-border-muted group cursor-pointer hover:bg-surface-dark transition-all">
                <div className="relative w-16 h-16 border border-border-muted flex-shrink-0">
                  <Image alt="Pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuNVVAFA5RyVvoRtlSCU2BrfRH6eGvydWYAHQHi4C6DcdjEKqzIl3iF6zoBO5Iu5XLLEMmunl9RF91fKeVVg5wIS4d0Gj7d8NFaNVT1qyXVzV5Mzyq_mUr5DfE_RSJizA-qBbgWd4Nn0sBHVevdbek0zqzSrOQPxpBG1PdXhMEAxESY09WFOokKSQMX8nDg5jJQDoHBstIIb9T0By32sjfYm29Ap54zjpmAoZHcpL_CW-pw9Xz3X4J_kBYB-WlTYKx1-YssPyXnTWY" width={64} height={64}/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">Surah Al-Kahf</h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">Nasser Al Qatami</p>
                  <div className="mt-3 w-full h-[1px] bg-border-muted">
                    <div className="h-full bg-primary w-[10%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-8 border-b border-border-muted pb-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-2 h-2 bg-primary"></span>
                Popular Surahs
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border-muted border border-border-muted">
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">١</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">play_circle</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">Al-Fatiha</h3>
                <p className="text-[10px] text-primary uppercase font-medium">The Opening</p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">١٨</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">play_circle</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">Al-Kahf</h3>
                <p className="text-[10px] text-primary uppercase font-medium">The Cave</p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">٣٦</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">play_circle</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">Yasin</h3>
                <p className="text-[10px] text-primary uppercase font-medium">Ya Sin</p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">٥٥</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">play_circle</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">Ar-Rahman</h3>
                <p className="text-[10px] text-primary uppercase font-medium">The Beneficent</p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">٦٧</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">play_circle</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">Al-Mulk</h3>
                <p className="text-[10px] text-primary uppercase font-medium">The Sovereignty</p>
              </div>
            </div>
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
