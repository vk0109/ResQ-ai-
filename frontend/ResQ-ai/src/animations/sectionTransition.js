import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const createSectionTransition = ({
  trigger,
  sections,
}) => {
  let scrollToSection = () => {};

  const ctx = gsap.context(() => {
    // --------------------------------------------------
    // VALIDATION
    // --------------------------------------------------

    if (!trigger || !sections?.length) {
      console.error(
        "SectionTransition: trigger or sections missing."
      );
      return;
    }

    const panels = sections.filter(Boolean);

    if (panels.length < 2) {
      console.error(
        "SectionTransition: at least 2 sections are required."
      );
      return;
    }

    const totalSections = panels.length;
    const lastIndex = totalSections - 1;

    // --------------------------------------------------
    // INITIAL PANEL STATE
    // --------------------------------------------------

    panels.forEach((panel, index) => {
      gsap.set(panel, {
        xPercent: index === 0 ? 0 : 100,
        zIndex: totalSections - index,
        force3D: true,
      });
    });

    // --------------------------------------------------
    // MAIN TIMELINE
    // --------------------------------------------------

    const timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },

      scrollTrigger: {
        trigger,

        start: "top top",
        end: "bottom bottom",

        scrub: 0.7,

        // ----------------------------------------------
        // SECTION SNAP
        // ----------------------------------------------

        snap: {
          snapTo: (progress) => {
            const sectionStep = 1 / lastIndex;

            return (
              Math.round(progress / sectionStep) *
              sectionStep
            );
          },

          duration: {
            min: 0.2,
            max: 0.55,
          },

          delay: 0.05,
          ease: "power2.out",
        },

        invalidateOnRefresh: true,

        // ----------------------------------------------
        // KEEP ACTIVE SECTION ON TOP
        // ----------------------------------------------

        onUpdate: (self) => {
          const scaledProgress =
            self.progress * lastIndex;

          const activeIndex = Math.round(
            scaledProgress
          );

          panels.forEach((panel, index) => {
            gsap.set(panel, {
              zIndex:
                index === activeIndex
                  ? totalSections + 10
                  : totalSections - index,
            });
          });
        },
      },
    });

    // --------------------------------------------------
    // PANEL TRANSITIONS
    // --------------------------------------------------

    for (let index = 0; index < lastIndex; index++) {
      const currentPanel = panels[index];
      const nextPanel = panels[index + 1];

      /*
        Current:
        CENTER → LEFT

        Next:
        RIGHT → CENTER
      */

      timeline.to(
        currentPanel,
        {
          xPercent: -100,
          duration: 1,
        },
        index
      );

      timeline.to(
        nextPanel,
        {
          xPercent: 0,
          duration: 1,
        },
        index
      );
    }

    // --------------------------------------------------
    // BUTTON / PROGRAMMATIC NAVIGATION
    // --------------------------------------------------

    scrollToSection = (requestedIndex) => {
      const scrollTrigger = timeline.scrollTrigger;

      if (!scrollTrigger) {
        console.warn(
          "SectionTransition: ScrollTrigger is not ready."
        );
        return;
      }

      const index = Math.max(
        0,
        Math.min(
          Number(requestedIndex) || 0,
          lastIndex
        )
      );

      const progress = index / lastIndex;

      const targetY =
        scrollTrigger.start +
        (scrollTrigger.end - scrollTrigger.start) *
          progress;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    };

    // --------------------------------------------------
    // REFRESH
    // --------------------------------------------------

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, trigger);

  // --------------------------------------------------
  // RETURN API
  // --------------------------------------------------

  return {
    scrollToSection,

    cleanup: () => {
      ctx.revert();
    },
  };
};