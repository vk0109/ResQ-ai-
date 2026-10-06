import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Download,
  WifiOff,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Section6_Download = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
const navigate = useNavigate();
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

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

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsInstallable(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );

    return () => {
      observer.disconnect();
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

 const handleInstall = async () => {
  const sessionToken = localStorage.getItem("resqai_session_token");
  const emailVerified = localStorage.getItem("resqai_email_verified");

  // Logged-in existing user → install directly
  if (sessionToken) {
    if (!deferredPrompt) {
      alert(
        "ResQ-AI can be installed from your browser's Install App or Add to Home Screen option."
      );
      return;
    }

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstallable(false);
    }

    setDeferredPrompt(null);
    return;
  }

  // New user who already verified email → install directly
  if (emailVerified === "true") {
    if (!deferredPrompt) {
      alert(
        "ResQ-AI is ready. Use your browser's Install App or Add to Home Screen option."
      );
      return;
    }

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstallable(false);
    }

    setDeferredPrompt(null);
    return;
  }

  // Unauthorized user → Login
  navigate("/login", {
    state: {
      fromDownload: true,
    },
  });
};
  return (
    <section
      className={`
        relative min-h-screen w-full overflow-hidden
        px-5 py-16 transition-colors duration-500
        sm:px-8 sm:py-20 lg:px-12
        ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-white text-slate-950"
        }
      `}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`
            absolute left-1/2 top-1/2
            h-[420px] w-[420px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full blur-[130px]
            sm:h-[600px] sm:w-[600px]
            ${
              darkMode
                ? "bg-sky-500/10"
                : "bg-sky-200/40"
            }
          `}
        />

        <div
          className={`
            absolute right-[-160px] top-[-160px]
            h-[400px] w-[400px] rounded-full border
            sm:h-[550px] sm:w-[550px]
            ${
              darkMode
                ? "border-sky-400/10"
                : "border-sky-200/60"
            }
          `}
        />

        <div
          className={`
            absolute bottom-[-180px] left-[-150px]
            h-[400px] w-[400px] rounded-full border
            ${
              darkMode
                ? "border-blue-400/10"
                : "border-blue-200/50"
            }
          `}
        />

        <div
          className={`
            absolute inset-0 opacity-[0.035]
            ${
              darkMode
                ? "bg-[linear-gradient(rgba(56,189,248,1)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,1)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(14,165,233,1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,1)_1px,transparent_1px)]"
            }
          `}
          style={{ backgroundSize: "70px 70px" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center text-center">

        {/* LABEL */}
        <div
          className={`
            inline-flex items-center gap-2 rounded-full border
            px-3 py-1.5 text-[9px] font-semibold
            tracking-[0.2em] backdrop-blur-md
            sm:text-[10px]
            ${
              darkMode
                ? "border-white/10 bg-white/[0.05] text-sky-300"
                : "border-sky-200 bg-sky-50 text-sky-700"
            }
          `}
        >
          <WifiOff size={12} />
          READY WHEN YOU ARE
        </div>

        {/* HEADING */}
        <h2
          className={`
            mt-6 max-w-4xl
            font-['Bricolage_Grotesque']
            text-[2.8rem] font-semibold
            leading-[0.92] tracking-tight
            sm:text-5xl
            lg:text-7xl
            ${
              darkMode
                ? "text-white"
                : "text-slate-950"
            }
          `}
        >
          Take emergency intelligence
          <br />
          <span className="text-sky-500">
            with you.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className={`
            mt-5 max-w-2xl text-xs leading-5
            sm:text-sm sm:leading-6
            ${
              darkMode
                ? "text-slate-400"
                : "text-slate-500"
            }
          `}
        >
          Install ResQ-AI on your device and prepare it
          for offline emergency decision support — before
          you actually need it.
        </p>

        {/* INSTALL CARD */}
        <div
          className={`
            mt-8 w-full max-w-2xl rounded-3xl border
            p-5 text-left backdrop-blur-xl
            transition-all duration-500
            sm:mt-10 sm:p-6
            ${
              darkMode
                ? "border-white/[0.08] bg-white/[0.04] shadow-[0_25px_80px_rgba(14,165,233,0.08)]"
                : "border-slate-200 bg-white/80 shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
            }
          `}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* INFO */}
            <div className="flex items-center gap-4">
              <div
                className={`
                  flex h-12 w-12 shrink-0 items-center
                  justify-center rounded-2xl
                  ${
                    darkMode
                      ? "bg-sky-500/10 text-sky-400"
                      : "bg-sky-50 text-sky-600"
                  }
                `}
              >
                <Smartphone size={22} />
              </div>

              <div>
                <h3
                  className={`
                    text-sm font-semibold
                    ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }
                  `}
                >
                  Install ResQ-AI
                </h3>

                <p
                  className={`
                    mt-1 text-[10px] leading-4 sm:text-xs
                    ${
                      darkMode
                        ? "text-slate-500"
                        : "text-slate-400"
                    }
                  `}
                >
                  Install once. Use core features offline.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleInstall}
              className="
                group flex w-full items-center justify-center
                gap-2 rounded-full bg-sky-600
                px-5 py-3 text-xs font-semibold text-white
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-sky-700
                hover:shadow-lg
                hover:shadow-sky-500/20
                sm:w-auto
              "
            >
              <Download
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              {isInstallable ? "Install ResQ-AI" : "Get Offline Version"}

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* READINESS */}
          <div
            className={`
              mt-5 grid grid-cols-1 gap-2 border-t pt-4
              sm:grid-cols-3
              ${
                darkMode
                  ? "border-white/[0.07]"
                  : "border-slate-200"
              }
            `}
          >
            {[
              "Offline AI",
              "Verified guidance",
              "Local emergency data",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={13}
                  className="shrink-0 text-sky-500"
                />

                <span
                  className={`
                    text-[10px]
                    ${
                      darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                    }
                  `}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-sky-500" />
            <span
              className={`
                text-[9px]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              Privacy conscious
            </span>
          </div>

          <div className="h-1 w-1 rounded-full bg-sky-500" />

          <div className="flex items-center gap-1.5">
            <WifiOff size={13} className="text-sky-500" />
            <span
              className={`
                text-[9px]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              Offline first
            </span>
          </div>

          <div className="h-1 w-1 rounded-full bg-sky-500" />

          <span
            className={`
              text-[9px]
              ${
                darkMode
                  ? "text-slate-500"
                  : "text-slate-400"
              }
            `}
          >
            Built for emergencies
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section6_Download;