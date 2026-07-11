import { Border } from "./Border";
import { BackgroundPattern } from "./BackgroundPattern";
import { FloralCorner } from "./FloralCorner";
import { Divider } from "./Divider";
import { FadeIn } from "../ui/FadeIn";

export function InvitationBack() {
  return (
    <div
      className="paper-card relative rounded-[4px] w-full"
      style={{
        height: '100%',
        padding: 'clamp(24px, 5vw, 40px) clamp(24px, 5vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'visible',
      }}
    >
      <Border />
      <BackgroundPattern />
      <FloralCorner position="bl" />
      <FloralCorner position="br" />
      <FloralCorner position="tl" />
      <FloralCorner position="tr" />

      <div
        className="relative flex flex-col items-center w-full flex-1 text-center"
        dir="rtl"
        style={{ zIndex: 2, gap: '32px', justifyContent: 'center' }}
      >
        {/* ── Title ── */}
        <FadeIn duration={0.7} y={10}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 6vw, 3rem)',
            color: 'var(--color-brown-dark)',
            marginBottom: '4px',
            textShadow: '0 1px 2px rgba(255,255,255,0.85)',
          }}>
            تفاصيل حفل الزفاف
          </h2>

          {/* Wedding date */}
          <p style={{
            fontFamily: 'var(--font-english)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: 'var(--color-gold)',
            letterSpacing: '0.08em',
            marginBottom: '2px',
          }} dir="ltr">
            Saturday, 19 September 2026
          </p>
        </FadeIn>

        <Divider />

        {/* ── Schedule ── */}
        <FadeIn duration={0.7} y={8}>
          <h3 style={{
            fontFamily: 'var(--font-kufi)',
            fontWeight: 500,
            fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
            color: 'var(--color-gold)',
            letterSpacing: '0.12em',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}>
            البـرنـامـج
          </h3>

          <div style={{ width: '100%', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'استقبال الضيوف', time: '18:30' },
              { label: 'عقد القران',     time: '19:30' },
              { label: 'العشاء',          time: '21:00' },
              { label: 'الاحتفال',        time: '22:00 – 02:00' },
            ].map((item, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px 16px',
                  gap: '4px'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1rem, 2.3vw, 1.15rem)',
                    color: 'var(--color-brown-dark)',
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-english)',
                    fontSize: 'clamp(0.88rem, 2vw, 1rem)',
                    color: 'var(--color-gold-dark)',
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                  }} dir="ltr">
                    {item.time}
                  </span>
                </div>
                {i < 3 && (
                  <div style={{
                    height: '1px',
                    margin: '0 16px',
                    background: 'linear-gradient(90deg, transparent, rgba(200,169,106,0.35), transparent)',
                  }} />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── Venue ── */}
        <FadeIn duration={0.7} y={8}>
          {/* Location Text Link */}
          <a
            href="https://maps.google.com/?q=36.85670670361167,10.158111749449692"
            target="_blank"
            rel="noopener noreferrer"

            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 50,
            }}
            title="فتح خرائط جوجل"
          >
            {/* Location icon */}
            <div style={{ marginBottom: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="rgba(200,169,106,0.7)" />
              </svg>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.25rem, 3.2vw, 1.65rem)',
              color: 'var(--color-brown-dark)',
              marginBottom: '4px',
            }}>
              فندق ذي ريزيدنس تونس
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.88rem, 2vw, 1rem)',
              color: 'var(--color-muted)',
              marginBottom: '16px',
            }}>
              قمرت، المرسى، تونس
            </p>
          </a>

          {/* Map */}
          <a
            href="https://maps.google.com/?q=36.85670670361167,10.158111749449692"
            target="_blank"
            rel="noopener noreferrer"

            style={{
              display: 'block',
              width: '100%',
              maxWidth: '400px',
              position: 'relative',
              zIndex: 50,
              pointerEvents: 'auto',
              cursor: 'pointer',
              marginBottom: '16px',
            }}
            title="فتح خرائط جوجل"
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              background: 'transparent'
            }} />
            <div style={{
              width: '100%',
              height: 'clamp(120px, 22vw, 160px)',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(200,169,106,0.35)',
              boxShadow: '0 4px 16px rgba(80,55,30,0.10), inset 0 1px 0 rgba(255,255,255,0.5)',
              pointerEvents: 'none',
            }}>
              <iframe
                src="https://maps.google.com/maps?q=36.85670670361167,10.158111749449692&hl=ar&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, mixBlendMode: 'luminosity', opacity: 0.85 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              />
            </div>
          </a>

          {/* Google Maps button */}
          <a
            href="https://maps.google.com/?q=36.85670670361167,10.158111749449692"
            target="_blank"
            rel="noopener noreferrer"

            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 28px',
              borderRadius: '3px',
              border: '1px solid rgba(200,169,106,0.5)',
              background: 'linear-gradient(135deg, rgba(200,169,106,0.12), rgba(200,169,106,0.06))',
              color: 'var(--color-brown-dark)',
              fontFamily: 'var(--font-kufi)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              position: 'relative',
              zIndex: 50,
              pointerEvents: 'auto',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(80,55,30,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,169,106,0.3), rgba(200,169,106,0.18))';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(80,55,30,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,169,106,0.12), rgba(200,169,106,0.06))';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(80,55,30,0.08)';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block', flexShrink: 0 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="rgba(200,169,106,0.9)" />
            </svg>
            عرض على خرائط جوجل
          </a>
        </FadeIn>

      </div>
    </div>
  );
}
