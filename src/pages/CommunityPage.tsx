import { motion } from 'framer-motion'
import { Star, Tag } from 'lucide-react'
import { citizenReviews, spotlights } from '../data/content'

interface CommunityPageProps {
  isDark: boolean
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          fill={s <= rating ? '#FFD700' : 'transparent'}
          style={{ color: s <= rating ? '#FFD700' : 'rgba(255,215,0,0.3)' }}
        />
      ))}
      {rating % 1 !== 0 && (
        <span className="text-xs ml-1" style={{ color: '#FFD700' }}>.5</span>
      )}
    </div>
  )
}

const categoryColors: Record<string, string> = {
  Book: '#0099CC',
  Game: '#9b59b6',
  'Strange Occurrence': '#e67e22',
  Series: '#27ae60',
}

export function CommunityPage({ isDark }: CommunityPageProps) {
  const textColor = isDark ? '#f8f4ff' : '#1a0a2e'
  const mutedColor = isDark ? 'rgba(248,244,255,0.55)' : 'rgba(75,0,130,0.65)'
  const cardBg = isDark ? 'rgba(16,13,30,0.8)' : 'rgba(255,255,255,0.9)'
  const cardBorder = isDark ? 'rgba(75,0,130,0.3)' : 'rgba(75,0,130,0.15)'

  return (
    <div className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#0099CC' }}>
          The Citizens Speak
        </span>
        <h1
          className="font-heading font-bold mt-2 mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
        >
          Community
        </h1>
        <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic', maxWidth: '42rem' }}>
          Reviews from the realm's citizen-scholars, spotlights on exceptional humans, and dispatches from the weird.
        </p>
        <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #0099CC, transparent)' }} />
      </motion.div>

      {/* Spotlights */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className="font-heading font-bold text-2xl" style={{ color: textColor }}>
            This Month's Spotlights
          </h2>
          <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${isDark ? 'rgba(75,0,130,0.4)' : 'rgba(75,0,130,0.2)'}, transparent)` }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spotlights.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer rounded-2xl overflow-hidden relative"
              style={{ minHeight: 340 }}
            >
              <img
                src={s.image}
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'brightness(0.4) saturate(1.2)' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(75,0,130,0.6) 0%, rgba(10,6,18,0.8) 100%)',
                }}
              />

              {/* Month badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }}
                >
                  {s.month}
                </span>
              </div>

              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: 340 }}>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(0,153,204,0.2)', color: '#0099CC', border: '1px solid rgba(0,153,204,0.3)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-1">{s.name}</h3>
                  <div
                    className="text-sm mb-4 font-heading tracking-wider"
                    style={{ color: 'rgba(248,244,255,0.6)' }}
                  >
                    {s.descriptor}
                  </div>
                  <blockquote
                    className="text-sm leading-relaxed border-l-2 pl-4"
                    style={{
                      borderColor: '#FFD700',
                      color: 'rgba(248,244,255,0.8)',
                      fontFamily: "'Lora', serif",
                      fontStyle: 'italic',
                    }}
                  >
                    "{s.quote}"
                  </blockquote>

                  <button
                    className="mt-5 font-heading text-xs tracking-widest uppercase transition-colors hover:text-white"
                    style={{ color: '#0099CC' }}
                  >
                    Read Full Spotlight →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Citizen Reviews */}
      <section>
        <div className="flex items-baseline gap-3 mb-8">
          <h2 className="font-heading font-bold text-2xl" style={{ color: textColor }}>
            Citizen Reviews
          </h2>
          <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${isDark ? 'rgba(75,0,130,0.4)' : 'rgba(75,0,130,0.2)'}, transparent)` }} />
          <button
            className="font-heading text-xs tracking-wider uppercase transition-colors hover:text-[#0099CC]"
            style={{ color: mutedColor, whiteSpace: 'nowrap' }}
          >
            Submit a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {citizenReviews.map((review, i) => {
            const catColor = categoryColors[review.category] ?? '#0099CC'
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="font-heading text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${catColor}18`, color: catColor, border: `1px solid ${catColor}44` }}
                    >
                      {review.category}
                    </span>
                    <h3
                      className="font-heading font-bold mt-3 mb-1"
                      style={{ fontSize: '1.05rem', color: textColor }}
                    >
                      {review.title}
                    </h3>
                    <StarRating rating={review.rating} />
                  </div>
                  <div
                    className="text-right text-xs"
                    style={{ color: mutedColor }}
                  >
                    <div className="font-heading tracking-wider mb-0.5" style={{ color: '#0099CC' }}>
                      {review.reviewer}
                    </div>
                    <div>{review.date}</div>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: mutedColor, fontFamily: "'Lora', serif" }}
                >
                  {review.content}
                </p>

                {review.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Tag size={11} style={{ color: mutedColor, marginTop: 2 }} />
                    {review.tags.map((tag) => (
                      <span key={tag} className="text-xs" style={{ color: mutedColor }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Submit CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-10 rounded-2xl"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(75,0,130,0.2) 0%, rgba(0,153,204,0.1) 100%)'
              : 'linear-gradient(135deg, rgba(75,0,130,0.06) 0%, rgba(0,153,204,0.04) 100%)',
            border: '1px solid rgba(75,0,130,0.25)',
          }}
        >
          <div className="text-3xl mb-4">📜</div>
          <h3 className="font-heading font-bold text-xl mb-2" style={{ color: textColor }}>
            Encountered Something Strange?
          </h3>
          <p
            className="mb-6 max-w-sm mx-auto text-sm"
            style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic' }}
          >
            Whether it's a book, game, film, or unexplained phenomenon — the Realm wants to know.
          </p>
          <button
            className="px-8 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #4B0082, #0099CC)',
              color: '#f8f4ff',
              boxShadow: '0 0 20px rgba(75,0,130,0.3)',
            }}
          >
            Submit Your Review
          </button>
        </motion.div>
      </section>
    </div>
  )
}
