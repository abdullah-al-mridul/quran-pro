import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Player from "./Player";

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern pointer-events-none"></div>
        <Header />
        <div className="flex-1 overflow-y-auto p-10 relative z-0">
          <Outlet />
          <div className="h-24"></div>
        </div>
      </main>
      <Player />
    </div>
  );
}
