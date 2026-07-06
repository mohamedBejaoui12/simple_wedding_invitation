import { Border } from "./Border";
import { BackgroundPattern } from "./BackgroundPattern";
import { CoupleNames } from "../Typography/CoupleNames";
import { Section } from "../Layout/Section";
import { Basmala } from "../Typography/Basmala";
import { QuranVerse } from "../Typography/QuranVerse";
import { Divider } from "./Divider";
import { Dua } from "../Typography/Dua";
import { ClosingVerse } from "../Typography/ClosingVerse";

export function InvitationFront() {
  return (
    <div className="paper-card relative rounded-[3px] px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 w-full h-full flex flex-col justify-between" style={{ minHeight: '85vh' }}>
      <Border />
      <BackgroundPattern />

      <div className="relative z-10 flex flex-col items-center w-full h-full justify-between">
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
    </div>
  );
}
