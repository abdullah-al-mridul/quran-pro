import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Player from "./Player";
import { useState } from "react";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex-1 flex flex-col bg-background-dark relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-islamic-pattern pointer-events-none opacity-20 md:opacity-100"></div>
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto p-4 md:p-10 relative z-0">
          <Outlet />
          <div className="h-32 md:h-24"></div>
        </div>
      </main>
      <Player />
    </div>
  );
}
