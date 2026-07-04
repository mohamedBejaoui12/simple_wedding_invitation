/**
 * Simple divider matching the reference card — two small horizontal
 * dashes spaced apart, no star/ornament between them.
 */
export function Divider() {
  return (
    <div
      className="flex items-center justify-center gap-10 my-4 sm:my-5 w-full"
      role="separator"
      aria-hidden="true"
    >
      <span
        style={{
          display: 'block',
          width: '22px',
          height: '2px',
          backgroundColor: 'rgba(60, 45, 30, 0.4)',
          borderRadius: '1px',
        }}
      />
      <span
        style={{
          display: 'block',
          width: '22px',
          height: '2px',
          backgroundColor: 'rgba(60, 45, 30, 0.4)',
          borderRadius: '1px',
        }}
      />
    </div>
  );
}
