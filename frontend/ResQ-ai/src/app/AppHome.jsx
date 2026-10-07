import { AlertTriangle, Flame, HeartPulse, Car, Waves } from "lucide-react";

const emergencies = [
  {
    title: "Medical",
    icon: HeartPulse,
    description: "Health-related emergency",
  },
  {
    title: "Fire",
    icon: Flame,
    description: "Smoke or fire emergency",
  },
  {
    title: "Accident",
    icon: Car,
    description: "Road or physical accident",
  },
  {
    title: "Flood",
    icon: Waves,
    description: "Flood or water emergency",
  },
];

export default function AppHome() {
  return (
    <div className="space-y-7">
      <section>
        <p className="text-sm text-slate-400">Welcome to</p>

        <h2 className="mt-1 text-3xl font-bold">
          RESQ-AI
        </h2>

        <p className="mt-2 max-w-xl text-slate-400">
          Describe an emergency and get short, verified guidance —
          even when you're offline.
        </p>
      </section>

      <section className="rounded-2xl border border-red-400/20 bg-red-500/10 p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-red-500/20 p-3">
            <AlertTriangle className="text-red-400" />
          </div>

          <div>
            <h3 className="font-semibold">Need immediate help?</h3>
            <p className="text-sm text-slate-400">
              Use SOS to contact your trusted person.
            </p>
          </div>
        </div>

        <button className="mt-5 w-full rounded-xl bg-red-500 py-3 font-bold transition hover:bg-red-400">
          🚨 SOS
        </button>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Emergency Types
          </h3>

          <span className="text-xs text-slate-500">
            Works offline
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {emergencies.map(({ title, icon: Icon, description }) => (
            <button
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <Icon className="mb-4 text-cyan-400" size={28} />

              <h4 className="font-semibold">{title}</h4>

              <p className="mt-1 text-xs text-slate-400">
                {description}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="font-semibold">Describe Emergency</h3>

        <p className="mt-1 text-sm text-slate-400">
          Tell RESQ-AI what is happening.
        </p>

        <button className="mt-4 w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 py-3 font-medium text-cyan-300">
          Analyze Emergency →
        </button>
      </section>
    </div>
  );
}