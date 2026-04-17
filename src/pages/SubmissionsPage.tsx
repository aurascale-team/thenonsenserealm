import { motion } from 'framer-motion'
import { Mail, Instagram, CheckCircle } from 'lucide-react'
import { submissionsContent } from '../data/content'

interface SubmissionsPageProps {
  isDark: boolean
}

export function SubmissionsPage({ isDark }: SubmissionsPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const cardBg = isDark ? 'rgba(30,14,2,0.7)' : 'rgba(255,255,255,0.88)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'
  const tealText = isDark ? '#00a896' : '#007a6e'

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: tealText }}>
            Open All Year Round
          </span>
          <h1
            className="font-display font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            Submissions
          </h1>
          <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic', maxWidth: '36rem' }}>
            We welcome writers of all experience levels. No barriers, no prejudice — just good, weird fiction.
          </p>
          <div className="mt-4 h-px w-32" style={{ background: `linear-gradient(to right, ${tealText}, transparent)` }} />
        </motion.header>

        {/* Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-2xl overflow-hidden"
          aria-label="Submission guidelines"
          style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
        >
          <div
            className="px-8 py-5"
            style={{ borderBottom: `1px solid ${cardBorder}`, background: isDark ? 'rgba(193,68,14,0.1)' : 'rgba(193,68,14,0.05)' }}
          >
            <h2 className="font-heading font-bold text-lg" style={{ color: textColor }}>
              Submission Guidelines
            </h2>
          </div>
          <ul className="px-8 py-6 space-y-4">
            {submissionsContent.guidelines.map((g, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" style={{ color: tealText }} />
                <span style={{ fontFamily: "'Cinzel', serif", lineHeight: 1.75, color: mutedColor, fontSize: '0.95rem' }}>
                  {g}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Genres */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
          aria-label="Example genres we accept"
        >
          <h2 className="font-display font-bold text-xl mb-5" style={{ color: textColor }}>
            Example Genres
          </h2>
          <div className="flex flex-wrap gap-3">
            {submissionsContent.genres.map((g) => (
              <span
                key={g}
                className="font-heading text-xs tracking-wider uppercase px-4 py-2 rounded-full"
                style={{
                  background: isDark ? 'rgba(0,168,150,0.1)' : 'rgba(0,168,150,0.07)',
                  color: tealText,
                  border: '1px solid rgba(0,168,150,0.28)',
                }}
              >
                {g}
              </span>
            ))}
          </div>
          <p
            className="mt-5 text-sm"
            style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic' }}
          >
            Not seeing your genre? If it lives in the realm of sci-fi or fantasy, we want it. Check our Instagram for volume-specific themes.
          </p>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center"
          aria-label="Submit your work"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(193,68,14,0.18) 0%, rgba(0,168,150,0.1) 100%)'
              : 'linear-gradient(135deg, rgba(193,68,14,0.07) 0%, rgba(0,168,150,0.05) 100%)',
            border: `1px solid ${cardBorder}`,
          }}
        >
          <h2 className="font-display font-bold text-xl mb-3" style={{ color: textColor }}>
            Ready to Submit?
          </h2>
          <p
            className="mb-7 max-w-md mx-auto"
            style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic' }}
          >
            Attach your submission as a Word or Google Doc and email it to us with a brief summary of your piece.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${submissionsContent.email}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold transition-all hover:opacity-85 min-h-[44px]"
              style={{
                background: '#c1440e',
                color: '#fff8f0',
                boxShadow: '0 0 24px rgba(193,68,14,0.35)',
              }}
            >
              <Mail size={15} aria-hidden="true" />
              Email Us
            </a>
            <a
              href="https://www.instagram.com/thenonsenserealm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-heading text-sm tracking-wider uppercase transition-all hover:opacity-80 min-h-[44px]"
              aria-label="The Nonsense Realm on Instagram (opens in new tab)"
              style={{
                background: 'transparent',
                color: isDark ? '#fff8f0' : '#2a0e00',
                border: `1px solid ${isDark ? 'rgba(255,248,240,0.3)' : 'rgba(42,14,0,0.25)'}`,
              }}
            >
              <Instagram size={15} aria-hidden="true" />
              {submissionsContent.instagram}
            </a>
          </div>
          <p className="mt-5 text-xs" style={{ color: mutedColor, fontFamily: "'Cinzel', serif" }}>
            {submissionsContent.email}
          </p>
        </motion.section>

      </div>
    </main>
  )
}
