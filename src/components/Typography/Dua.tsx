import { FadeIn } from "../ui/FadeIn";
import { EmbossEffect } from "../Invitation/EmbossEffect";

/**
 * The closing dua/blessing at the bottom of the card,
 * matching the reference image's Arabic text.
 */
export function Dua() {
  return (
    <div className="flex flex-col items-center">
      <FadeIn delay={1.8} duration={1.6} y={16}>
        <EmbossEffect>
          <p className="text-dua" lang="ar" dir="rtl">
            جعله الله عقدًا متينًا لا يخيب
          </p>
          <p className="text-dua" lang="ar" dir="rtl">
            وعمرًا هانئًا تتعدد فيه المسرات
          </p>
        </EmbossEffect>
      </FadeIn>
    </div>
  );
}
