import { Favorite, PlayArrow, MoreVert } from "@/components/Icons";
export default function QuranPlayer() {
  return (<>
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
                Mishary Al-Afasy
              </h1>
              <h2 className="text-2xl text-accent-gold/80 mb-8 font-light italic">
                Surah Ar-Rahman{" "}
                <span className="font-arabic not-italic text-2xl ml-4">
                  سورة الرحمن
                </span>
              </h2>
              <p className="max-w-lg text-slate-400 text-sm mb-10 leading-relaxed font-light">
                Immerse yourself in the tranquility of "The Most Merciful". A
                recitation known for its soothing rhythm and profound reminders
                of Allah's blessings.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="bg-surface-dark p-6 flex items-center gap-5 border border-primary/30 group cursor-pointer transition-all">
                <div className="relative w-16 h-16 border border-border-muted flex-shrink-0">
                  <img
                    alt="Islamic architecture"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-k_Bk0IynwZwHr_puL614ueAwt6NOF8NBTJ8tD7ke5JFLBnI9DCGiWaBh5iwceExN4_OG39XIO1eWlh1jT8fZ_V18X-BC_1BhNMcn8Sb6poevUL5owXFEf7nfpZzDoj1CMOsmN-tLflNGwUZRHoyce8y-MxjymgN5PeZrcg8m-FuMzstSrq_WeZyg0Z3ye7nDlZku2onU1hmvsIQNAAJrA0FHmOdx78BBHUDI0tdrjcIAak9hUAUPbu5ocyMMzG2Pcc7ThvC4gMME"
                    width={64}
                    height={64}
                  />
                  <div className="absolute inset-0 bg-accent-gold/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayArrow className="text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">
                    Surah Yasin
                  </h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">
                    Abdul Basit
                  </p>
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
                  <img
                    alt="Ornate detail"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr3kBwh-NeR2_zV0jfMAGLqdxWEKpuZcbFz8og35JPm6lTNxFo1qcL934xJEE-qiZkH9gzXQG-cf8ZIKX0y7EKjFOx929hMJoIgDnQ-1CL4xRLPha4xIWtYNJ9PGdVcXnD4p3HaSJh1gvivrQBqxnhu1ax9GX5eKQGgb72HjLjdlkHY-qQ0AT-Q9IWYxHsKlUdu2dMwqvzq1Jr-yKTyp0MWunGSWBDimAC9rbpj8lQdMrVWOZ1p37Nn8SJJ8r1IPBquYdnmczblWFl"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">
                    Surah Al-Mulk
                  </h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">
                    Omar Hisham
                  </p>
                  <div className="mt-3 w-full h-[1px] bg-border-muted">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-darker p-6 flex items-center gap-5 border border-border-muted group cursor-pointer hover:bg-surface-dark transition-all">
                <div className="relative w-16 h-16 border border-border-muted flex-shrink-0">
                  <img
                    alt="Pattern"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuNVVAFA5RyVvoRtlSCU2BrfRH6eGvydWYAHQHi4C6DcdjEKqzIl3iF6zoBO5Iu5XLLEMmunl9RF91fKeVVg5wIS4d0Gj7d8NFaNVT1qyXVzV5Mzyq_mUr5DfE_RSJizA-qBbgWd4Nn0sBHVevdbek0zqzSrOQPxpBG1PdXhMEAxESY09WFOokKSQMXnDg5jJQDoHBstIIb9T0By32sjfYm29Ap54zjpmAoZHcpL_CW-pw9Xz3X4J_kBYB-WlTYKx1-YssPyXnTWY"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-bold uppercase tracking-tight truncate">
                    Surah Al-Kahf
                  </h3>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider truncate">
                    Nasser Al Qatami
                  </p>
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
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">
                    ١
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">
                  Al-Fatiha
                </h3>
                <p className="text-[10px] text-primary uppercase font-medium">
                  The Opening
                </p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">
                    ١٨
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">
                  Al-Kahf
                </h3>
                <p className="text-[10px] text-primary uppercase font-medium">
                  The Cave
                </p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">
                    ٣٦
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">
                  Yasin
                </h3>
                <p className="text-[10px] text-primary uppercase font-medium">
                  Ya Sin
                </p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">
                    ٥٥
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">
                  Ar-Rahman
                </h3>
                <p className="text-[10px] text-primary uppercase font-medium">
                  The Beneficent
                </p>
              </div>
              <div className="group bg-surface-dark hover:bg-surface-darker p-8 transition-all cursor-pointer">
                <div className="relative aspect-square mb-6 bg-surface-darker border border-border-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-arabic text-primary/10">
                    ٦٧
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-accent-gold/5">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-widest truncate">
                  Al-Mulk
                </h3>
                <p className="text-[10px] text-primary uppercase font-medium">
                  The Sovereignty
                </p>
              </div>
            </div>
          </div>
          <div className="h-24"></div>
  </>);
}