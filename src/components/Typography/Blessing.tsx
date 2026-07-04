import { FadeIn } from "../ui/FadeIn";
import { EmbossEffect } from "../Invitation/EmbossEffect";

export function Blessing() {
  return (
    <FadeIn delay={0.1} duration={1.5} y={16}>
      <EmbossEffect>
        <p className="text-blessing" lang="ar" dir="rtl">
          جعله الله عقدًا مباركًا
          <br />
          وجمع بينكما على خير
        </p>
      </EmbossEffect>
    </FadeIn>
  );
}
