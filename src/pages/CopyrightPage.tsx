import { motion } from 'framer-motion'
import { copyrightContent } from '../data/content'

interface CopyrightPageProps {
  isDark: boolean
}

export function CopyrightPage({ isDark }: CopyrightPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const cardBg = isDark ? 'rgba(30,14,2,0.7)' : 'rgba(255,255,255,0.88)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.22)' : 'rgba(193,68,14,0.14)'
  const accentGold = isDark ? '#FFD700' : '#9a6800'

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: accentGold }}>
            Rights &amp; Ownership
          </span>
          <h1
            className="font-heading font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            Copyright
          </h1>
          <div className="mt-4 h-px w-32" style={{ background: `linear-gradient(to right, ${accentGold}, transparent)` }} />
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-8 rounded-2xl mb-10"
          style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
        >
          <p
            style={{
              fontFamily: "'Lora', serif",
              lineHeight: 1.95,
              color: mutedColor,
              fontSize: '0.97rem',
            }}
          >
            {copyrightContent.body}
          </p>
        </motion.div>

        {/* Platforms */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          aria-label="Our platforms"
        >
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: mutedColor }}>
            Our Platforms
          </span>
          <div className="mt-3 flex flex-wrap gap-3" role="list" aria-label="Platforms">
            {copyrightContent.platforms.map((p) => (
              <span
                key={p}
                role="listitem"
                className="font-heading text-xs tracking-wider uppercase px-4 py-2 rounded-full"
                style={{
                  background: isDark ? 'rgba(255,215,0,0.08)' : 'rgba(154,104,0,0.1)',
                  color: isDark ? '#e8c44a' : '#7a5200',
                  border: `1px solid ${isDark ? 'rgba(255,215,0,0.25)' : 'rgba(154,104,0,0.3)'}`,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </motion.section>

        <p
          className="mt-12 text-xs"
          style={{ color: isDark ? 'rgba(255,248,240,0.3)' : 'rgba(42,14,0,0.35)', fontFamily: "'Lora', serif" }}
        >
          © {copyrightContent.year} The Nonsense Realm Magazine. All writers retain their own copyright.
        </p>

      </div>
    </main>
  )
}
