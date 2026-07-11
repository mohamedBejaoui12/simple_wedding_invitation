import { FadeIn } from "../ui/FadeIn";

export function QuranVerse() {
  return (
    <FadeIn duration={0.7} y={10} className="flex flex-col items-center" as="div">
      {/* Arabic verse */}
      <p
        className="text-verse text-center"
        lang="ar"
        dir="rtl"
        style={{ maxWidth: '520px', padding: '0 8px' }}
      >
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
        <br />
        وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </p>

      {/* English translation */}
      <p
        className="text-verse-translation text-center mt-4"
        lang="en"
        dir="ltr"
        style={{ maxWidth: '340px' }}
      >
        And of His signs is this: He created for you mates from among
        yourselves that you might find peace in them, and He ordained
        between you love and mercy
      </p>
    </FadeIn>
  );
}
