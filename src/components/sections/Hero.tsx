import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { NonsenseLogo } from '../layout/NonsenseLogo'

interface HeroProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

// Stable star positions — no Math.random() on every render
const STARS = Array.from({ length: 36 }, (_, i) => ({
  left: `${(i * 31.7) % 100}%`,
  top: `${(i * 23.3) % 62}%`,
  size: (i % 3) + 1,
  gold: i % 4 === 0,
  duration: 2.2 + (i % 5) * 0.6,
  delay: (i % 7) * 0.4,
}))

export function Hero({ isDark, onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 70% 30%, rgba(0,150,130,0.18) 0%, transparent 50%), radial-gradient(ellipse at 25% 70%, rgba(193,68,14,0.22) 0%, transparent 55%), #1a0900'
            : 'radial-gradient(ellipse at 70% 30%, rgba(0,150,130,0.1) 0%, transparent 50%), radial-gradient(ellipse at 25% 70%, rgba(193,68,14,0.12) 0%, transparent 55%), #fff8f0',
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              background: s.gold ? '#FFD700' : (isDark ? '#fff8f0' : 'rgba(193,68,14,0.5)'),
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
            style={{ color: isDark ? 'rgba(255,248,240,0.45)' : 'rgba(42,14,0,0.45)', letterSpacing: '0.3em' }}
          >
            Sci-Fi &amp; Fantasy Literary Magazine
          </p>

          <h1
            className="font-heading font-bold leading-tight mb-6"
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
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: isDark ? 'rgba(255,248,240,0.6)' : 'rgba(42,14,0,0.6)',
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
              className="flex items-center gap-2 px-7 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold"
              style={{
                background: '#c1440e',
                color: '#fff8f0',
                boxShadow: '0 0 28px rgba(193,68,14,0.45)',
              }}
            >
              Submit Your Work <ArrowRight size={15} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('about')}
              className="flex items-center gap-2 px-7 py-3 rounded-full font-heading text-sm tracking-wider uppercase"
              style={{
                background: 'transparent',
                color: isDark ? '#fff8f0' : '#2a0e00',
                border: `1px solid ${isDark ? 'rgba(255,248,240,0.3)' : 'rgba(42,14,0,0.25)'}`,
              }}
            >
              About the Magazine
            </motion.button>
          </div>
        </motion.div>

        {/* Call for submissions banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex items-center gap-3 px-6 py-3 rounded-full"
          style={{
            background: isDark ? 'rgba(255,215,0,0.08)' : 'rgba(255,215,0,0.12)',
            border: '1px solid rgba(255,215,0,0.25)',
          }}
        >
          <Mail size={14} style={{ color: '#FFD700' }} />
          <span
            className="font-heading text-xs tracking-wider"
            style={{ color: isDark ? 'rgba(255,248,240,0.65)' : 'rgba(42,14,0,0.65)' }}
          >
            Call for submissions open —{' '}
            <a
              href="mailto:thenonsenserealmmagazine@gmail.com"
              className="underline transition-opacity hover:opacity-70"
              style={{ color: '#FFD700' }}
            >
              thenonsenserealmmagazine@gmail.com
            </a>
          </span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${isDark ? '#1a0900' : '#fff8f0'}, transparent)` }}
      />
    </section>
  )
}
