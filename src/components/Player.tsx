import {
  VolumeUp,
  OpenInFull,
  FavoriteBorder,
  Shuffle,
  SkipPrevious,
  PlayArrow,
  Pause,
  SkipNext,
  Repeat,
  Loader,
  Mic,
  ExpandMore,
  ExpandLess,
} from "@/components/Icons";
import { useAudio } from "@/context/AudioContext";
import { useState } from "react";

const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default function Player() {
  const {
    currentSurah,
    isPlaying,
    isLoading,
    progress,
    currentTime,
    duration,
    volume,
    selectedReciterId,
    isMaximized,
    availableReciters,
    setReciter,
    toggleMaximize,
    togglePlay,
    seek,
    setVolume,
  } = useAudio();

  const [showReciters, setShowReciters] = useState(false);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const clickedPercent = (x / rect.width) * 100;
    seek(clickedPercent);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newVol = Math.max(0, Math.min(1, x / rect.width));
    setVolume(newVol);
  };

  if (!currentSurah) return null;

  return (
    <>
      {/* Mini Player Bar */}
      <footer
        className={`h-20 md:h-24 bg-surface-darker border-t border-border-muted flex items-center justify-between px-4 md:px-10 z-30 w-full fixed bottom-0 left-0 transition-transform duration-500 ease-in-out ${
          isMaximized ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center gap-3 md:gap-5 w-1/3 md:w-1/4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 bg-surface-dark border border-border-muted relative group overflow-hidden shrink-0 flex items-center justify-center cursor-pointer hover:border-accent-gold transition-all"
            onClick={toggleMaximize}
          >
            <span className="font-arabic text-primary text-sm transition-colors group-hover:text-accent-gold">
              {currentSurah.surahNameArabic}
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <h4 className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wider truncate">
              {currentSurah.surahName}
            </h4>
            <p className="text-[8px] md:text-[10px] text-primary font-bold uppercase tracking-tight truncate">
              {currentSurah.reciter}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 md:w-2/4 px-4 overflow-hidden">
          <div className="flex items-center gap-4 md:gap-8 mb-1 md:mb-2">
            <button
              className="hidden md:block text-primary hover:text-white transition-colors"
              title="Shuffle"
            >
              <Shuffle className="text-lg" />
            </button>
            <button
              className="hidden sm:block text-white hover:text-accent-gold transition-colors"
              title="Previous"
            >
              <SkipPrevious className="text-xl md:text-2xl" />
            </button>
            <button
              className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold text-background-dark flex items-center justify-center hover:bg-white transition-all disabled:opacity-70"
              title={isPlaying ? "Pause" : "Play"}
              onClick={togglePlay}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="text-xl md:text-2xl animate-spin" />
              ) : isPlaying ? (
                <Pause className="text-xl md:text-2xl" />
              ) : (
                <PlayArrow className="text-xl md:text-2xl" />
              )}
            </button>
            <button
              className="hidden sm:block text-white hover:text-accent-gold transition-colors"
              title="Next"
            >
              <SkipNext className="text-xl md:text-2xl" />
            </button>
            <button
              className="hidden md:block text-primary hover:text-white transition-colors"
              title="Repeat"
            >
              <Repeat className="text-lg" />
            </button>
          </div>
          <div className="flex items-center gap-3 md:gap-4 w-full max-w-lg">
            <span className="hidden sm:block text-[8px] md:text-[9px] font-mono text-primary tracking-widest uppercase">
              {formatTime(currentTime)}
            </span>
            <div
              className="relative flex-1 h-[2px] bg-border-muted cursor-pointer"
              onClick={handleProgressBarClick}
            >
              <div
                className="absolute left-0 top-0 h-full bg-accent-gold z-10"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="hidden sm:block text-[8px] md:text-[9px] font-mono text-primary tracking-widest uppercase">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 md:gap-6 w-1/4">
          <button
            className="text-primary hover:text-white transition-colors p-2"
            onClick={toggleMaximize}
            title="Maximize"
          >
            <ExpandLess className="text-xl md:text-2xl" />
          </button>
          <div className="relative hidden md:block">
            <button
              className={`text-primary hover:text-white transition-colors p-2 ${showReciters ? "text-accent-gold" : ""}`}
              title="Choose Reciter"
              onClick={() => setShowReciters(!showReciters)}
            >
              <Mic />
            </button>
            {showReciters && (
              <div className="absolute bottom-full right-0 mb-4 bg-surface-dark border border-border-muted w-64 py-2 z-50 shadow-2xl">
                <div className="px-4 py-2 border-b border-border-muted mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    Choose Reciter
                  </span>
                </div>
                {availableReciters.map((reciter) => (
                  <button
                    key={reciter.id}
                    className={`w-full text-left px-4 py-3 text-xs flex items-center justify-between hover:bg-surface-darker transition-colors ${selectedReciterId === reciter.id ? "text-accent-gold" : "text-white"}`}
                    onClick={() => {
                      setReciter(reciter.id);
                      setShowReciters(false);
                    }}
                  >
                    <span>{reciter.name}</span>
                    {selectedReciterId === reciter.id && (
                      <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* Maximized Player Overlay */}
      <div
        className={`fixed inset-0 bg-background-dark z-50 transition-all duration-500 ease-in-out flex flex-col ${
          isMaximized
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Blur */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background-dark via-surface-dark to-background-dark">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="font-arabic text-[40vw] leading-none whitespace-nowrap">
              {currentSurah.surahNameArabic}
            </span>
          </div>
        </div>

        {/* Top bar */}
        <div className="relative z-10 h-20 md:h-24 flex items-center justify-between px-6 md:px-10">
          <button
            className="text-white hover:text-accent-gold transition-colors"
            onClick={toggleMaximize}
          >
            <ExpandMore className="text-3xl md:text-4xl" />
          </button>
          <div className="text-center">
            <span className="text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
              Now Playing
            </span>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mt-1">
              Quran Pro
            </h3>
          </div>
          <div className="w-8 md:w-10"></div> {/* Spacer */}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-10 max-w-4xl mx-auto w-full">
          <div className="w-full aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[400px] border border-border-muted overflow-hidden shadow-2xl mb-8 md:mb-12 bg-surface-darker flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-islamic-pattern opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <span className="font-arabic text-6xl sm:text-7xl md:text-8xl text-primary/80 group-hover:text-accent-gold transition-colors relative z-10">
              {currentSurah.surahNameArabic}
            </span>
          </div>

          <div className="w-full text-center mb-6 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2 italic">
              {currentSurah.surahName}
            </h2>
            <p className="text-accent-gold font-bold uppercase tracking-widest text-[10px] md:text-sm">
              {currentSurah.reciter}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full mb-10">
            <div
              className="relative w-full h-[3px] bg-border-muted cursor-pointer group"
              onClick={handleProgressBarClick}
            >
              <div
                className="absolute left-0 top-0 h-full bg-accent-gold z-10"
                style={{ width: `${progress}%` }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white z-20 rounded-full scale-0 group-hover:scale-100 transition-transform"
                style={{ left: `${progress}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-[10px] font-mono text-primary font-bold">
                {formatTime(currentTime)}
              </span>
              <span className="text-[10px] font-mono text-primary font-bold">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 sm:gap-12">
            <button className="hidden sm:block text-primary hover:text-white transition-colors">
              <Shuffle className="text-xl md:text-2xl" />
            </button>
            <button className="text-white hover:text-accent-gold transition-colors">
              <SkipPrevious className="text-3xl md:text-4xl" />
            </button>
            <button
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent-gold text-background-dark flex items-center justify-center hover:bg-white transition-all shadow-xl disabled:opacity-70"
              onClick={togglePlay}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="text-2xl md:text-4xl animate-spin" />
              ) : isPlaying ? (
                <Pause className="text-2xl md:text-4xl" />
              ) : (
                <PlayArrow className="text-2xl md:text-4xl" />
              )}
            </button>
            <button className="text-white hover:text-accent-gold transition-colors">
              <SkipNext className="text-3xl md:text-4xl" />
            </button>
            <button className="hidden sm:block text-primary hover:text-white transition-colors">
              <Repeat className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="relative z-10 h-24 md:h-32 flex items-center justify-between px-6 md:px-10 max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-6 relative">
            <button
              className={`text-primary hover:text-white transition-colors flex items-center gap-2 ${showReciters ? "text-accent-gold" : ""}`}
              onClick={() => setShowReciters(!showReciters)}
            >
              <Mic className="text-xl" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Reciter
              </span>
            </button>
            {showReciters && (
              <div className="absolute bottom-full left-0 mb-4 bg-surface-dark border border-border-muted w-64 py-2 z-50 shadow-2xl">
                <div className="px-4 py-2 border-b border-border-muted mb-2">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    Choose Reciter
                  </span>
                </div>
                <div className="max-h-[30vh] overflow-y-auto">
                  {availableReciters.map((reciter) => (
                    <button
                      key={reciter.id}
                      className={`w-full text-left px-4 py-3 text-xs flex items-center justify-between hover:bg-surface-darker transition-colors ${selectedReciterId === reciter.id ? "text-accent-gold" : "text-white"}`}
                      onClick={() => {
                        setReciter(reciter.id);
                        setShowReciters(false);
                      }}
                    >
                      <span>{reciter.name}</span>
                      {selectedReciterId === reciter.id && (
                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <VolumeUp className="text-primary text-xl" />
            <div
              className="relative w-24 md:w-32 h-[2px] bg-border-muted cursor-pointer"
              onClick={handleVolumeClick}
            >
              <div
                className="absolute left-0 top-0 h-full bg-accent-gold z-10"
                style={{ width: `${volume * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
