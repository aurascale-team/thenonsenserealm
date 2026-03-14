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
        background: isDark ? 'rgba(75, 0, 130, 0.25)' : 'rgba(75, 0, 130, 0.08)',
        borderTop: '1px solid rgba(75, 0, 130, 0.4)',
        borderBottom: '1px solid rgba(75, 0, 130, 0.4)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(to right, rgba(10,6,18,1), transparent)' : 'linear-gradient(to right, rgba(248,244,255,1), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(to left, rgba(10,6,18,1), transparent)' : 'linear-gradient(to left, rgba(248,244,255,1), transparent)' }}
      />

      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-heading text-xs tracking-wider uppercase px-6"
            style={{ color: i % 2 === 0 ? '#0099CC' : isDark ? 'rgba(248,244,255,0.6)' : 'rgba(75,0,130,0.7)' }}
          >
            {item}
            <span className="mx-4 opacity-40" style={{ color: '#FFD700' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
