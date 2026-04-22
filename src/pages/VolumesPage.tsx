import { useState } from 'react'
import { motion } from 'framer-motion'
import { Feather } from 'lucide-react'
import { volumes, volumeIPieces, type VolumePiece } from '../data/content'
import { PieceModal } from '../components/ui/PieceModal'

interface VolumesPageProps {
  isDark: boolean
}

export function VolumesPage({ isDark }: VolumesPageProps) {
  const [openPiece, setOpenPiece] = useState<VolumePiece | null>(null)

  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const cardBg = isDark ? 'rgba(30,14,2,0.7)' : 'rgba(255,255,255,0.85)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'
  const tealText = isDark ? '#00a896' : '#007a6e'

  return (
    <main className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: tealText }}>
          The Collection
        </span>
        <h1
          className="font-display font-bold mt-2 mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
        >
          Volumes
        </h1>
        <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic', maxWidth: '38rem' }}>
          Three volumes a year, chock-a-block with flash fiction, short stories, and poetry.
        </p>
        <div className="mt-4 h-px w-32" style={{ background: `linear-gradient(to right, ${tealText}, transparent)` }} />
      </motion.header>

      {volumes.map((vol, i) => (
        <motion.article
          key={vol.number}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="mb-10 rounded-2xl overflow-hidden"
          aria-label={`Volume ${vol.number}: ${vol.title}`}
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
                className="font-display font-bold mb-1"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: textColor }}
              >
                {vol.title}
              </div>
              <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontSize: '0.9rem' }}>
                {vol.description}
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span
                  className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    background: vol.status === 'upcoming' ? (isDark ? 'rgba(255,215,0,0.12)' : 'rgba(154,104,0,0.1)') : 'rgba(0,168,150,0.12)',
                    color: vol.status === 'upcoming' ? (isDark ? '#FFD700' : '#9a6800') : tealText,
                    border: `1px solid ${vol.status === 'upcoming' ? (isDark ? 'rgba(255,215,0,0.3)' : 'rgba(154,104,0,0.3)') : 'rgba(0,168,150,0.3)'}`,
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

          {/* Editor's Note */}
          {vol.number === 'I' && (
            <div className="px-8 pt-6 pb-2">
              <div className="flex items-center gap-2 mb-3">
                <Feather size={12} style={{ color: '#c1440e' }} aria-hidden="true" />
                <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
                  Editor's Note
                </span>
              </div>
              <p style={{ fontFamily: "'Cinzel', serif", lineHeight: 1.85, color: mutedColor, fontSize: '0.88rem', fontStyle: 'italic', maxWidth: '52rem' }}>
                Welcome to the first issue of The Nonsense Realm. We asked for weird, wacky, and outlandish — and you delivered beyond anything we expected. This debut volume contains flash fiction and short stories that push at the edges of sci-fi and fantasy, written by voices we're incredibly proud to platform.
              </p>
              <p className="mt-2 text-xs" style={{ fontFamily: "'Cinzel', serif", fontStyle: 'italic', color: isDark ? 'rgba(255,248,240,0.4)' : 'rgba(42,14,0,0.38)' }}>
                — The Editors
              </p>
            </div>
          )}

          {/* Stories list or placeholder */}
          <div className="px-8 py-6">
            {vol.stories.length > 0 ? (
              <div className="space-y-1">
                {vol.stories.map((story, si) => {
                  const piece = volumeIPieces.find(p => p.title === story.title)
                  return (
                    <button
                      key={si}
                      onClick={() => piece && setOpenPiece(piece)}
                      disabled={!piece}
                      className="group w-full text-left flex items-center justify-between py-3.5 transition-colors min-h-[44px]"
                      style={{ borderBottom: `1px solid ${cardBorder}` }}
                      aria-label={`Read ${story.title} by ${story.author}`}
                    >
                      <div>
                        <span
                          className="font-heading font-bold text-sm transition-colors group-hover:underline"
                          style={{ color: piece ? tealText : textColor }}
                        >
                          {story.title}
                        </span>
                        <span className="text-xs ml-3" style={{ color: mutedColor, fontFamily: "'Cinzel', serif" }}>
                          by {story.author}
                        </span>
                      </div>
                      <span
                        className="font-heading text-xs tracking-wider uppercase px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: 'rgba(0,168,150,0.1)', color: tealText, border: '1px solid rgba(0,168,150,0.25)' }}
                      >
                        {story.genre}
                      </span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic', fontSize: '0.9rem' }}>
                Stories to be announced — check our Instagram{' '}
                <a
                  href="https://www.instagram.com/thenonsenserealm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-opacity hover:opacity-70"
                  aria-label="@thenonsenserealm on Instagram (opens in new tab)"
                  style={{ color: tealText }}
                >
                  @thenonsenserealm
                </a>{' '}
                for updates.
              </p>
            )}
          </div>
        </motion.article>
      ))}

      {openPiece && <PieceModal piece={openPiece} isDark={isDark} onClose={() => setOpenPiece(null)} />}

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
        <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic' }}>
          Want to be in a future volume?{' '}
          <a
            href="mailto:thenonsenserealmmagazine@gmail.com"
            className="underline transition-opacity hover:opacity-70"
            style={{ color: tealText }}
          >
            Send us your work.
          </a>
        </p>
      </motion.div>
    </main>
  )
}
