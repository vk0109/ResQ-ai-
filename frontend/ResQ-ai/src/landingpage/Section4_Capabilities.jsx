import {
  Activity,
  BrainCircuit,
  Mic,
  Users,
  MapPin,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    number: "02",
    title: "Offline AI",
    description: "Emergency classification remains available without internet.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Voice",
    description: "Use voice input when typing is difficult.",
    icon: Mic,
  },
  {
    number: "04",
    title: "Contacts",
    description: "Keep trusted emergency contacts accessible.",
    icon: Users,
  },
  {
    number: "05",
    title: "Location",
    description: "Use location with explicit permission when needed.",
    icon: MapPin,
  },
  {
    number: "06",
    title: "Smart Sync",
    description: "Sync local data when connectivity returns.",
    icon: RefreshCw,
  },
];

const Section4_Capabilities = () => {
  return (
    <section
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-slate-50
        px-4
        py-5
        text-slate-950
        transition-colors
        duration-500
        dark:bg-slate-950
        dark:text-white
        sm:px-6
        sm:py-8
        lg:px-10
        lg:py-10
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[-14rem]
            h-[28rem]
            w-[28rem]
            -translate-x-1/2
            rounded-full
            bg-sky-200/40
            blur-[110px]
            dark:bg-sky-500/10
            sm:h-[36rem]
            sm:w-[36rem]
          "
        />

        <div
          className="
            absolute
            -right-24
            bottom-[-10rem]
            h-72
            w-72
            rounded-full
            bg-cyan-100/60
            blur-[100px]
            dark:bg-cyan-500/10
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.10),transparent_45%)]
            dark:bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.08),transparent_45%)]
          "
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">

        {/* HEADER */}

        <div className="shrink-0 text-center">

          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-200
              bg-white/70
              px-3
              py-1
              text-[9px]
              font-semibold
              tracking-[0.2em]
              text-sky-700
              shadow-sm
              backdrop-blur-md
              dark:border-sky-900
              dark:bg-slate-900/70
              dark:text-sky-400
              sm:text-[10px]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            CAPABILITIES
          </div>

          <h2
            className="
              mx-auto
              mt-3
              max-w-3xl
              font-['Bricolage_Grotesque']
              text-[2.35rem]
              font-semibold
              leading-[0.94]
              tracking-tight
              text-slate-950
              dark:text-white
              sm:mt-4
              sm:text-5xl
              lg:text-6xl
            "
          >
            Built for the{" "}
            <span className="text-sky-600 dark:text-sky-400">
              moments that matter.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-[11px]
              leading-4
              text-slate-500
              dark:text-slate-400
              sm:mt-4
              sm:text-sm
              sm:leading-6
            "
          >
            Emergency decision support designed to stay simple,
            accessible, and useful under pressure.
          </p>
        </div>

        {/* FEATURED CARD */}

        <div
          className="
            mt-5
            shrink-0
            overflow-hidden
            rounded-[1.5rem]
            border
            border-sky-200
            bg-white/80
            shadow-[0_15px_50px_rgba(14,165,233,0.10)]
            backdrop-blur-xl
            dark:border-slate-800
            dark:bg-slate-900/70
            sm:mt-7
            sm:rounded-[1.75rem]
          "
        >
          <div
            className="
              flex
              min-h-[190px]
              flex-col
              justify-between
              p-5
              sm:min-h-[210px]
              sm:p-7
              lg:grid
              lg:grid-cols-[1fr_0.55fr]
              lg:p-8
            "
          >
            {/* LEFT */}

            <div className="relative">

              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.18em]
                    text-slate-400
                  "
                >
                  01 / CORE CAPABILITY
                </span>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-sky-200
                    bg-sky-50
                    text-sky-600
                    dark:border-sky-900
                    dark:bg-sky-950
                    dark:text-sky-400
                    lg:hidden
                  "
                >
                  <Activity size={18} />
                </div>
              </div>

              <h3
                className="
                  mt-5
                  font-['Bricolage_Grotesque']
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-slate-950
                  dark:text-white
                  sm:mt-6
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Stress Mode
              </h3>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-xs
                  leading-5
                  text-slate-500
                  dark:text-slate-400
                  sm:text-sm
                  sm:leading-6
                "
              >
                Clear, focused instructions designed to reduce
                cognitive load during high-pressure situations.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.14em]
                    text-slate-400
                    sm:text-[9px]
                  "
                >
                  ONE STEP AT A TIME
                </span>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div
              className="
                relative
                mt-4
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <div
                className="
                  absolute
                  h-44
                  w-44
                  rounded-full
                  border
                  border-sky-200
                  dark:border-sky-900
                "
              />

              <div
                className="
                  absolute
                  h-28
                  w-28
                  rounded-full
                  border
                  border-sky-200
                  dark:border-sky-900
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white
                  bg-white/90
                  px-4
                  py-3
                  shadow-xl
                  dark:border-slate-700
                  dark:bg-slate-800/90
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-sky-500
                    text-white
                  "
                >
                  <Activity size={19} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    Guidance ready
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                    One step at a time
                  </p>
                </div>

                <span className="ml-3 h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* SMALL CAPABILITY CARDS */}

        <div
          className="
            mt-3
            grid
            min-h-0
            flex-1
            grid-cols-2
            gap-2.5
            sm:mt-4
            sm:grid-cols-2
            sm:gap-3
            lg:grid-cols-5
          "
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  group
                  relative
                  flex
                  min-h-0
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/70
                  p-3.5
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-200
                  hover:shadow-lg
                  dark:border-slate-800
                  dark:bg-slate-900/70
                  dark:hover:border-sky-900
                  sm:rounded-3xl
                  sm:p-5
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      font-semibold
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      text-slate-500
                      group-hover:border-sky-200
                      group-hover:bg-sky-50
                      group-hover:text-sky-600
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-400
                    "
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <h3
                    className="
                      font-['Bricolage_Grotesque']
                      text-base
                      font-semibold
                      leading-tight
                      text-slate-900
                      dark:text-white
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      line-clamp-2
                      text-[9px]
                      leading-3.5
                      text-slate-500
                      dark:text-slate-400
                      sm:text-xs
                      sm:leading-5
                    "
                  >
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={14}
                  className="
                    absolute
                    bottom-3
                    right-3
                    text-slate-300
                    transition-all
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-sky-500
                    sm:bottom-4
                    sm:right-4
                  "
                />
              </article>
            );
          })}
        </div>

        {/* STATUS */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-center
            gap-2
            pb-1
            pt-3
            text-center
            sm:gap-3
            sm:pt-4
          "
        >
          <span className="text-[8px] text-slate-400 sm:text-[10px]">
            Local intelligence
          </span>

          <span className="h-1 w-1 rounded-full bg-sky-400" />

          <span className="text-[8px] text-slate-400 sm:text-[10px]">
            Verified guidance
          </span>

          <span className="h-1 w-1 rounded-full bg-sky-400" />

          <span className="text-[8px] text-slate-400 sm:text-[10px]">
            Offline ready
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section4_Capabilities;