import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/sections/Hero'
import { Ticker } from '../components/sections/Ticker'
import { aboutContent } from '../data/content'

interface HomePageProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

const sectionPreviews = [
  {
    id: 'volumes',
    label: 'Volumes',
    heading: 'The Archive',
    body: 'Browse our published issues — flash fiction, short stories, and poetry from the weird and wonderful.',
    accent: '#00a896',
  },
  {
    id: 'editors',
    label: 'Meet the Editors',
    heading: 'The Four',
    body: 'The venomous creatures behind The Nonsense Realm. Four editors, one burning obsession.',
    accent: '#c1440e',
  },
  {
    id: 'about',
    label: 'About',
    heading: 'Our Story',
    body: 'A passion project born out of spite. We wanted more sci-fi and fantasy in literary spaces, so we built our own.',
    accent: '#c1440e',
  },
  {
    id: 'submissions',
    label: 'Submissions',
    heading: 'Submit Your Work',
    body: 'Open all year round. Max 5,000 words. No AI. No barriers. Every submission treated equally.',
    accent: '#00a896',
  },
]

export function HomePage({ isDark, onNavigate }: HomePageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const cardBg = isDark ? 'rgba(30,14,2,0.75)' : 'rgba(255,255,255,0.9)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.28)' : 'rgba(193,68,14,0.18)'

  return (
    <div>
      <Hero isDark={isDark} onNavigate={onNavigate} />
      <Ticker isDark={isDark} />

      {/* About teaser */}
      <section className="max-w-4xl mx-auto px-6 py-20" aria-label="About the magazine">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#00a896' }}>
            Who We Are
          </span>
          <p
            className="mt-4 leading-relaxed"
            style={{
              fontFamily: "'Lora', serif",
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              color: textColor,
              fontStyle: 'italic',
            }}
          >
            "{aboutContent.origin}"
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="mt-6 inline-flex items-center gap-2 font-heading text-xs tracking-widest uppercase transition-opacity hover:opacity-70 min-h-[44px]"
            style={{ color: '#c1440e' }}
          >
            Read more about us <ArrowRight size={13} aria-hidden="true" />
          </button>
        </motion.div>
      </section>

      {/* Section nav grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24" aria-label="Site sections">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sectionPreviews.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="group text-left p-8 rounded-xl transition-all min-h-[44px]"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = s.accent + '70'
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${s.accent}18`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = cardBorder
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <span className="font-heading text-xs tracking-widest uppercase" style={{ color: s.accent }}>
                {s.label}
              </span>
              <h2 className="font-heading font-bold mt-2 mb-3" style={{ fontSize: '1.4rem', color: textColor }}>
                {s.heading}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: mutedColor, fontFamily: "'Lora', serif" }}>
                {s.body}
              </p>
              <span
                className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase transition-all group-hover:gap-2.5"
                style={{ color: s.accent }}
                aria-hidden="true"
              >
                Explore <ArrowRight size={12} />
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Genre tags */}
      <section
        className="py-16 px-6"
        aria-label="Genres we publish"
        style={{
          background: isDark ? 'rgba(0,0,0,0.25)' : 'rgba(193,68,14,0.04)',
          borderTop: `1px solid ${isDark ? 'rgba(193,68,14,0.15)' : 'rgba(193,68,14,0.12)'}`,
          borderBottom: `1px solid ${isDark ? 'rgba(193,68,14,0.15)' : 'rgba(193,68,14,0.12)'}`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: mutedColor }}>
            We Publish
          </span>
          <div className="mt-6 flex flex-wrap justify-center gap-3" role="list">
            {aboutContent.genres.map((g) => (
              <span
                key={g}
                role="listitem"
                className="font-heading text-xs tracking-wider uppercase px-4 py-2 rounded-full"
                style={{
                  background: isDark ? 'rgba(255,248,240,0.07)' : 'rgba(193,68,14,0.07)',
                  border: `1px solid ${isDark ? 'rgba(255,248,240,0.15)' : 'rgba(193,68,14,0.2)'}`,
                  color: isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)',
                }}
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: textColor }}
          >
            Ready to Submit?
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: mutedColor, fontFamily: "'Lora', serif" }}>
            Submissions open all year round. Flash fiction, short stories, and poetry — weird, experimental, and everything in between.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('submissions')}
              className="px-8 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold min-h-[44px]"
              style={{ background: '#c1440e', color: '#fff8f0', boxShadow: '0 0 24px rgba(193,68,14,0.35)' }}
            >
              Submission Guidelines
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('about')}
              className="px-8 py-3 rounded-full font-heading text-sm tracking-wider uppercase min-h-[44px]"
              style={{
                background: 'transparent',
                color: isDark ? '#fff8f0' : '#2a0e00',
                border: `1px solid ${isDark ? 'rgba(255,248,240,0.4)' : 'rgba(42,14,0,0.35)'}`,
              }}
            >
              About the Magazine
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
