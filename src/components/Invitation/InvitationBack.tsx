import { Border } from "./Border";
import { BackgroundPattern } from "./BackgroundPattern";
import { Divider } from "./Divider";

export function InvitationBack() {
  return (
    <div className="paper-card relative rounded-[3px] px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 w-full h-full flex flex-col items-center justify-between" style={{ minHeight: '85vh' }}>
      <Border />
      <BackgroundPattern />

      <div className="relative z-10 flex flex-col items-center w-full h-full text-center" dir="rtl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-[var(--color-brown-dark)]" style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem', fontWeight: 600 }}>
          تفاصيل حفل الزفاف
        </h2>
        
        {/* Date */}
        <div className="mt-4 mb-2">
          <p className="text-xl md:text-2xl text-[var(--color-brown-dark)]" style={{ fontFamily: 'var(--font-kufi)' }}>
            السبت، <span dir="ltr">19</span> سبتمبر <span dir="ltr">2026</span>
          </p>
        </div>

        <Divider />

        {/* Schedule */}
        <div className="my-6 w-full">
          <h3 className="text-xl md:text-2xl text-[var(--color-brown-gold)] mb-4" style={{ fontFamily: 'var(--font-kufi)', fontWeight: 500 }}>البرنامج</h3>
          
          <div className="space-y-3 max-w-sm mx-auto">
            <div className="flex justify-between items-center px-4">
              <span className="text-[var(--color-brown-dark)] text-lg" style={{ fontFamily: 'var(--font-body)' }}>استقبال الضيوف</span>
              <span className="text-[var(--color-brown-gold)] tracking-wider" dir="ltr">18:30</span>
            </div>
            <div className="w-full h-px" style={{ background: 'var(--color-gold-soft)', opacity: 0.2 }} />
            
            <div className="flex justify-between items-center px-4">
              <span className="text-[var(--color-brown-dark)] text-lg" style={{ fontFamily: 'var(--font-body)' }}>عقد القران</span>
              <span className="text-[var(--color-brown-gold)] tracking-wider" dir="ltr">19:30</span>
            </div>
            <div className="w-full h-px" style={{ background: 'var(--color-gold-soft)', opacity: 0.2 }} />
            
            <div className="flex justify-between items-center px-4">
              <span className="text-[var(--color-brown-dark)] text-lg" style={{ fontFamily: 'var(--font-body)' }}>العشاء</span>
              <span className="text-[var(--color-brown-gold)] tracking-wider" dir="ltr">21:00</span>
            </div>
            <div className="w-full h-px" style={{ background: 'var(--color-gold-soft)', opacity: 0.2 }} />
            
            <div className="flex justify-between items-center px-4">
              <span className="text-[var(--color-brown-dark)] text-lg" style={{ fontFamily: 'var(--font-body)' }}>الاحتفال</span>
              <span className="text-[var(--color-brown-gold)] tracking-wider" dir="ltr">22:00 - 02:00</span>
            </div>
          </div>
        </div>

        <Divider />

        {/* Location & Map */}
        <div className="mt-6 flex flex-col items-center w-full flex-1 justify-end">
          <h3 className="text-2xl text-[var(--color-brown-dark)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>فندق ذي ريزيدنس تونس</h3>
          <p className="text-[var(--color-brown-gold)] text-lg mb-4" style={{ fontFamily: 'var(--font-body)' }}>قمرت، المرسى، تونس</p>
          
          {/* Map Placeholder */}
          <div className="w-full max-w-md h-32 md:h-40 rounded-md overflow-hidden relative shadow-inner mb-4 pointer-events-none" style={{ backgroundColor: 'var(--color-beige)', border: '1px solid var(--color-gold-soft)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=36.9197,10.2864&hl=ar&z=14&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, opacity: 0.8, mixBlendMode: 'luminosity' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            />
          </div>

          <a 
            href="https://maps.google.com/?q=36.9197,10.2864" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 transition-all duration-300 rounded-[2px] text-lg font-medium shadow-sm hover:shadow-md cursor-pointer pointer-events-auto"
            style={{ 
              backgroundColor: 'rgba(160, 138, 100, 0.1)', 
              border: '1px solid rgba(160, 138, 100, 0.4)', 
              color: 'var(--color-brown-dark)',
              fontFamily: 'var(--font-kufi)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold-soft)';
              e.currentTarget.style.color = 'var(--color-warm-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(160, 138, 100, 0.1)';
              e.currentTarget.style.color = 'var(--color-brown-dark)';
            }}
            onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking button
          >
            عرض على خرائط جوجل
          </a>
        </div>
      </div>
    </div>
  );
}
