import { useEffect, useState } from "react";
import Dither from "../components/Dither";

const Section2_ProblemSolution = () => {
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

  const problemPoints = [
    "Internet connection required",
    "Information can be difficult to access under stress",
    "Generic responses may not match the situation",
  ];

  const solutionPoints = [
    "Local AI identifies the emergency category",
    "Verified guidance is stored locally",
    "Stress Mode keeps instructions short and focused",
  ];

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        bg-white
        px-4
        py-10
        text-slate-900
        transition-colors
        duration-500
        dark:bg-slate-950
        dark:text-white
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-14
      "
    >
      {/* =====================================================
          DITHER BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <Dither
          waveColor={[0.0235, 0.7137, 0.8314]}
          backgroundColor={darkMode ? [0.0078, 0.0235, 0.0902] : [1, 1, 1]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={4}
          pixelSize={2}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* =================================================
            HEADING
        ================================================= */}
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">

          <p
            className="
              mb-2
              text-[10px]
              font-semibold
              tracking-[0.18em]
              text-sky-600
              dark:text-sky-400
              sm:mb-3
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            THE PROBLEM
          </p>

          <h2
            className="
              font-['Bricolage_Grotesque']
              text-3xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-slate-900
              dark:text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            When the network disappears,
            <span className="text-sky-600 dark:text-sky-400">
              {" "}help shouldn't.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-xs
              leading-5
              text-slate-600
              dark:text-slate-300
              sm:mt-4
              sm:text-base
              sm:leading-7
            "
          >
            Emergencies do not wait for a stable connection. ResQ-AI is
            designed to keep its core decision support available when the
            internet is not.
          </p>
        </div>

        {/* =================================================
            PROBLEM → SOLUTION
        ================================================= */}
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-5">

          {/* =================================================
              PROBLEM CARD
          ================================================= */}
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50/90
              p-4
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-slate-300
              hover:shadow-lg
              sm:rounded-3xl
              sm:p-6
              dark:border-slate-800
              dark:bg-slate-900/75
              dark:hover:border-slate-700
            "
          >
            <div className="mb-4 flex items-center justify-between sm:mb-6">

              <span
                className="
                  rounded-full
                  border
                  border-slate-300
                  px-2.5
                  py-1
                  text-[9px]
                  font-semibold
                  tracking-wide
                  text-slate-500
                  dark:border-slate-700
                  dark:text-slate-400
                  sm:px-3
                  sm:text-[11px]
                "
              >
                WITHOUT RESQ-AI
              </span>

              <span className="text-[10px] text-slate-400 sm:text-sm">
                01
              </span>
            </div>

            <h3
              className="
                font-['Bricolage_Grotesque']
                text-lg
                font-semibold
                leading-tight
                text-slate-900
                dark:text-white
                sm:text-2xl
              "
            >
              Traditional emergency tools depend on the network.
            </h3>

            <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {problemPoints.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-xs
                    leading-5
                    text-slate-600
                    dark:text-slate-300
                    sm:gap-3
                    sm:text-sm
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-slate-400
                    "
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              SOLUTION CARD
          ================================================= */}
          <div
            className="
              rounded-2xl
              border
              border-sky-200
              bg-sky-50/85
              p-4
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-sky-300
              hover:shadow-lg
              sm:rounded-3xl
              sm:p-6
              dark:border-sky-900/60
              dark:bg-sky-950/70
              dark:hover:border-sky-800
            "
          >
            <div className="mb-4 flex items-center justify-between sm:mb-6">

              <span
                className="
                  rounded-full
                  border
                  border-sky-300
                  bg-white/70
                  px-2.5
                  py-1
                  text-[9px]
                  font-semibold
                  tracking-wide
                  text-sky-700
                  dark:border-sky-800
                  dark:bg-slate-900/60
                  dark:text-sky-400
                  sm:px-3
                  sm:text-[11px]
                "
              >
                WITH RESQ-AI
              </span>

              <span className="text-[10px] text-sky-500 sm:text-sm">
                02
              </span>
            </div>

            <h3
              className="
                font-['Bricolage_Grotesque']
                text-lg
                font-semibold
                leading-tight
                text-slate-900
                dark:text-white
                sm:text-2xl
              "
            >
              Core emergency intelligence stays available offline.
            </h3>

            <div className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {solutionPoints.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-xs
                    leading-5
                    text-slate-700
                    dark:text-slate-200
                    sm:gap-3
                    sm:text-sm
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-sky-500
                    "
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}
        <div
          className="
            mx-auto
            mt-3
            max-w-4xl
            rounded-2xl
            border
            border-slate-200
            bg-white/90
            px-4
            py-3
            text-center
            shadow-sm
            backdrop-blur-sm
            sm:mt-5
            sm:rounded-3xl
            sm:px-6
            sm:py-5
            dark:border-slate-800
            dark:bg-slate-900/75
          "
        >
          <p
            className="
              font-['Bricolage_Grotesque']
              text-sm
              font-medium
              leading-5
              text-slate-900
              dark:text-white
              sm:text-lg
              sm:leading-7
            "
          >
            The goal isn't more information.
            <br />

            <span className="text-sky-600 dark:text-sky-400">
              It's the right information at the right moment.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section2_ProblemSolution;