import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { NonsenseLogo } from '../layout/NonsenseLogo'

interface HeroProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

const STARS = Array.from({ length: 36 }, (_, i) => ({
  left: `${(i * 31.7) % 100}%`,
  top: `${(i * 23.3) % 62}%`,
  size: (i % 3) + 1,
  gold: i % 4 === 0,
  duration: 2.2 + (i % 5) * 0.6,
  delay: (i % 7) * 0.4,
}))

export function Hero({ isDark, onNavigate }: HeroProps) {
  const textMuted = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const subtagColor = isDark ? 'rgba(255,248,240,0.55)' : 'rgba(42,14,0,0.5)'

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Magazine hero">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 70% 30%, rgba(0,150,130,0.18) 0%, transparent 50%), radial-gradient(ellipse at 25% 70%, rgba(193,68,14,0.22) 0%, transparent 55%), #1a0900'
            : 'radial-gradient(ellipse at 70% 30%, rgba(0,150,130,0.1) 0%, transparent 50%), radial-gradient(ellipse at 25% 70%, rgba(193,68,14,0.12) 0%, transparent 55%), #fff8f0',
        }}
      />

      {/* Stars (decorative, hidden from screen readers) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              background: s.gold ? '#FFD700' : (isDark ? '#fff8f0' : 'rgba(193,68,14,0.4)'),
            }}
            animate={{ opacity: [0.15, 0.8, 0.15] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-10"
        >
          <NonsenseLogo size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-2xl"
        >
          <p
            className="font-heading text-xs tracking-widest uppercase mb-5"
            style={{ color: subtagColor, letterSpacing: '0.3em' }}
          >
            Sci-Fi &amp; Fantasy Literary Magazine
          </p>

          <h1
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              color: isDark ? '#fff8f0' : '#2a0e00',
            }}
          >
            More Weird. More Wacky.{' '}
            <span style={{ color: '#c1440e' }}>More Nonsense.</span>
          </h1>

          <p
            className="mb-9 leading-relaxed"
            style={{
              fontFamily: "'Cinzel', serif",
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: textMuted,
            }}
          >
            A digital magazine dedicated to the strange, the fantastical, and the beautifully absurd.
            Flash fiction, short stories, and poetry — published three times a year.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('submissions')}
              className="flex items-center gap-2 px-7 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold min-h-[44px]"
              style={{
                background: '#c1440e',
                color: '#fff8f0',
                boxShadow: '0 0 28px rgba(193,68,14,0.45)',
              }}
            >
              Submit Your Work <ArrowRight size={15} aria-hidden="true" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('about')}
              className="flex items-center gap-2 px-7 py-3 rounded-full font-heading text-sm tracking-wider uppercase min-h-[44px]"
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

        {/* Submissions banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex items-center gap-3 px-6 py-3 rounded-full"
          style={{
            background: isDark ? 'rgba(193,68,14,0.15)' : 'rgba(193,68,14,0.08)',
            border: `1px solid ${isDark ? 'rgba(193,68,14,0.4)' : 'rgba(193,68,14,0.3)'}`,
          }}
        >
          <Mail size={14} style={{ color: isDark ? '#FFD700' : '#c1440e' }} aria-hidden="true" />
          <span
            className="font-heading text-xs tracking-wider"
            style={{ color: isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)' }}
          >
            Call for submissions open —{' '}
            <a
              href="mailto:thenonsenserealmmagazine@gmail.com"
              className="underline transition-opacity hover:opacity-70"
              style={{ color: isDark ? '#FFD700' : '#c1440e' }}
            >
              thenonsenserealmmagazine@gmail.com
            </a>
          </span>
        </motion.div>

        {/* Featured cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-12 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4"
          role="list"
          aria-label="Featured sections"
        >
          {/* Volumes card */}
          <button
            role="listitem"
            onClick={() => onNavigate('volumes')}
            className="group text-left rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              background: isDark ? 'rgba(30,14,2,0.85)' : 'rgba(255,255,255,0.95)',
              border: `1px solid ${isDark ? 'rgba(0,168,150,0.3)' : 'rgba(0,168,150,0.2)'}`,
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
            }}
            aria-label="Browse our volumes"
          >
            {/* Image area */}
            <div className="relative h-32 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: isDark ? 'brightness(0.65) saturate(1.2)' : 'brightness(0.75) saturate(1.1)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} aria-hidden="true" />
              <span
                className="absolute top-3 left-3 font-heading text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(0,168,150,0.85)',
                  color: '#fff',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Archive
              </span>
            </div>
            {/* Body */}
            <div className="px-5 py-4">
              <h2 className="font-heading font-bold text-base mb-1.5" style={{ color: isDark ? '#fff8f0' : '#2a0e00' }}>
                Browse the Volumes
              </h2>
              <p className="text-xs leading-relaxed mb-4" style={{ color: isDark ? 'rgba(255,248,240,0.72)' : 'rgba(42,14,0,0.65)', fontFamily: "'Cinzel', serif" }}>
                Flash fiction, short stories, and poetry from the weird and wonderful — three issues a year.
              </p>
              <span
                className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase transition-all group-hover:gap-2.5"
                style={{ color: isDark ? '#00a896' : '#007a6e' }}
                aria-hidden="true"
              >
                Explore <ArrowRight size={11} />
              </span>
            </div>
          </button>

          {/* Spotlight card */}
          <button
            role="listitem"
            onClick={() => onNavigate('spotlight')}
            className="group text-left rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              background: isDark ? 'rgba(30,14,2,0.85)' : 'rgba(255,255,255,0.95)',
              border: `1px solid ${isDark ? 'rgba(193,68,14,0.3)' : 'rgba(193,68,14,0.2)'}`,
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.08)',
            }}
            aria-label="Read reviews and spotlights"
          >
            {/* Image area */}
            <div className="relative h-32 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: isDark ? 'brightness(0.55) saturate(1.1)' : 'brightness(0.7) saturate(1.1)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} aria-hidden="true" />
              <span
                className="absolute top-3 left-3 font-heading text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(193,68,14,0.85)',
                  color: '#fff',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Spotlight
              </span>
            </div>
            {/* Body */}
            <div className="px-5 py-4">
              <h2 className="font-heading font-bold text-base mb-1.5" style={{ color: isDark ? '#fff8f0' : '#2a0e00' }}>
                Reviews &amp; Spotlights
              </h2>
              <p className="text-xs leading-relaxed mb-4" style={{ color: isDark ? 'rgba(255,248,240,0.72)' : 'rgba(42,14,0,0.65)', fontFamily: "'Cinzel', serif" }}>
                Our editors spotlight underground reads, post reviews, and champion the books they can't put down.
              </p>
              <span
                className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider uppercase transition-all group-hover:gap-2.5"
                style={{ color: '#c1440e' }}
                aria-hidden="true"
              >
                Read More <ArrowRight size={11} />
              </span>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        aria-hidden="true"
        style={{ background: `linear-gradient(to top, ${isDark ? '#1a0900' : '#fff8f0'}, transparent)` }}
      />
    </section>
  )
}
