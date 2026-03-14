import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { team } from '../data/content'

interface DenPageProps {
  isDark: boolean
}

function StatBar({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs font-heading tracking-wider uppercase" style={{ color: 'rgba(0,153,204,0.8)', fontSize: '0.65rem' }}>
        {label}
      </span>
      <span className="text-xs" style={{ color: '#f8f4ff', fontFamily: "'Lora', serif" }}>
        {value}
      </span>
    </div>
  )
}

export function DenPage({ isDark }: DenPageProps) {
  const [flipped, setFlipped] = useState<number | null>(null)

  const textColor = isDark ? '#f8f4ff' : '#1a0a2e'
  const mutedColor = isDark ? 'rgba(248,244,255,0.55)' : 'rgba(75,0,130,0.65)'
  const cardBg = isDark ? 'rgba(16,13,30,0.9)' : 'rgba(255,255,255,0.95)'
  const cardBorder = isDark ? 'rgba(75,0,130,0.35)' : 'rgba(75,0,130,0.2)'

  return (
    <div className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4"
      >
        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#FFD700' }}>
          Behind the Curtain
        </span>
        <h1
          className="font-heading font-bold mt-2 mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
        >
          The Den
        </h1>
        <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic', maxWidth: '42rem' }}>
          The fine individuals responsible for making the Nonsense Realm. Hover their cards to reveal their stats.
          They have been warned.
        </p>
        <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #FFD700, transparent)' }} />
      </motion.div>

      {/* Masthead note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12 p-4 rounded-xl inline-block"
        style={{
          background: isDark ? 'rgba(255,215,0,0.05)' : 'rgba(255,215,0,0.08)',
          border: '1px solid rgba(255,215,0,0.2)',
        }}
      >
        <p className="text-xs font-heading tracking-wider" style={{ color: 'rgba(255,215,0,0.8)' }}>
          ◆ All titles are real. All stats are accurate within a margin of ±∞. ◆
        </p>
      </motion.div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
            style={{ perspective: '1000px', height: 420 }}
            onMouseEnter={() => setFlipped(i)}
            onMouseLeave={() => setFlipped(null)}
          >
            <AnimatePresence initial={false} mode="wait">
              {flipped !== i ? (
                /* Front */
                <motion.div
                  key="front"
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -90 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
                  style={{ background: cardBg, border: `1px solid ${cardBorder}`, boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.7) saturate(1.1)' }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(10,6,18,0.85) 0%, transparent 60%)' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div
                        className="font-heading font-bold text-xl text-white mb-0.5"
                      >
                        {member.name}
                      </div>
                      <div
                        className="font-heading text-xs tracking-widest uppercase"
                        style={{ color: '#FFD700' }}
                      >
                        {member.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div
                      className="text-xs px-2 py-0.5 rounded-full inline-flex w-fit"
                      style={{
                        background: 'rgba(0,153,204,0.1)',
                        color: '#0099CC',
                        border: '1px solid rgba(0,153,204,0.3)',
                        fontFamily: "'Lora', serif",
                        fontStyle: 'italic',
                      }}
                    >
                      {member.realTitle}
                    </div>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: mutedColor, fontFamily: "'Lora', serif" }}
                    >
                      {member.bio}
                    </p>
                    <div className="flex items-center justify-between text-xs" style={{ color: mutedColor }}>
                      <span>{member.pronouns}</span>
                      <span style={{ color: '#0099CC' }}>{member.articles} articles</span>
                    </div>
                  </div>

                  <div
                    className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(248,244,255,0.5)', backdropFilter: 'blur(4px)' }}
                  >
                    hover for stats
                  </div>
                </motion.div>
              ) : (
                /* Back — Stats card */
                <motion.div
                  key="back"
                  initial={{ rotateY: 90 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -90 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-2xl p-6 flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(75,0,130,0.9) 0%, rgba(10,6,18,0.95) 100%)',
                    border: '1px solid rgba(0,153,204,0.5)',
                    boxShadow: '0 0 30px rgba(75,0,130,0.4), 0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="mb-4">
                    <div className="font-display font-bold text-lg" style={{ color: '#FFD700' }}>
                      {member.name}
                    </div>
                    <div className="font-heading text-xs tracking-widest uppercase mt-1" style={{ color: '#0099CC' }}>
                      Character Stats
                    </div>
                  </div>

                  <div
                    className="h-px mb-5"
                    style={{ background: 'linear-gradient(to right, rgba(0,153,204,0.6), transparent)' }}
                  />

                  <div className="grid grid-cols-1 gap-4 flex-1">
                    {Object.entries(member.stats).map(([key, val]) => (
                      <StatBar key={key} label={key} value={val} />
                    ))}
                  </div>

                  <div
                    className="mt-5 pt-4"
                    style={{ borderTop: '1px solid rgba(0,153,204,0.2)' }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'rgba(248,244,255,0.4)' }}>
                        Articles published
                      </span>
                      <span
                        className="font-display font-bold text-2xl"
                        style={{ color: '#FFD700', textShadow: '0 0 15px rgba(255,215,0,0.6)' }}
                      >
                        {member.articles}
                      </span>
                    </div>
                  </div>

                  {/* Decorative stars */}
                  {[...Array(5)].map((_, si) => (
                    <motion.div
                      key={si}
                      className="absolute rounded-full"
                      style={{
                        width: 2, height: 2,
                        background: '#FFD700',
                        left: `${15 + si * 18}%`,
                        top: `${10 + (si % 2) * 8}%`,
                      }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5 + si * 0.3, repeat: Infinity, delay: si * 0.2 }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Contributors note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center p-10 rounded-2xl"
        style={{
          background: isDark ? 'rgba(0,153,204,0.06)' : 'rgba(0,153,204,0.04)',
          border: '1px solid rgba(0,153,204,0.2)',
        }}
      >
        <div className="text-3xl mb-4">✨</div>
        <h3
          className="font-heading font-bold text-xl mb-3"
          style={{ color: textColor }}
        >
          Become a Contributor
        </h3>
        <p
          className="mb-6 max-w-md mx-auto"
          style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic' }}
        >
          The Realm accepts submissions of fiction, theory, art, and things that defy categorization.
          Especially those.
        </p>
        <button
          className="px-8 py-3 rounded-full font-heading text-sm tracking-wider uppercase transition-all hover:scale-105"
          style={{
            background: 'rgba(0,153,204,0.15)',
            color: '#0099CC',
            border: '1px solid rgba(0,153,204,0.4)',
          }}
        >
          Submit to the Realm
        </button>
      </motion.div>
    </div>
  )
}
