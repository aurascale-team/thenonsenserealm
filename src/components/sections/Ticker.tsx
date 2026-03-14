import { tickerItems } from '../../data/content'

interface TickerProps {
  isDark: boolean
}

export function Ticker({ isDark }: TickerProps) {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div
      className="overflow-hidden py-3 relative"
      style={{
        background: isDark ? 'rgba(193, 68, 14, 0.2)' : 'rgba(75, 0, 130, 0.08)',
        borderTop: '1px solid rgba(193, 68, 14, 0.35)',
        borderBottom: '1px solid rgba(193, 68, 14, 0.35)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(to right, rgba(26,10,0,1), transparent)' : 'linear-gradient(to right, rgba(255,248,240,1), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(to left, rgba(26,10,0,1), transparent)' : 'linear-gradient(to left, rgba(255,248,240,1), transparent)' }}
      />

      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-heading text-xs tracking-wider uppercase px-6"
            style={{ color: i % 2 === 0 ? '#00a896' : isDark ? 'rgba(248,244,255,0.6)' : 'rgba(122,58,0,0.8)' }}
          >
            {item}
            <span className="mx-4 opacity-40" style={{ color: '#FFD700' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
