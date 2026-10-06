import { useEffect, useState } from "react";
import MicroSlats from "../components/MicroSlats";

const Section3_Intelligence = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const updateTheme = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-white
        text-slate-900
        transition-colors
        duration-500
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* =====================================================
          MICRO SLATS BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 h-full w-full">
          <MicroSlats
            preset="swell"
            color="#3688D9"
            glintColor="#0EA5E9"
            backgroundColor={darkMode ? "#020617" : "#ffffff"}
            slatWidth={10}
            slatHeight={25}
            gap={3}
            roundness={0.75}
            interactive
            cursorStrength={1}
            cursorSize={40}
            swirl={0}
            trail={1.4}
            lean={0}
            intro
            scale={1.5}
            speed={0.6}
            direction={250}
            chop={0.55}
            stretch={0}
            glint={0.7}
            contrast={1.25}
            perspective={0.55}
            fog={0.55}
            introDuration={1.5}
            paused={false}
          />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >
        <div className="w-full max-w-6xl">

          {/* =================================================
              HEADING
          ================================================= */}
          <div className="mx-auto max-w-4xl text-center">

            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                tracking-[0.18em]
                text-sky-600
                dark:text-sky-400
                sm:mb-4
                sm:text-sm
                sm:tracking-[0.2em]
              "
            >
              EMERGENCY INTELLIGENCE
            </p>

            <h2
              className="
                font-['Bricolage_Grotesque']
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-slate-900
                transition-colors
                duration-500
                dark:text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Understand the situation.
              <br />

              <span
                className="
                  text-sky-600
                  transition-colors
                  duration-500
                  dark:text-sky-400
                "
              >
                Deliver the next step.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-xs
                leading-5
                text-slate-600
                transition-colors
                duration-500
                dark:text-slate-300
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              ResQ-AI identifies the emergency category locally and connects
              it with verified guidance designed for high-pressure situations.
            </p>
          </div>

          {/* =================================================
              INTELLIGENCE PIPELINE
          ================================================= */}
          <div
            className="
              mx-auto
              mt-7
              max-w-5xl
              rounded-[1.5rem]
              border
              border-slate-200/80
              bg-white/75
              p-3
              shadow-xl
              shadow-slate-900/5
              backdrop-blur-xl
              transition-all
              duration-500
              dark:border-slate-700/70
              dark:bg-slate-950/65
              dark:shadow-black/20
              sm:mt-10
              sm:rounded-[2rem]
              sm:p-6
              lg:p-7
            "
          >
            {/* TOP STATUS BAR */}
            <div
              className="
                mb-3
                flex
                flex-row
                items-center
                justify-between
                gap-2
                border-b
                border-slate-200
                pb-3
                dark:border-slate-800
                sm:mb-5
                sm:pb-4
              "
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-sky-500
                    shadow-[0_0_12px_rgba(14,165,233,0.7)]
                    sm:h-2
                    sm:w-2
                  "
                />

                <span
                  className="
                    truncate
                    text-[9px]
                    font-semibold
                    tracking-[0.1em]
                    text-slate-500
                    dark:text-slate-400
                    sm:text-xs
                    sm:tracking-[0.14em]
                  "
                >
                  LOCAL INTELLIGENCE ENGINE
                </span>
              </div>

              <span
                className="
                  shrink-0
                  rounded-full
                  border
                  border-sky-200
                  bg-sky-50
                  px-2
                  py-1
                  text-[8px]
                  font-semibold
                  tracking-wide
                  text-sky-700
                  dark:border-sky-900
                  dark:bg-sky-950/50
                  dark:text-sky-400
                  sm:px-3
                  sm:text-[10px]
                "
              >
                OFFLINE READY
              </span>
            </div>

            {/* =================================================
                PIPELINE
            ================================================= */}
            <div
              className="
                grid
                gap-2
                sm:gap-3
                lg:grid-cols-[1fr_auto_1fr_auto_1fr]
                lg:items-stretch
              "
            >

              {/* STEP 01 */}
              <div
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white/80
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-300
                  hover:shadow-lg
                  hover:shadow-sky-500/10
                  dark:border-slate-700
                  dark:bg-slate-900/70
                  dark:hover:border-sky-800
                  sm:rounded-2xl
                  sm:p-4
                "
              >
                <div className="mb-2 flex items-center justify-between sm:mb-4">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.15em]
                      text-slate-400
                      sm:text-[10px]
                    "
                  >
                    STEP 01
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-slate-100
                      px-2
                      py-1
                      text-[8px]
                      font-semibold
                      text-slate-500
                      dark:bg-slate-800
                      dark:text-slate-400
                      sm:text-[10px]
                    "
                  >
                    INPUT
                  </span>
                </div>

                <p
                  className="
                    text-xs
                    font-semibold
                    text-slate-900
                    dark:text-white
                    sm:text-sm
                  "
                >
                  Describe the emergency
                </p>

                <div
                  className="
                    mt-2
                    rounded-lg
                    border
                    border-slate-200
                    bg-slate-50
                    p-2.5
                    text-[10px]
                    leading-4
                    text-slate-600
                    dark:border-slate-700
                    dark:bg-slate-800/70
                    dark:text-slate-300
                    sm:mt-3
                    sm:rounded-xl
                    sm:p-3
                    sm:text-xs
                    sm:leading-5
                  "
                >
                  “Smoke is coming from my kitchen.”
                </div>
              </div>

              {/* DESKTOP CONNECTOR */}
              <div className="hidden items-center justify-center lg:flex">
                <div className="h-px w-8 bg-sky-300 dark:bg-sky-800" />
                <span className="text-sky-500">→</span>
              </div>

              {/* MOBILE CONNECTOR */}
              <div className="flex items-center justify-center py-0.5 lg:hidden">
                <span className="text-xs text-sky-500">↓</span>
              </div>

              {/* STEP 02 */}
              <div
                className="
                  rounded-xl
                  border
                  border-sky-200
                  bg-sky-50/80
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-400
                  hover:shadow-lg
                  hover:shadow-sky-500/10
                  dark:border-sky-900
                  dark:bg-sky-950/40
                  dark:hover:border-sky-700
                  sm:rounded-2xl
                  sm:p-4
                "
              >
                <div className="mb-2 flex items-center justify-between sm:mb-4">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.15em]
                      text-sky-500
                      sm:text-[10px]
                    "
                  >
                    STEP 02
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-sky-100
                      px-2
                      py-1
                      text-[8px]
                      font-semibold
                      text-sky-700
                      dark:bg-sky-900/60
                      dark:text-sky-400
                      sm:text-[10px]
                    "
                  >
                    LOCAL AI
                  </span>
                </div>

                <p
                  className="
                    text-xs
                    font-semibold
                    text-slate-900
                    dark:text-white
                    sm:text-sm
                  "
                >
                  Emergency classification
                </p>

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between
                    rounded-lg
                    border
                    border-sky-200
                    bg-white/70
                    p-2.5
                    dark:border-sky-900
                    dark:bg-slate-900/70
                    sm:mt-3
                    sm:rounded-xl
                    sm:p-3
                  "
                >
                  <div>
                    <p className="text-base font-bold text-sky-600 dark:text-sky-400 sm:text-lg">
                      FIRE
                    </p>

                    <p className="text-[9px] text-slate-500 dark:text-slate-400 sm:text-[11px]">
                      Category detected
                    </p>
                  </div>

                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 sm:text-sm">
                    94%
                  </span>
                </div>
              </div>

              {/* DESKTOP CONNECTOR */}
              <div className="hidden items-center justify-center lg:flex">
                <div className="h-px w-8 bg-sky-300 dark:bg-sky-800" />
                <span className="text-sky-500">→</span>
              </div>

              {/* MOBILE CONNECTOR */}
              <div className="flex items-center justify-center py-0.5 lg:hidden">
                <span className="text-xs text-sky-500">↓</span>
              </div>

              {/* STEP 03 */}
              <div
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white/80
                  p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-300
                  hover:shadow-lg
                  hover:shadow-sky-500/10
                  dark:border-slate-700
                  dark:bg-slate-900/70
                  dark:hover:border-sky-800
                  sm:rounded-2xl
                  sm:p-4
                "
              >
                <div className="mb-2 flex items-center justify-between sm:mb-4">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.15em]
                      text-slate-400
                      sm:text-[10px]
                    "
                  >
                    STEP 03
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-sky-100
                      px-2
                      py-1
                      text-[8px]
                      font-semibold
                      text-sky-700
                      dark:bg-sky-900/60
                      dark:text-sky-400
                      sm:text-[10px]
                    "
                  >
                    VERIFIED
                  </span>
                </div>

                <p
                  className="
                    text-xs
                    font-semibold
                    text-slate-900
                    dark:text-white
                    sm:text-sm
                  "
                >
                  Guidance ready
                </p>

                <div
                  className="
                    mt-2
                    rounded-lg
                    border
                    border-slate-200
                    bg-slate-50
                    p-2.5
                    dark:border-slate-700
                    dark:bg-slate-800/70
                    sm:mt-3
                    sm:rounded-xl
                    sm:p-3
                  "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-sky-100
                        text-[10px]
                        text-sky-600
                        dark:bg-sky-900/60
                        dark:text-sky-400
                        sm:h-6
                        sm:w-6
                        sm:text-xs
                      "
                    >
                      ✓
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-slate-600
                        dark:text-slate-300
                        sm:text-xs
                      "
                    >
                      Stress Mode ready
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM STATUS
            ================================================= */}
            <div
              className="
                mt-3
                grid
                grid-cols-3
                gap-1
                border-t
                border-slate-200
                pt-3
                dark:border-slate-800
                sm:mt-5
                sm:gap-2
                sm:pt-4
              "
            >
              <div className="flex items-center justify-center gap-1 sm:justify-start sm:gap-2">
                <span className="h-1 w-1 rounded-full bg-sky-500 sm:h-1.5 sm:w-1.5" />

                <span className="text-[8px] text-slate-500 dark:text-slate-400 sm:text-xs">
                  Local AI active
                </span>
              </div>

              <div className="flex items-center justify-center gap-1 sm:gap-2">
                <span className="h-1 w-1 rounded-full bg-sky-500 sm:h-1.5 sm:w-1.5" />

                <span className="text-[8px] text-slate-500 dark:text-slate-400 sm:text-xs">
                  Verified knowledge
                </span>
              </div>

              <div className="flex items-center justify-center gap-1 sm:justify-end sm:gap-2">
                <span className="h-1 w-1 rounded-full bg-sky-500 sm:h-1.5 sm:w-1.5" />

                <span className="text-[8px] text-slate-500 dark:text-slate-400 sm:text-xs">
                  No internet required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3_Intelligence;