import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen } from 'lucide-react'
import { volumes, articles, categories, eras } from '../data/content'
import type { ChangeEvent } from 'react'

interface ArchivesPageProps {
  isDark: boolean
}

export function ArchivesPage({ isDark }: ArchivesPageProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeEra, setActiveEra] = useState<string | null>(null)

  const filtered = articles.filter((a) => {
    const matchSearch = search === '' ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.author.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCategory === null || a.category === activeCategory
    const matchEra = activeEra === null || a.era === activeEra
    return matchSearch && matchCat && matchEra
  })

  const inputBg = isDark ? 'rgba(30,14,2,0.8)' : 'rgba(255,255,255,0.9)'
  const inputBorder = isDark ? 'rgba(193,68,14,0.4)' : 'rgba(193,68,14,0.25)'
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.5)' : 'rgba(193,68,14,0.6)'

  return (
    <div className="min-h-screen pt-24 max-w-7xl mx-auto px-6 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span
          className="font-heading text-xs tracking-widest uppercase"
          style={{ color: '#00a896' }}
        >
          The Collection
        </span>
        <h1
          className="font-heading font-bold mt-2 mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
        >
          The Archives
        </h1>
        <p style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic' }}>
          Seven volumes. Countless moments of beautiful madness.
        </p>
        <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #FFD700, transparent)' }} />
      </motion.div>

      {/* Volume grid */}
      <section className="mb-16">
        <h2 className="font-heading font-bold text-lg mb-6" style={{ color: textColor }}>
          Volumes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {volumes.map((vol, i) => (
            <motion.div
              key={vol.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group cursor-pointer rounded-xl overflow-hidden relative"
              style={{ aspectRatio: '2/3' }}
              onClick={() => setActiveEra(vol.era === activeEra ? null : vol.era)}
            >
              <img
                src={vol.coverImage}
                alt={vol.era}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                style={{
                  filter: activeEra && activeEra !== vol.era ? 'brightness(0.3) saturate(0)' : 'brightness(0.55) saturate(1.2)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,10,0,0.9) 0%, transparent 60%)' }}
              />
              {/* Active border */}
              {activeEra === vol.era && (
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{ border: `2px solid ${vol.color}`, boxShadow: `0 0 20px ${vol.color}55` }}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div
                  className="font-display font-black text-center mb-1"
                  style={{ fontSize: '1.6rem', color: vol.color, textShadow: `0 0 15px ${vol.color}` }}
                >
                  {vol.number}
                </div>
                <div className="text-center text-xs leading-tight" style={{ color: 'rgba(255,248,240,0.7)' }}>
                  {vol.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {activeEra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 flex items-center gap-2"
          >
            <span className="text-sm" style={{ color: '#00a896' }}>Filtered by:</span>
            <span
              className="text-xs font-heading tracking-wider px-3 py-1 rounded-full cursor-pointer"
              style={{ background: 'rgba(0,168,150,0.15)', color: '#00a896', border: '1px solid rgba(0,168,150,0.4)' }}
              onClick={() => setActiveEra(null)}
            >
              {activeEra} ✕
            </span>
          </motion.div>
        )}
      </section>

      {/* Search + Filter */}
      <section className="mb-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: mutedColor }} />
            <input
              type="text"
              placeholder="Search articles, authors, ideas..."
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: inputBg,
                border: `1px solid ${search ? '#00a896' : inputBorder}`,
                color: textColor,
                fontFamily: "'Lora', serif",
              }}
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-heading tracking-wider uppercase self-center mr-2" style={{ color: mutedColor }}>
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className="px-4 py-1.5 rounded-full font-heading text-xs tracking-wider uppercase transition-all"
              style={{
                background: activeCategory === cat ? '#00a896' : 'transparent',
                color: activeCategory === cat ? '#fff8f0' : mutedColor,
                border: `1px solid ${activeCategory === cat ? '#00a896' : inputBorder}`,
              }}
            >
              {cat}
            </button>
          ))}
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="px-3 py-1.5 text-xs"
              style={{ color: mutedColor }}
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Results */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm" style={{ color: mutedColor }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
          </span>
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-4xl mb-4">🔮</div>
            <p className="font-heading" style={{ color: mutedColor }}>
              The oracle found nothing. Try different search terms.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {filtered.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
                className="group cursor-pointer flex gap-5 p-4 rounded-xl transition-all"
                style={{
                  background: isDark ? 'rgba(30,14,2,0.6)' : 'rgba(255,255,255,0.8)',
                  border: `1px solid ${isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.1)'}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,168,150,0.4)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,168,150,0.15)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.1)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  style={{ filter: 'brightness(0.85)' }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-heading text-xs tracking-wider uppercase"
                      style={{ color: '#00a896' }}
                    >
                      {article.category}
                    </span>
                    <span style={{ color: mutedColor, fontSize: '0.7rem' }}>·</span>
                    <span className="text-xs" style={{ color: mutedColor }}>
                      Vol. {article.volume}
                    </span>
                  </div>
                  <h3
                    className="font-heading font-bold mb-1 group-hover:text-[#00a896] transition-colors truncate"
                    style={{ color: textColor, fontSize: '1rem' }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm line-clamp-2"
                    style={{ color: mutedColor, fontFamily: "'Lora', serif", fontStyle: 'italic' }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs" style={{ color: mutedColor }}>
                    <span>{article.author}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <BookOpen size={10} /> {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Era pills */}
      <section className="mt-12">
        <h3 className="font-heading font-bold text-sm mb-4 tracking-wider uppercase" style={{ color: mutedColor }}>
          Browse by Era
        </h3>
        <div className="flex flex-wrap gap-2">
          {eras.map((era) => (
            <button
              key={era}
              onClick={() => setActiveEra(activeEra === era ? null : era)}
              className="px-4 py-2 rounded-full text-xs font-heading tracking-wider transition-all"
              style={{
                background: activeEra === era ? 'rgba(255,215,0,0.15)' : 'transparent',
                color: activeEra === era ? '#FFD700' : mutedColor,
                border: `1px solid ${activeEra === era ? 'rgba(255,215,0,0.4)' : inputBorder}`,
              }}
            >
              {era}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
