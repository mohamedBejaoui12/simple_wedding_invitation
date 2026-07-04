import { FadeIn } from "../ui/FadeIn";
import { EmbossEffect } from "../Invitation/EmbossEffect";

/**
 * Closing Quranic verse at the very bottom of the card
 * (Surah Ar-Rum 30:21 partial — "وجعل بينكم مودة ورحمة")
 * as shown in the reference image's decorative bottom calligraphy.
 */
export function ClosingVerse() {
  return (
    <FadeIn delay={2.0} duration={1.6} y={12}>
      <EmbossEffect>
        <p className="text-closing-verse" lang="ar" dir="rtl">
          وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </p>
      </EmbossEffect>
    </FadeIn>
  );
}
