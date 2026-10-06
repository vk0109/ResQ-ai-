import { useEffect, useState } from "react";
import {
  ChevronDown,
  ShieldCheck,
  WifiOff,
  CircleHelp,
} from "lucide-react";

const faqs = [
  {
    question: "Does ResQ-AI work without internet?",
    answer:
      "After installation and offline preparation, core emergency classification and verified guidance remain available without an active internet connection.",
  },
  {
    question: "Is the emergency guidance AI-generated?",
    answer:
      "No. AI identifies the emergency category. Guidance comes from a locally stored and verified emergency knowledge base.",
  },
  {
    question: "What happens when internet comes back?",
    answer:
      "ResQ-AI can synchronize eligible local data and download updated resources when connectivity is restored.",
  },
  {
    question: "Can I use ResQ-AI under stress?",
    answer:
      "Yes. Stress Mode reduces information overload by presenting focused guidance one step at a time.",
  },
];

const Section5_FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  /*
   * Listen to the existing Navbar theme toggle.
   * Navbar changes <html class="dark">,
   * and this section automatically follows it.
   */
  useEffect(() => {
    const updateTheme = () => {
      setDarkMode(
        document.documentElement.classList.contains("dark")
      );
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
      className={`
        relative
        h-screen
        w-full
        overflow-hidden
        px-4
        py-5
        transition-colors
        duration-500
        sm:px-6
        sm:py-8
        lg:px-10
        lg:py-10

        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-50 text-slate-950"
        }
      `}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large atmospheric circles */}

        <div
          className={`
            absolute
            -right-[180px]
            -top-[160px]
            h-[430px]
            w-[430px]
            rounded-full
            border
            sm:h-[600px]
            sm:w-[600px]

            ${
              darkMode
                ? "border-sky-400/10"
                : "border-sky-200/70"
            }
          `}
        />

        <div
          className={`
            absolute
            -right-[110px]
            -top-[90px]
            h-[290px]
            w-[290px]
            rounded-full
            border
            sm:h-[420px]
            sm:w-[420px]

            ${
              darkMode
                ? "border-sky-400/10"
                : "border-sky-200/50"
            }
          `}
        />

        {/* Center glow */}

        <div
          className={`
            absolute
            right-[8%]
            top-[12%]
            h-24
            w-24
            rounded-full
            blur-[60px]

            ${
              darkMode
                ? "bg-sky-400/10"
                : "bg-sky-300/30"
            }
          `}
        />

        {/* Bottom glow */}

        <div
          className={`
            absolute
            -bottom-40
            -left-[100px]
            h-[400px]
            w-[400px]
            rounded-full
            blur-[120px]

            ${
              darkMode
                ? "bg-blue-600/10"
                : "bg-blue-200/40"
            }
          `}
        />

        {/* Vertical accent */}

        <div
          className={`
            absolute
            left-1/2
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-sky-400/10
            via-transparent
            to-transparent
          `}
        />

        {/* Light mode soft wash */}

        {!darkMode && (
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_70%_15%,rgba(56,189,248,0.08),transparent_38%)]
            "
          />
        )}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-6xl
          flex-col
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="shrink-0">

          {/* Label */}

          <div
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-3
              py-1
              text-[9px]
              font-semibold
              tracking-[0.2em]
              backdrop-blur-md
              transition-colors
              duration-500
              sm:text-[10px]

              ${
                darkMode
                  ? `
                    border-white/10
                    bg-white/[0.05]
                    text-sky-300
                  `
                  : `
                    border-sky-200
                    bg-white/80
                    text-sky-700
                    shadow-sm
                  `
              }
            `}
          >
            <CircleHelp size={11} />

            FREQUENTLY ASKED
          </div>

          {/* Heading + description */}

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-3
              sm:mt-5
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-end
              lg:gap-10
            "
          >
            <h2
              className={`
                max-w-xl
                font-['Bricolage_Grotesque']
                text-[2.35rem]
                font-semibold
                leading-[0.94]
                tracking-tight
                transition-colors
                duration-500
                sm:text-5xl
                lg:text-6xl

                ${
                  darkMode
                    ? "text-white"
                    : "text-slate-950"
                }
              `}
            >
              Questions
              <br />

              <span className="text-sky-500 dark:text-sky-400">
                answered clearly.
              </span>
            </h2>

            <p
              className={`
                max-w-md
                text-[11px]
                leading-4
                transition-colors
                duration-500
                sm:text-sm
                sm:leading-6
                lg:pb-1

                ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-500"
                }
              `}
            >
              Understand how ResQ-AI handles offline emergency
              decision support, verified guidance, and stressful
              situations.
            </p>
          </div>
        </div>

        {/* =================================================
            FAQ
        ================================================= */}

        <div
          className="
            mx-auto
            mt-5
            flex
            min-h-0
            w-full
            max-w-3xl
            flex-1
            flex-col
            justify-center
            gap-2
            sm:mt-7
            sm:gap-3
            lg:mx-0
            lg:ml-auto
            lg:max-w-4xl
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? isOpen
                        ? `
                          border-sky-400/30
                          bg-white/[0.08]
                          shadow-[0_15px_45px_rgba(14,165,233,0.08)]
                        `
                        : `
                          border-white/[0.08]
                          bg-white/[0.035]
                          hover:border-white/15
                          hover:bg-white/[0.055]
                        `
                      : isOpen
                        ? `
                          border-sky-200
                          bg-white/90
                          shadow-[0_15px_45px_rgba(14,165,233,0.08)]
                        `
                        : `
                          border-slate-200
                          bg-white/70
                          hover:border-sky-200
                          hover:bg-white
                        `
                  }
                `}
              >
                {/* QUESTION */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? -1 : index
                    )
                  }
                  aria-expanded={isOpen}
                  className="
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-3
                    text-left
                    sm:px-5
                    sm:py-4
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">

                    {/* Number */}

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-[9px]
                        font-semibold
                        transition-colors
                        duration-300

                        ${
                          isOpen
                            ? "bg-sky-500 text-white"
                            : darkMode
                              ? "bg-white/[0.06] text-slate-500"
                              : "bg-slate-100 text-slate-400"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Question */}

                    <span
                      className={`
                        text-xs
                        font-medium
                        leading-5
                        transition-colors
                        duration-300
                        sm:text-sm

                        ${
                          darkMode
                            ? "text-slate-200"
                            : "text-slate-800"
                        }
                      `}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Arrow */}

                  <ChevronDown
                    size={17}
                    className={`
                      shrink-0
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180 text-sky-400"
                          : darkMode
                            ? "text-slate-500"
                            : "text-slate-400"
                      }
                    `}
                  />
                </button>

                {/* ANSWER */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`
                        px-4
                        pb-4
                        pl-14
                        pr-8
                        text-[10px]
                        leading-4
                        transition-colors
                        duration-300
                        sm:text-xs
                        sm:leading-5

                        ${
                          darkMode
                            ? "text-slate-400"
                            : "text-slate-500"
                        }
                      `}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================
            TRUST
        ================================================= */}

        <div
          className={`
            flex
            shrink-0
            items-center
            justify-center
            gap-4
            border-t
            pb-1
            pt-3
            transition-colors
            duration-500
            sm:gap-6
            sm:pt-4

            ${
              darkMode
                ? "border-white/[0.07]"
                : "border-slate-200"
            }
          `}
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck
              size={13}
              className="text-sky-500"
            />

            <span
              className={`
                text-[8px]
                transition-colors
                duration-300
                sm:text-[10px]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              Verified guidance
            </span>
          </div>

          <div className="h-1 w-1 rounded-full bg-sky-500" />

          <div className="flex items-center gap-1.5">
            <WifiOff
              size={13}
              className="text-sky-500"
            />

            <span
              className={`
                text-[8px]
                transition-colors
                duration-300
                sm:text-[10px]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              Offline ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5_FAQ;