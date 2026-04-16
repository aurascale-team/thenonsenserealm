import { motion } from 'framer-motion'
import { editors } from '../data/content'

interface EditorsPageProps {
  isDark: boolean
}

export function EditorsPage({ isDark }: EditorsPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.6)' : 'rgba(42,14,0,0.65)'
  const cardBg = isDark ? 'rgba(30,14,2,0.7)' : 'rgba(255,255,255,0.88)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'

  return (
    <div className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#FFD700' }}>
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
        <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #FFD700, transparent)' }} />
      </motion.div>

      <div className="space-y-10">
        {editors.map((editor, i) => (
          <motion.div
            key={editor.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
          >
            {/* Portrait header */}
            <div className="flex flex-col sm:flex-row">
              <div
                className="flex-shrink-0"
                style={{ width: 'clamp(140px, 22%, 200px)' }}
              >
                <img
                  src={editor.image}
                  alt={editor.name}
                  className="w-full h-full object-cover object-top"
                  style={{
                    aspectRatio: '3/4',
                    display: 'block',
                    filter: isDark ? 'brightness(0.9) saturate(1.1)' : 'brightness(0.95)',
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
                <div className="flex flex-wrap gap-2">
                  {editor.interests.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-heading text-xs tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(0,168,150,0.1)',
                        color: '#00a896',
                        border: '1px solid rgba(0,168,150,0.25)',
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
                  style={{
                    color: mutedColor,
                    fontFamily: "'Lora', serif",
                    lineHeight: 1.85,
                    fontSize: '0.97rem',
                  }}
                >
                  {para}
                </p>
              ))}

              {/* Recent reads */}
              {'recentReads' in editor && editor.recentReads && (
                <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${cardBorder}` }}>
                  <span
                    className="font-heading text-xs tracking-widest uppercase"
                    style={{ color: '#FFD700' }}
                  >
                    Recent Reads
                  </span>
                  <ul className="mt-3 space-y-1">
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

              {/* Favourites (if no recentReads) */}
              {!('recentReads' in editor) && editor.favourites && (
                <div className="mt-6 pt-5" style={{ borderTop: `1px solid ${cardBorder}` }}>
                  <span
                    className="font-heading text-xs tracking-widest uppercase"
                    style={{ color: '#FFD700' }}
                  >
                    Favourites
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {editor.favourites.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          background: isDark ? 'rgba(255,215,0,0.08)' : 'rgba(255,215,0,0.12)',
                          color: '#c8a400',
                          border: '1px solid rgba(255,215,0,0.2)',
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
          </motion.div>
        ))}
      </div>
    </div>
  )
}
