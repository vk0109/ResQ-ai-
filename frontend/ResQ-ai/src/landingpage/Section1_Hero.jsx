import CursorGrid from "../components/CursorGrid";
import LiquidGlassNavbar from "./Navbar";

const Section1_Hero = ({ onExplore, onGetStarted }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">

      {/* CURSOR GRID — BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <CursorGrid
          cellSize={60}
          color="#3688D9"
          radius={240}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.4}
          maxOpacity={1}
          fillOpacity={0.12}
          gridOpacity={0.08}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      <LiquidGlassNavbar />

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400">
            OFFLINE-FIRST EMERGENCY AI
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Emergency intelligence,
            <br />
            even when you're offline.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            ResQ-AI identifies emergency situations and delivers short,
            verified guidance — even when the internet isn't available.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* GET STARTED → SECTION 6 */}
            <button
              type="button"
              onClick={onGetStarted}
              className="
                rounded-full
                bg-sky-600
                px-7 py-3
                font-semibold text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-sky-700
                hover:shadow-lg hover:shadow-sky-500/25
              "
            >
              Get Started
            </button>

            {/* EXPLORE → SECTION 3 */}
            <button
              type="button"
              onClick={onExplore}
              className="
                rounded-full
                border border-slate-300
                px-7 py-3
                font-semibold text-slate-700
                transition-all duration-300
                hover:border-sky-500
                hover:text-sky-600
                dark:border-slate-700
                dark:text-slate-200
                dark:hover:border-sky-400
                dark:hover:text-sky-400
              "
            >
              Explore how it works
            </button>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Local AI</span>
            <span>Verified Guidance</span>
            <span>Offline Ready</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Section1_Hero;