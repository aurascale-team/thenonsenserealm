import { motion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'
import { aboutContent } from '../data/content'

interface AboutPageProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

export function AboutPage({ isDark, onNavigate }: AboutPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.62)' : 'rgba(42,14,0,0.65)'
  const sectionBg = isDark ? 'rgba(30,14,2,0.6)' : 'rgba(255,255,255,0.8)'
  const sectionBorder = isDark ? 'rgba(193,68,14,0.22)' : 'rgba(193,68,14,0.14)'

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
            The Nonsense Realm
          </span>
          <h1
            className="font-heading font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            About the Magazine
          </h1>
          <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #c1440e, transparent)' }} />
        </motion.div>

        {/* Origin */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-8 rounded-2xl"
          style={{ background: sectionBg, border: `1px solid ${sectionBorder}` }}
        >
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: mutedColor,
            }}
          >
            {aboutContent.origin}
          </p>
        </motion.section>

        {/* What we look for */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-heading font-bold text-xl mb-4" style={{ color: textColor }}>
            What We're Looking For
          </h2>
          <p
            className="mb-6"
            style={{ fontFamily: "'Lora', serif", lineHeight: 1.85, color: mutedColor }}
          >
            {aboutContent.whatWeLookFor}
          </p>
          <div className="flex flex-wrap gap-2">
            {aboutContent.genres.map((g) => (
              <span
                key={g}
                className="font-heading text-xs tracking-wider uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: isDark ? 'rgba(193,68,14,0.12)' : 'rgba(193,68,14,0.07)',
                  color: '#c1440e',
                  border: '1px solid rgba(193,68,14,0.3)',
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
          style={{ background: sectionBg, border: `1px solid ${sectionBorder}` }}
        >
          <h2 className="font-heading font-bold text-xl mb-4" style={{ color: textColor }}>
            Authors We're Inspired By
          </h2>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {aboutContent.inspiredBy.map((a) => (
              <span
                key={a}
                style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', color: mutedColor, fontSize: '0.95rem' }}
              >
                {a}
                <span style={{ color: isDark ? 'rgba(255,248,240,0.2)' : 'rgba(42,14,0,0.2)' }}>  ·  </span>
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
        >
          <h2 className="font-heading font-bold text-xl mb-4" style={{ color: textColor }}>
            Who We're Looking For
          </h2>
          <p style={{ fontFamily: "'Lora', serif", lineHeight: 1.85, color: mutedColor }}>
            {aboutContent.whoWeLookFor}
          </p>
        </motion.section>

        {/* The sense */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-8 rounded-2xl"
          style={{ background: sectionBg, border: `1px solid ${sectionBorder}` }}
        >
          <h2 className="font-heading font-bold text-xl mb-4" style={{ color: textColor }}>
            The Sense of The Nonsense
          </h2>
          <p style={{ fontFamily: "'Lora', serif", lineHeight: 1.85, color: mutedColor }}>
            {aboutContent.theSense}
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-heading font-bold text-xl mb-6" style={{ color: textColor }}>
            Find Us
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/thenonsenserealm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:opacity-80"
              style={{
                background: isDark ? 'rgba(193,68,14,0.12)' : 'rgba(193,68,14,0.07)',
                border: '1px solid rgba(193,68,14,0.3)',
                color: '#c1440e',
              }}
            >
              <Instagram size={18} />
              <span className="font-heading text-sm tracking-wider">{aboutContent.contact.instagram}</span>
            </a>
            <a
              href={`mailto:${aboutContent.contact.email}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:opacity-80"
              style={{
                background: isDark ? 'rgba(0,168,150,0.1)' : 'rgba(0,168,150,0.07)',
                border: '1px solid rgba(0,168,150,0.3)',
                color: '#00a896',
              }}
            >
              <Mail size={18} />
              <span className="font-heading text-sm tracking-wider">{aboutContent.contact.email}</span>
            </a>
          </div>
        </motion.section>

        {/* Submissions nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-6"
        >
          <button
            onClick={() => onNavigate('submissions')}
            className="font-heading text-sm tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: '#c1440e' }}
          >
            View submission guidelines →
          </button>
        </motion.div>

      </div>
    </div>
  )
}
