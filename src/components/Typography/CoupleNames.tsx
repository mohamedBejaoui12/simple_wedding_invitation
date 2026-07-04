import { FadeIn } from "../ui/FadeIn";
import { Reveal } from "../ui/Reveal";
import { EmbossEffect } from "../Invitation/EmbossEffect";
import { Divider } from "../Invitation/Divider";

export function CoupleNames() {
  return (
    <div className="flex flex-col items-center">
      <Reveal delay={1.6} duration={1.9} scaleFrom={0.9}>
        <EmbossEffect className="flex flex-col items-center gap-2">
          <h1 className="text-names" lang="ar" dir="rtl">
            محمد
          </h1>
          <span className="text-and mb-2 mt-2">و</span>
          <h1 className="text-names" lang="ar" dir="rtl">
            هديل
          </h1>
        </EmbossEffect>
      </Reveal>
    </div>
  );
}
