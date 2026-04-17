import { motion } from 'framer-motion'
import { editors } from '../data/content'

interface EditorsPageProps {
  isDark: boolean
}

export function EditorsPage({ isDark }: EditorsPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const cardBg = isDark ? 'rgba(30,14,2,0.75)' : 'rgba(255,255,255,0.92)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.28)' : 'rgba(193,68,14,0.18)'
  // Gold only on dark; on light use a readable amber
  const accentGold = isDark ? '#FFD700' : '#9a6800'

  return (
    <main className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-20">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: accentGold }}>
          Behind the Realm
        </span>
        <h1
          className="font-heading font-bold mt-2 mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
        >
          Meet the Editors
        </h1>
        <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic', maxWidth: '38rem' }}>
          Four editors with a burning love for sci-fi and fantasy — and frankly, a fair amount of spite.
        </p>
        <div className="mt-4 h-px w-32" style={{ background: `linear-gradient(to right, ${accentGold}, transparent)` }} />
      </motion.header>

      <div className="space-y-10">
        {editors.map((editor, i) => (
          <motion.article
            key={editor.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
          >
            {/* Portrait header */}
            <div className="flex flex-col sm:flex-row">
              <div className="flex-shrink-0" style={{ width: 'clamp(140px, 22%, 200px)' }}>
                <img
                  src={editor.image}
                  alt={`${editor.name}, editor at The Nonsense Realm`}
                  loading="lazy"
                  className="w-full object-cover object-top"
                  style={{
                    aspectRatio: '3/4',
                    display: 'block',
                    filter: isDark ? 'brightness(0.88) saturate(1.1)' : 'brightness(0.95)',
                  }}
                />
              </div>
              <div
                className="flex-1 px-7 py-6 flex flex-col justify-center"
                style={{
                  borderLeft: `1px solid ${cardBorder}`,
                  background: isDark
                    ? 'linear-gradient(90deg, rgba(193,68,14,0.12) 0%, transparent 100%)'
                    : 'linear-gradient(90deg, rgba(193,68,14,0.05) 0%, transparent 100%)',
                }}
              >
                <h2 className="font-heading font-bold text-2xl mb-2" style={{ color: textColor }}>
                  {editor.name}
                </h2>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`${editor.name}'s interests`}>
                  {editor.interests.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="font-heading text-xs tracking-wider uppercase px-2 py-1 rounded-full"
                      style={{
                        background: isDark ? 'rgba(0,168,150,0.12)' : 'rgba(0,168,150,0.09)',
                        color: '#007a6e',
                        border: '1px solid rgba(0,168,150,0.3)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${cardBorder}` }} />

            {/* Bio */}
            <div className="px-8 py-7">
              {editor.bio.split('\n\n').map((para, pi) => (
                <p
                  key={pi}
                  className={pi > 0 ? 'mt-4' : ''}
                  style={{ color: mutedColor, fontFamily: "'Lora', serif", lineHeight: 1.85, fontSize: '0.97rem' }}
                >
                  {para}
                </p>
              ))}

              {/* Recent reads */}
              {'recentReads' in editor && editor.recentReads && (
                <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${cardBorder}` }}>
                  <span className="font-heading text-xs tracking-widest uppercase" style={{ color: accentGold }}>
                    Recent Reads
                  </span>
                  <ul className="mt-3 space-y-1" aria-label={`${editor.name}'s recent reads`}>
                    {(editor.recentReads as string[]).map((r) => (
                      <li
                        key={r}
                        className="text-sm"
                        style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic' }}
                      >
                        — {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Favourites */}
              {!('recentReads' in editor) && editor.favourites && (
                <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${cardBorder}` }}>
                  <span className="font-heading text-xs tracking-widest uppercase" style={{ color: accentGold }}>
                    Favourites
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label={`${editor.name}'s favourite books`}>
                    {editor.favourites.map((f) => (
                      <span
                        key={f}
                        role="listitem"
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: isDark ? 'rgba(154,104,0,0.15)' : 'rgba(154,104,0,0.1)',
                          color: isDark ? '#e8c44a' : '#7a5200',
                          border: `1px solid ${isDark ? 'rgba(255,215,0,0.25)' : 'rgba(154,104,0,0.3)'}`,
                          fontFamily: "'Lora', serif",
                          fontStyle: 'italic',
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  )
}
