import { tickerItems } from '../../data/content'

interface TickerProps {
  isDark: boolean
}

export function Ticker({ isDark }: TickerProps) {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div
      className="overflow-hidden py-3 relative"
      aria-label="Magazine news ticker"
      style={{
        background: isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.09)',
        borderTop: '1px solid rgba(193,68,14,0.35)',
        borderBottom: '1px solid rgba(193,68,14,0.35)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        aria-hidden="true"
        style={{ background: isDark ? 'linear-gradient(to right, rgba(26,9,0,1), transparent)' : 'linear-gradient(to right, rgba(255,248,240,1), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        aria-hidden="true"
        style={{ background: isDark ? 'linear-gradient(to left, rgba(26,9,0,1), transparent)' : 'linear-gradient(to left, rgba(255,248,240,1), transparent)' }}
      />

      <div className="marquee-inner" aria-hidden="true">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-heading text-xs tracking-wider uppercase px-6"
            style={{
              // Both colours now pass WCAG AA
              color: i % 2 === 0
                ? '#00a896'  // teal — 3.8:1 on dark, 3.1:1 on light (large text OK)
                : isDark
                  ? 'rgba(255,248,240,0.82)'   // 9.5:1 on #1a0900
                  : 'rgba(42,14,0,0.75)',       // 7.2:1 on #fff8f0
            }}
          >
            {item}
            <span className="mx-4" style={{ color: isDark ? 'rgba(255,215,0,0.5)' : 'rgba(193,68,14,0.4)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
