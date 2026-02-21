import { Search, Notifications, Settings, Menu } from "@/components/Icons";

export default function Header() {
  return (
    <header className="h-20 px-10 flex items-center justify-between z-10 bg-background-dark border-b border-border-muted sticky top-0 shrink-0">
      <button className="md:hidden text-white mr-4">
        <Menu />
      </button>
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-primary" style={{ fontSize: 18 }} />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 bg-surface-dark border border-border-muted rounded-none leading-5 text-slate-300 placeholder-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-gold focus:border-accent-gold sm:text-sm transition-all"
            placeholder="Search Surah, Ayah, or Reciter..."
            type="text"
          />
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
  );
}
