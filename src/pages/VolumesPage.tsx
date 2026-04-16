import { motion } from 'framer-motion'
import { volumes } from '../data/content'

interface VolumesPageProps {
  isDark: boolean
}

export function VolumesPage({ isDark }: VolumesPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.55)' : 'rgba(42,14,0,0.6)'
  const cardBg = isDark ? 'rgba(30,14,2,0.7)' : 'rgba(255,255,255,0.85)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'

  return (
    <div className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#00a896' }}>
          The Collection
        </span>
        <h1
          className="font-heading font-bold mt-2 mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
        >
          Volumes
        </h1>
        <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic', maxWidth: '38rem' }}>
          Three volumes a year, chock-a-block with flash fiction, short stories, and poetry.
        </p>
        <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #00a896, transparent)' }} />
      </motion.div>

      {volumes.map((vol, i) => (
        <motion.div
          key={vol.number}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="mb-10 rounded-2xl overflow-hidden"
          style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
        >
          {/* Volume header */}
          <div
            className="relative px-8 py-10 flex flex-col sm:flex-row sm:items-center gap-6"
            style={{
              background: isDark
                ? `linear-gradient(135deg, rgba(193,68,14,0.2) 0%, rgba(0,168,150,0.08) 100%)`
                : `linear-gradient(135deg, rgba(193,68,14,0.07) 0%, rgba(0,168,150,0.04) 100%)`,
              borderBottom: `1px solid ${cardBorder}`,
            }}
          >
            <div
              className="font-display font-black flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: vol.color, lineHeight: 1, textShadow: `0 0 30px ${vol.color}55` }}
            >
              Vol. {vol.number}
            </div>
            <div className="flex-1">
              <div
                className="font-heading font-bold mb-1"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: textColor }}
              >
                {vol.title}
              </div>
              <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontSize: '0.9rem' }}>
                {vol.description}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span
                  className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    background: vol.status === 'upcoming' ? 'rgba(255,215,0,0.12)' : 'rgba(0,168,150,0.12)',
                    color: vol.status === 'upcoming' ? '#FFD700' : '#00a896',
                    border: `1px solid ${vol.status === 'upcoming' ? 'rgba(255,215,0,0.3)' : 'rgba(0,168,150,0.3)'}`,
                  }}
                >
                  {vol.status === 'upcoming' ? 'Coming Soon' : 'Published'}
                </span>
                <span className="text-xs" style={{ color: mutedColor }}>
                  {vol.year}
                </span>
              </div>
            </div>
          </div>

          {/* Stories list or placeholder */}
          <div className="px-8 py-6">
            {vol.stories.length > 0 ? (
              <div className="space-y-3">
                {vol.stories.map((story, si) => (
                  <div
                    key={si}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: `1px solid ${cardBorder}` }}
                  >
                    <div>
                      <span className="font-heading font-bold text-sm" style={{ color: textColor }}>
                        {story.title}
                      </span>
                      <span className="text-xs ml-3" style={{ color: mutedColor, fontFamily: "'Lora', serif" }}>
                        by {story.author}
                      </span>
                    </div>
                    <span
                      className="font-heading text-xs tracking-wider uppercase px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: 'rgba(0,168,150,0.1)', color: '#00a896', border: '1px solid rgba(0,168,150,0.25)' }}
                    >
                      {story.genre}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p
                className="py-4"
                style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.9rem' }}
              >
                Stories to be announced — check our Instagram{' '}
                <a
                  href="https://www.instagram.com/thenonsenserealm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-opacity hover:opacity-70"
                  style={{ color: '#00a896' }}
                >
                  @thenonsenserealm
                </a>{' '}
                for updates.
              </p>
            )}
          </div>
        </motion.div>
      ))}

      {/* Submissions nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 p-8 rounded-2xl text-center"
        style={{
          background: isDark ? 'rgba(0,168,150,0.06)' : 'rgba(0,168,150,0.04)',
          border: '1px solid rgba(0,168,150,0.2)',
        }}
      >
        <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
          Want to be in a future volume?{' '}
          <a
            href="mailto:thenonsenserealmmagazine@gmail.com"
            className="underline transition-opacity hover:opacity-70"
            style={{ color: '#00a896' }}
          >
            Send us your work.
          </a>
        </p>
      </motion.div>
    </div>
  )
}
