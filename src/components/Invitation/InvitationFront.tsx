import { Border } from "./Border";
import { BackgroundPattern } from "./BackgroundPattern";
import { FloralCorner } from "./FloralCorner";
import { CoupleNames } from "../Typography/CoupleNames";
import { Basmala } from "../Typography/Basmala";
import { QuranVerse } from "../Typography/QuranVerse";
import { Divider } from "./Divider";
import { Dua } from "../Typography/Dua";
import { ClosingVerse } from "../Typography/ClosingVerse";

export function InvitationFront() {
  return (
    <div
      className="paper-card relative rounded-[4px] w-full"
      style={{
        height: '100%',
        padding: 'clamp(24px, 5vw, 40px) clamp(24px, 5vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'visible',
      }}
    >
      <Border />
      <BackgroundPattern />

      {/* Floral corners */}
      <FloralCorner position="bl" />
      <FloralCorner position="br" />
      <FloralCorner position="tl" />
      <FloralCorner position="tr" />

      {/* Content */}
      <div className="relative flex flex-col items-center w-full" style={{ gap: '0', zIndex: 2 }}>

        {/* ── TOP: Arch + Basmala ── */}
        <div className="flex flex-col items-center w-full" style={{ marginBottom: '8px' }}>
          <Basmala />
        </div>

        {/* ── Gold divider ── */}
        <Divider />

        {/* ── Quran verse ── */}
        <div className="flex flex-col items-center w-full" style={{ marginBottom: '4px', marginTop: '4px' }}>
          <QuranVerse />
        </div>

        {/* ── Divider ── */}
        <Divider />

        {/* ── CENTER: Couple names ── */}
        <div className="w-full flex items-center justify-center" style={{ padding: 'clamp(16px, 4vh, 36px) 0' }}>
          <CoupleNames />
        </div>

        {/* ── Divider ── */}
        <Divider />

        {/* ── Dua ── */}
        <div className="flex flex-col items-center w-full" style={{ marginTop: '4px' }}>
          <Dua />
        </div>

        {/* ── Slim divider ── */}
        <Divider slim />

        {/* ── Closing verse ── */}
        <div className="flex flex-col items-center w-full">
          <ClosingVerse />
        </div>

      </div>
    </div>
  );
}
