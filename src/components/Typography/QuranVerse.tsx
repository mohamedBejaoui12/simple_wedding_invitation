import { FadeIn } from "../ui/FadeIn";
import { EmbossEffect } from "../Invitation/EmbossEffect";

export function QuranVerse() {
  return (
    <FadeIn delay={1.4} duration={1.6} y={18} className="max-w-[600px]">
      <EmbossEffect>
        <p className="text-verse" lang="ar" dir="rtl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
          وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>
      </EmbossEffect>
      <p className="text-verse-translation mt-5" lang="en" dir="ltr">
        And of his signs is this: he created for you
        <br />
        helpmeets from yourselves that you might
        <br />
        find rest in them and he ordained between
        <br />
        you love and mercy
      </p>
    </FadeIn>
  );
}
