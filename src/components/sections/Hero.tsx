import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import { currentIssue } from '../../data/content'
import { NonsenseLogo } from '../layout/NonsenseLogo'

interface HeroProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

export function Hero({ isDark, onNavigate }: HeroProps) {
  const { coverStory, volume, era } = currentIssue

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={coverStory.image}
          alt="Cover"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35) saturate(1.2)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(to top, #0a0612 40%, transparent 100%)'
              : 'linear-gradient(to top, rgba(26, 10, 46, 0.95) 40%, transparent 100%)',
          }}
        />
        {/* Cosmic overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(75, 0, 130, 0.5) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0, 153, 204, 0.3) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              background: Math.random() > 0.7 ? '#FFD700' : '#fff',
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Logo centered top */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <NonsenseLogo size="lg" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="max-w-3xl"
        >
          {/* Volume badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(0, 153, 204, 0.2)', color: '#0099CC', border: '1px solid rgba(0, 153, 204, 0.4)' }}
            >
              Vol. {volume} — Cover Story
            </span>
            <span
              className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700', border: '1px solid rgba(255, 215, 0, 0.3)' }}
            >
              {era}
            </span>
          </div>

          <h1
            className="font-heading font-bold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
          >
            {coverStory.title}
          </h1>

          <p
            className="text-lg mb-6 leading-relaxed max-w-2xl"
            style={{ color: 'rgba(248, 244, 255, 0.7)', fontFamily: "'Lora', serif" }}
          >
            {coverStory.subtitle}
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm" style={{ color: 'rgba(248, 244, 255, 0.5)' }}>
              By <strong style={{ color: '#0099CC' }}>{coverStory.author}</strong>
            </span>
            <span style={{ color: 'rgba(248, 244, 255, 0.3)' }}>·</span>
            <span className="flex items-center gap-1 text-sm" style={{ color: 'rgba(248, 244, 255, 0.5)' }}>
              <Clock size={12} /> {coverStory.readTime} read
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-heading text-sm tracking-wider uppercase transition-all"
              style={{
                background: '#FFD700',
                color: '#0a0612',
                fontWeight: 700,
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
              }}
            >
              Read the Cover Story <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('archives')}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-heading text-sm tracking-wider uppercase transition-all"
              style={{
                background: 'transparent',
                color: '#f8f4ff',
                border: '1px solid rgba(248, 244, 255, 0.3)',
              }}
            >
              Explore Archives
            </motion.button>
          </div>
        </motion.div>

        {/* Excerpt pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden lg:block absolute right-6 bottom-16 max-w-xs"
          style={{
            borderLeft: '3px solid #0099CC',
            paddingLeft: '1rem',
            color: 'rgba(248, 244, 255, 0.55)',
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontSize: '0.9rem',
            lineHeight: '1.7',
          }}
        >
          "{coverStory.excerpt}"
        </motion.blockquote>
      </div>
    </section>
  )
}
