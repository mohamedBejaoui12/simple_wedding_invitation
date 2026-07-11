import { FadeIn } from "../ui/FadeIn";

export function Dua() {
  return (
    <FadeIn duration={0.7} y={10}>
      <div className="flex flex-col items-center text-center">
        <p className="text-dua emboss-text" lang="ar" dir="rtl">
          جعله الله عقدًا متينًا لا يخيب
        </p>
        <p className="text-dua emboss-text" lang="ar" dir="rtl" style={{ marginTop: '8px' }}>
          وعمرًا هانئًا تتعدد فيه المسرات
        </p>
      </div>
    </FadeIn>
  );
}
