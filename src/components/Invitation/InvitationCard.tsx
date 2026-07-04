import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Border } from "./Border";
import { BackgroundPattern } from "./BackgroundPattern";
import { CoupleNames } from "../Typography/CoupleNames";
import { Section } from "../Layout/Section";
import { Basmala } from "../Typography/Basmala";
import { QuranVerse } from "../Typography/QuranVerse";
import { Divider } from "./Divider";
import { Dua } from "../Typography/Dua";
import { ClosingVerse } from "../Typography/ClosingVerse";

export function InvitationCard() {
  const reduced = useReducedMotion();

  return (
    <motion.main
      className="paper-card relative rounded-[3px] px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
      initial={reduced ? undefined : { opacity: 0, rotateX: -15, y: 40, scale: 0.96 }}
      animate={reduced ? undefined : { opacity: 1, rotateX: 0, y: 0, scale: 1 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        transformStyle: 'preserve-3d', 
        transformOrigin: 'top center',
        backfaceVisibility: 'hidden'
      }}
    >
      <Border />
      <BackgroundPattern />

      <div className="relative z-10 flex flex-col items-center w-full min-h-full">
        {/* Top section — Basmala + Quran Verse */}
        <div className="flex flex-col items-center">
          <Section ariaLabel="البسملة">
            <Basmala />
          </Section>

          <Section ariaLabel="آية قرآنية">
            <QuranVerse />
          </Section>
        </div>

        {/* Center section — Couple Names */}
        <div className="flex-1 w-full flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
          <CoupleNames />
        </div>

        {/* Bottom section — Dua + Closing verse */}
        <div className="flex flex-col items-center w-full">
          <Section ariaLabel="الدعاء بالبركة">
            <Dua />
          </Section>

          <Divider />

          <Section ariaLabel="ختام الآية">
            <ClosingVerse />
          </Section>
        </div>
      </div>
    </motion.main>
  );
}
