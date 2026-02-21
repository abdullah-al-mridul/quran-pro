import { Link, useLocation } from "react-router-dom";
import { MenuBook, Home, Close } from "@/components/Icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    const isActive =
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path));
    if (isActive) {
      return "flex items-center gap-3 px-4 py-2.5 bg-primary/10 border border-primary/20 text-white group";
    }
    return "flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-white hover:bg-surface-dark transition-all border border-transparent hover:border-border-muted";
  };

  const getIconColor = (path: string) => {
    const isActive =
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path));
    return isActive ? "text-accent-gold" : "";
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background-dark/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed md:relative inset-y-0 left-0 w-64 h-full bg-surface-darker border-r border-border-muted z-50 md:z-20 shrink-0 transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-primary border border-border-muted">
              <MenuBook className="text-accent-gold" style={{ fontSize: 20 }} />
            </div>
            <div>
              <h1 className="text-white text-base font-bold tracking-tight uppercase">
                Quran<span className="text-accent-gold">Pro</span>
              </h1>
              <p className="text-[10px] text-primary uppercase tracking-[0.2em]">
                Premium Audio
              </p>
            </div>
          </div>
          <button
            className="md:hidden text-white hover:text-accent-gold"
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        <nav className="flex-1 px-6 py-2 space-y-1 overflow-y-auto">
          <p className="px-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
            Discovery
          </p>
          <Link className={getLinkClasses("/")} to="/" onClick={onClose}>
            <Home className={getIconColor("/")} style={{ fontSize: 20 }} />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link
            className={getLinkClasses("/surahs")}
            to="/surahs"
            onClick={onClose}
          >
            <MenuBook
              className={getIconColor("/surahs")}
              style={{ fontSize: 20 }}
            />
            <span className="text-sm font-medium">Surahs</span>
          </Link>
        </nav>

        {/* Spacer for desktop player */}
        <div className="hidden md:block h-24 shrink-0"></div>
      </aside>
    </>
  );
}
