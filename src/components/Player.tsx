import {
  VolumeUp,
  QueueMusic,
  OpenInFull,
  FavoriteBorder,
  Shuffle,
  SkipPrevious,
  Pause,
  SkipNext,
  Repeat,
} from "@/components/Icons";

export default function Player() {
  return (
    <footer className="h-24 bg-surface-darker border-t border-border-muted flex items-center justify-between px-10 z-30 w-full fixed bottom-0 left-0">
      <div className="flex items-center gap-5 w-1/4">
        <div className="w-12 h-12 border border-border-muted relative group overflow-hidden">
          <img
            alt="Cover"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV9YrGpnUyTmen5rB8hlVf0wsi50zOUR8EA7F_LYUpbk3fhwd2MipkXu9DWmgNIkbn_Znf99xA4IVQPY9PxBwfQhB8m5YkRINQaTELIRuqIIwJv1JerORO-dJrD_g5jQU1KEbZ7wsLQYpfTqAyroqdPbr_h3vFt494RbVogWONS98rbuhpiObD-TwbfHrGInfI7Agn0AL887M7e0qwfh35nTsgA4d-761J25iYGdNSFjK8s4mWNdu5F4KEA-_OX5vwqHfBPnxOgx_7"
            width={48}
            height={48}
          />
          <div className="absolute inset-0 bg-background-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <OpenInFull className="text-white text-sm" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Surah Yasin
            </h4>
            <span className="text-accent-gold font-arabic text-xs">يس</span>
          </div>
          <p className="text-[10px] text-primary font-bold uppercase tracking-tight">
            Abdul Basit
          </p>
        </div>
        <button className="text-primary hover:text-accent-gold ml-2 transition-colors">
          <FavoriteBorder className="text-lg" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-2/4">
        <div className="flex items-center gap-8 mb-2">
          <button
            className="text-primary hover:text-white transition-colors"
            title="Shuffle"
          >
            <Shuffle className="text-lg" />
          </button>
          <button
            className="text-white hover:text-accent-gold transition-colors"
            title="Previous"
          >
            <SkipPrevious className="text-2xl" />
          </button>
          <button
            className="w-12 h-12 bg-accent-gold text-background-dark flex items-center justify-center hover:bg-white transition-all"
            title="Play/Pause"
          >
            <Pause className="text-2xl" />
          </button>
          <button
            className="text-white hover:text-accent-gold transition-colors"
            title="Next"
          >
            <SkipNext className="text-2xl" />
          </button>
          <button
            className="text-primary hover:text-white transition-colors"
            title="Repeat"
          >
            <Repeat className="text-lg" />
          </button>
        </div>
        <div className="flex items-center gap-4 w-full max-w-lg">
          <span className="text-[9px] font-mono text-primary tracking-widest uppercase">
            04:20
          </span>
          <div className="relative flex-1 h-[2px] bg-border-muted cursor-pointer">
            <div className="absolute left-0 top-0 h-full bg-accent-gold w-[35%] z-10"></div>
            <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white z-20"></div>
          </div>
          <span className="text-[9px] font-mono text-primary tracking-widest uppercase">
            12:34
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6 w-1/4">
        <button className="px-2 py-0.5 border border-primary text-[9px] font-bold text-primary hover:border-accent-gold hover:text-accent-gold transition-all">
          HD
        </button>
        <div className="flex items-center gap-3">
          <VolumeUp className="text-primary text-lg" />
          <div className="relative w-20 h-[2px] bg-border-muted cursor-pointer">
            <div className="absolute left-0 top-0 h-full bg-accent-gold w-[70%] z-10"></div>
            <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white z-20"></div>
          </div>
        </div>
        <button className="text-primary hover:text-white transition-colors">
          <QueueMusic />
        </button>
      </div>
    </footer>
  );
}
