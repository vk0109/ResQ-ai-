import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      className={`
        relative overflow-hidden border-t
        px-5 pb-6 pt-14
        transition-colors duration-500
        sm:px-8 sm:pt-16
        lg:px-12 lg:pt-20
        ${
          darkMode
            ? "border-white/[0.07] bg-slate-950 text-white"
            : "border-slate-200 bg-slate-50 text-slate-950"
        }
      `}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`
            absolute -bottom-56 left-1/2
            h-[500px] w-[700px]
            -translate-x-1/2 rounded-full blur-[140px]
            ${
              darkMode
                ? "bg-sky-500/[0.07]"
                : "bg-sky-300/[0.18]"
            }
          `}
        />

        <div
          className={`
            absolute right-[-180px] top-[-180px]
            h-[400px] w-[400px]
            rounded-full border
            ${
              darkMode
                ? "border-sky-400/[0.08]"
                : "border-sky-300/40"
            }
          `}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* BRAND */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl bg-sky-600 text-white
                  shadow-lg shadow-sky-500/20
                "
              >
                <Activity size={18} strokeWidth={2.2} />
              </div>

              <span
                className="
                  font-['Bricolage_Grotesque']
                  text-xl font-semibold tracking-tight
                "
              >
                ResQ-AI
              </span>
            </div>

            <p
              className={`
                mt-5 max-w-sm text-xs leading-5 sm:text-sm sm:leading-6
                ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-500"
                }
              `}
            >
              Offline-first emergency decision support
              designed to keep critical guidance available
              when connectivity cannot be relied on.
            </p>

            {/* STATUS */}
            <div
              className={`
                mt-6 inline-flex items-center gap-2
                rounded-full border px-3 py-1.5
                ${
                  darkMode
                    ? "border-white/[0.08] bg-white/[0.04]"
                    : "border-slate-200 bg-white"
                }
              `}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span
                className={`
                  text-[9px] font-medium tracking-wide
                  ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                  }
                `}
              >
                SYSTEM READY
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p
              className={`
                text-[10px] font-semibold tracking-[0.18em]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              NAVIGATION
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "hero"],
                ["Problem & Solution", "problem"],
                ["Intelligence", "intelligence"],
                ["Capabilities", "capabilities"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`
                    group flex w-fit items-center gap-1
                    text-left text-xs transition-colors
                    ${
                      darkMode
                        ? "text-slate-400 hover:text-sky-400"
                        : "text-slate-500 hover:text-sky-600"
                    }
                  `}
                >
                  {label}

                  <ArrowUpRight
                    size={12}
                    className="
                      opacity-0 transition-all duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:opacity-100
                    "
                  />
                </button>
              ))}
            </div>
          </div>

          {/* TRUST */}
          <div>
            <p
              className={`
                text-[10px] font-semibold tracking-[0.18em]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              RESQ-AI
            </p>

            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-sky-500"
                />

                <div>
                  <p
                    className={`
                      text-xs font-medium
                      ${
                        darkMode
                          ? "text-slate-200"
                          : "text-slate-700"
                      }
                    `}
                  >
                    Verified guidance
                  </p>

                  <p
                    className={`
                      mt-1 text-[10px] leading-4
                      ${
                        darkMode
                          ? "text-slate-500"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Guidance is sourced from the local
                    emergency knowledge base.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wifi
                  size={16}
                  className="mt-0.5 shrink-0 text-sky-500"
                />

                <div>
                  <p
                    className={`
                      text-xs font-medium
                      ${
                        darkMode
                          ? "text-slate-200"
                          : "text-slate-700"
                      }
                    `}
                  >
                    Offline first
                  </p>

                  <p
                    className={`
                      mt-1 text-[10px] leading-4
                      ${
                        darkMode
                          ? "text-slate-500"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Core emergency features remain available
                    after offline preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className={`
            my-10 h-px
            ${
              darkMode
                ? "bg-white/[0.07]"
                : "bg-slate-200"
            }
          `}
        />

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <p
            className={`
              text-[10px]
              ${
                darkMode
                  ? "text-slate-600"
                  : "text-slate-400"
              }
            `}
          >
            © {new Date().getFullYear()} ResQ-AI. Built
            for safer emergency response.
          </p>

          <div className="flex items-center gap-5">
            <span
              className={`
                text-[10px]
                ${
                  darkMode
                    ? "text-slate-600"
                    : "text-slate-400"
                }
              `}
            >
              Offline Emergency Intelligence
            </span>

           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;