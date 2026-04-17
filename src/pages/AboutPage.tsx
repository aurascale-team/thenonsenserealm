import { motion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'
import { aboutContent } from '../data/content'

interface AboutPageProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

export function AboutPage({ isDark, onNavigate }: AboutPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const sectionBg = isDark ? 'rgba(30,14,2,0.65)' : 'rgba(255,255,255,0.88)'
  const sectionBorder = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.18)'

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
            The Nonsense Realm
          </span>
          <h1
            className="font-display font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            About the Magazine
          </h1>
          <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #c1440e, transparent)' }} />
        </motion.header>

        {/* Origin */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-8 rounded-2xl"
          aria-label="Our origin"
          style={{ background: sectionBg, border: `1px solid ${sectionBorder}` }}
        >
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '1.05rem', lineHeight: 1.9, color: mutedColor }}>
            {aboutContent.origin}
          </p>
        </motion.section>

        {/* What we look for */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
          aria-label="What we're looking for"
        >
          <h2 className="font-display font-bold text-xl mb-4" style={{ color: textColor }}>
            What We're Looking For
          </h2>
          <p className="mb-6" style={{ fontFamily: "'Cinzel', serif", lineHeight: 1.85, color: mutedColor }}>
            {aboutContent.whatWeLookFor}
          </p>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Genres">
            {aboutContent.genres.map((g) => (
              <span
                key={g}
                role="listitem"
                className="font-heading text-xs tracking-wider uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: isDark ? 'rgba(193,68,14,0.15)' : 'rgba(193,68,14,0.09)',
                  color: '#c1440e',
                  border: '1px solid rgba(193,68,14,0.35)',
                }}
              >
                {g}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Authors we love */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-8 rounded-2xl"
          aria-label="Authors we're inspired by"
          style={{ background: sectionBg, border: `1px solid ${sectionBorder}` }}
        >
          <h2 className="font-display font-bold text-xl mb-4" style={{ color: textColor }}>
            Authors We're Inspired By
          </h2>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {aboutContent.inspiredBy.map((a) => (
              <span key={a} style={{ fontFamily: "'Cinzel', serif", fontStyle: 'italic', color: mutedColor, fontSize: '0.95rem' }}>
                {a}<span aria-hidden="true" style={{ color: isDark ? 'rgba(255,248,240,0.25)' : 'rgba(42,14,0,0.25)' }}>  ·  </span>
              </span>
            ))}
          </div>
        </motion.section>

        {/* Who we look for */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
          aria-label="Who we're looking for"
        >
          <h2 className="font-display font-bold text-xl mb-4" style={{ color: textColor }}>
            Who We're Looking For
          </h2>
          <p style={{ fontFamily: "'Cinzel', serif", lineHeight: 1.85, color: mutedColor }}>
            {aboutContent.whoWeLookFor}
          </p>
        </motion.section>

        {/* The sense */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-8 rounded-2xl"
          aria-label="The sense of the nonsense"
          style={{ background: sectionBg, border: `1px solid ${sectionBorder}` }}
        >
          <h2 className="font-display font-bold text-xl mb-4" style={{ color: textColor }}>
            The Sense of The Nonsense
          </h2>
          <p style={{ fontFamily: "'Cinzel', serif", lineHeight: 1.85, color: mutedColor }}>
            {aboutContent.theSense}
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
          aria-label="Find us"
        >
          <h2 className="font-display font-bold text-xl mb-6" style={{ color: textColor }}>
            Find Us
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/thenonsenserealm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-opacity hover:opacity-80 min-h-[44px]"
              aria-label="The Nonsense Realm on Instagram (opens in new tab)"
              style={{
                background: isDark ? 'rgba(193,68,14,0.15)' : 'rgba(193,68,14,0.09)',
                border: '1px solid rgba(193,68,14,0.35)',
                color: '#c1440e',
              }}
            >
              <Instagram size={18} aria-hidden="true" />
              <span className="font-heading text-sm tracking-wider">{aboutContent.contact.instagram}</span>
            </a>
            <a
              href={`mailto:${aboutContent.contact.email}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-opacity hover:opacity-80 min-h-[44px]"
              style={{
                background: isDark ? 'rgba(0,168,150,0.12)' : 'rgba(0,168,150,0.08)',
                border: '1px solid rgba(0,168,150,0.35)',
                color: '#007a6e',
              }}
            >
              <Mail size={18} aria-hidden="true" />
              <span className="font-heading text-sm tracking-wider break-all">{aboutContent.contact.email}</span>
            </a>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-6"
        >
          <button
            onClick={() => onNavigate('submissions')}
            className="font-heading text-sm tracking-widest uppercase transition-opacity hover:opacity-70 min-h-[44px] px-4"
            style={{ color: '#c1440e' }}
          >
            View submission guidelines →
          </button>
        </motion.div>

      </div>
    </main>
  )
}
