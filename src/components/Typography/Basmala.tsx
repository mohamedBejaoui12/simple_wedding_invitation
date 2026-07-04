import { FadeIn } from "../ui/FadeIn";
import { EmbossEffect } from "../Invitation/EmbossEffect";

export function Basmala() {
  return (
    <FadeIn delay={1.2} duration={1.6} y={16}>
      <EmbossEffect>
        <p className="text-basmala" lang="ar" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </EmbossEffect>
    </FadeIn>
  );
}
