import { FadeIn } from "../ui/FadeIn";

export function ClosingVerse() {
  return (
    <FadeIn duration={0.7} y={8}>
      <p
        className="text-closing-verse text-center emboss-text"
        lang="ar"
        dir="rtl"
        style={{ opacity: 0.85 }}
      >
        وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
      </p>
    </FadeIn>
  );
}
