import {
  Search,
  Notifications,
  Settings,
  Menu,
  MenuBook,
} from "@/components/Icons";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-20 px-4 md:px-10 flex items-center justify-between z-10 bg-background-dark/80 backdrop-blur-lg border-b border-border-muted sticky top-0 shrink-0">
      <div className="flex items-center">
        <button
          className="md:hidden text-white mr-4 p-2 hover:bg-surface-dark"
          onClick={onMenuClick}
        >
          <Menu />
        </button>
        <div className="md:hidden flex items-center gap-2 mr-4">
          <div className="w-8 h-8 flex items-center justify-center bg-primary border border-border-muted">
            <MenuBook className="text-accent-gold" style={{ fontSize: 16 }} />
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-primary" style={{ fontSize: 16 }} />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-1.5 bg-surface-dark border border-border-muted rounded-none text-xs md:text-sm text-slate-300 placeholder-primary/50 focus:outline-none focus:ring-1 focus:ring-accent-gold focus:border-accent-gold transition-all"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 ml-6">
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
