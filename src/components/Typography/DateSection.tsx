import { Calendar, Clock, MapPin } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { EmbossEffect } from "../Invitation/EmbossEffect";
import { Divider } from "../Invitation/Divider";

/**
 * Replace the three placeholder values below with the real event details.
 */
const EVENT = {
  date: "الجمعة ١٥ محرم ١٤٤٨هـ",
  time: "السابعة مساءً",
  place: "قاعة الأفراح الملكية، تونس",
};

const rows = [
  { icon: Calendar, label: "التاريخ", value: EVENT.date },
  { icon: Clock, label: "الساعة", value: EVENT.time },
  { icon: MapPin, label: "المكان", value: EVENT.place },
];

export function DateSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <Divider />
      <FadeIn delay={0.1} duration={1.4} className="flex flex-col items-center gap-5 sm:gap-6">
        {rows.map(({ icon: Icon, label, value }) => (
          <EmbossEffect key={label} className="flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-2 text-[var(--color-brown-gold)]">
              <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
              <span className="text-eyebrow" lang="ar" dir="rtl">
                {label}
              </span>
            </div>
            <p className="text-detail" lang="ar" dir="rtl">
              {value}
            </p>
          </EmbossEffect>
        ))}
      </FadeIn>
    </div>
  );
}
