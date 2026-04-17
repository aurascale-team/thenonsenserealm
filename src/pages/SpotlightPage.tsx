import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

interface SpotlightPageProps {
  isDark: boolean
}

export function SpotlightPage({ isDark }: SpotlightPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const cardBg = isDark ? 'rgba(30,14,2,0.75)' : 'rgba(255,255,255,0.92)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.28)' : 'rgba(193,68,14,0.18)'
  const tealText = isDark ? '#00a896' : '#007a6e'

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: tealText }}>
            Reviews &amp; Spotlights
          </span>
          <h1
            className="font-display font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            Underground Reads
          </h1>
          <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic', maxWidth: '38rem' }}>
            Our editors shine a light on the books, authors, and stories they can't stop thinking about.
          </p>
          <div className="mt-4 h-px w-32" style={{ background: `linear-gradient(to right, ${tealText}, transparent)` }} />
        </motion.header>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-12 text-center"
          style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
        >
          <div
            className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
            style={{ background: isDark ? 'rgba(0,168,150,0.12)' : 'rgba(0,168,150,0.08)', border: `1px solid rgba(0,168,150,0.3)` }}
            aria-hidden="true"
          >
            🔮
          </div>
          <h2 className="font-display font-bold text-xl mb-3" style={{ color: textColor }}>
            Coming Soon
          </h2>
          <p
            className="mb-8 max-w-md mx-auto"
            style={{ color: mutedColor, fontFamily: "'Cinzel', serif", lineHeight: 1.85 }}
          >
            Our editors are busy reading — reviews, author spotlights, and underground picks will be posted here as we publish. Follow us on Instagram for early previews.
          </p>
          <a
            href="https://www.instagram.com/thenonsenserealm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading text-sm tracking-wider uppercase transition-opacity hover:opacity-80 min-h-[44px]"
            aria-label="Follow The Nonsense Realm on Instagram (opens in new tab)"
            style={{
              background: isDark ? 'rgba(193,68,14,0.15)' : 'rgba(193,68,14,0.09)',
              border: '1px solid rgba(193,68,14,0.35)',
              color: '#c1440e',
            }}
          >
            <Instagram size={15} aria-hidden="true" />
            @thenonsenserealm
          </a>
        </motion.div>

      </div>
    </main>
  )
}
