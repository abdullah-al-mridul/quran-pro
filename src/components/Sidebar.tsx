import { Link, useLocation } from "react-router-dom";
import {
  MenuBook,
  Home,
  Mic,
  Layers,
  Favorite,
  History,
  PlaylistPlay,
} from "@/components/Icons";

export default function Sidebar() {
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
    <aside className="hidden md:flex flex-col w-64 h-full bg-surface-darker border-r border-border-muted z-20 shrink-0">
      <div className="p-8 flex items-center gap-3">
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
      <nav className="flex-1 px-6 py-2 space-y-1 overflow-y-auto">
        <p className="px-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
          Discovery
        </p>
        <Link className={getLinkClasses("/")} to="/">
          <Home className={getIconColor("/")} style={{ fontSize: 20 }} />
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link className={getLinkClasses("/surahs")} to="/surahs">
          <MenuBook
            className={getIconColor("/surahs")}
            style={{ fontSize: 20 }}
          />
          <span className="text-sm font-medium">Surahs</span>
        </Link>
        <Link className={getLinkClasses("/reciters")} to="#">
          <Mic className={getIconColor("/reciters")} style={{ fontSize: 20 }} />
          <span className="text-sm font-medium">Reciters</span>
        </Link>
        <Link className={getLinkClasses("/juz")} to="#">
          <Layers className={getIconColor("/juz")} style={{ fontSize: 20 }} />
          <span className="text-sm font-medium">Juz</span>
        </Link>
        <Link className={getLinkClasses("/favorites")} to="#">
          <Favorite
            className={getIconColor("/favorites")}
            style={{ fontSize: 20 }}
          />
          <span className="text-sm font-medium">Favorites</span>
        </Link>
        <p className="px-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-4 mt-8">
          Library
        </p>
        <Link className={getLinkClasses("/history")} to="#">
          <History
            className={getIconColor("/history")}
            style={{ fontSize: 20 }}
          />
          <span className="text-sm font-medium">History</span>
        </Link>
        <Link className={getLinkClasses("/playlists")} to="#">
          <PlaylistPlay
            className={getIconColor("/playlists")}
            style={{ fontSize: 20 }}
          />
          <span className="text-sm font-medium">Playlists</span>
        </Link>
      </nav>
      <div className="p-6 border-t border-border-muted bg-surface-darker">
        <div className="flex items-center gap-3 p-2 border border-transparent hover:border-border-muted cursor-pointer transition-all">
          <div
            className="w-8 h-8 bg-cover bg-center border border-border-muted"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv-MriHAjknFsg0p2Xxvsz8l_GfTNGDjiaUemn-0eZ2YaCFqrh9evC-l9X0hqZ-fXGnKA9STI0yyzydE82_9gXIk0HPwvAYP-L5axDuwRg_VssSp_73xBxXRDb1MosVaFXXmRsVo91Ek9QOuZVjyewXbjpxKc1Ut92kxojHYqIgZCDWTtia2RihMrfg2N6rUZaMW_o5kebVQn9-FC2rYkoSLmbSEAJjsN7dBhGBNumygQTSTVn-8btTpBl8FLzt0BdO7kjl2bhHOFO')",
            }}
          ></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">Ahmed Ali</span>
            <span className="text-[10px] text-accent-gold uppercase tracking-tighter">
              Premium
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
