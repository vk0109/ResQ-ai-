import { useLayoutEffect, useRef } from "react";
import { createSectionTransition } from "../animations/sectionTransition";

import Section1_Hero from "../landingpage/Section1_Hero";
import Section2_ProblemSolution from "../landingpage/Section2_ProblemSolution";
import Section3_Intelligence from "../landingpage/Section3_Intelligence";
import Section4_Capabilities from "../landingpage/Section4_Capabilities";
import Section5_FAQ from "../landingpage/Section5_FAQ";
import Section6_Download from "../landingpage/Section6_Download";
import Footer from "../landingpage/Footer";

const LandingScene = () => {
  const sceneRef = useRef(null);

  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const intelligenceRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const faqRef = useRef(null);
  const downloadRef = useRef(null);

  const transitionRef = useRef(null);

  useLayoutEffect(() => {
    transitionRef.current = createSectionTransition({
      trigger: sceneRef.current,
      sections: [
        heroRef.current,
        problemRef.current,
        intelligenceRef.current,
        capabilitiesRef.current,
        faqRef.current,
        downloadRef.current,
      ],
    });

    return () => {
      transitionRef.current?.cleanup?.();
      transitionRef.current = null;
    };
  }, []);

  return (
    <>
      <main
        ref={sceneRef}
        className="relative h-[600vh] w-full"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* SECTION 1 */}
          <div
            ref={heroRef}
            id="hero"
            className="absolute inset-0 h-full w-full"
          >
            <Section1_Hero
              onExplore={() =>
                transitionRef.current?.scrollToSection(2)
              }
               onGetStarted={() =>
    transitionRef.current?.scrollToSection(5)
  }
            />
          </div>

          {/* SECTION 2 */}
          <div
            ref={problemRef}
            id="problem"
            className="absolute inset-0 h-full w-full"
          >
            <Section2_ProblemSolution />
          </div>

          {/* SECTION 3 */}
          <div
            ref={intelligenceRef}
            id="intelligence"
            className="absolute inset-0 h-full w-full"
          >
            <Section3_Intelligence />
          </div>

          {/* SECTION 4 */}
          <div
            ref={capabilitiesRef}
            id="capabilities"
            className="absolute inset-0 h-full w-full"
          >
            <Section4_Capabilities />
          </div>

          {/* SECTION 5 */}
          <div
            ref={faqRef}
            id="faq"
            className="absolute inset-0 h-full w-full"
          >
            <Section5_FAQ />
          </div>

          {/* SECTION 6 */}
          <div
            ref={downloadRef}
            id="download"
            className="absolute inset-0 h-full w-full"
          >
            <Section6_Download />
          </div>

        </div>
      </main>

      {/* FOOTER — NOT PART OF GSAP */}
      <Footer />
    </>
  );
};

export default LandingScene;