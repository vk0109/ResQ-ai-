import { NavLink, Outlet } from "react-router-dom";
import { Home, ShieldAlert, Users, Settings } from "lucide-react";

const navItems = [
  { to: "/app", label: "Home", icon: Home, end: true },
  { to: "/app/sos", label: "SOS", icon: ShieldAlert },
  { to: "/app/contacts", label: "Contacts", icon: Users },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90 px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">RESQ-AI</h1>
            <p className="text-xs text-slate-400">
              Emergency Decision Support
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Offline Ready
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-6 pb-24">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl justify-around py-2">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-4 py-2 text-xs transition ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              <Icon size={21} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}