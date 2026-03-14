import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface Article {
  id: string
  title: string
  subtitle: string
  author: string
  category: string
  readTime: string
  image: string
  excerpt: string
}

const categoryColors: Record<string, string> = {
  Fiction: '#0099CC',
  Tech: '#FFD700',
  Art: '#9b59b6',
  Theories: '#e67e22',
}

interface ArticleCardProps {
  article: Article
  isDark: boolean
  variant?: 'default' | 'large'
}

function ArticleCard({ article, isDark, variant = 'default' }: ArticleCardProps) {
  const catColor = categoryColors[article.category] ?? '#0099CC'

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group cursor-pointer rounded-xl overflow-hidden flex flex-col"
      style={{
        background: isDark ? 'rgba(16, 13, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
        border: `1px solid ${isDark ? 'rgba(75, 0, 130, 0.3)' : 'rgba(75, 0, 130, 0.15)'}`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px rgba(0, 153, 204, 0.25), 0 0 0 1px rgba(0, 153, 204, 0.4)`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)'
      }}
    >
      <div className="relative overflow-hidden" style={{ height: variant === 'large' ? 240 : 180 }}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(0.85) saturate(1.1)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,6,18,0.7) 0%, transparent 60%)' }}
        />
        <span
          className="absolute top-3 left-3 font-heading text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: `${catColor}22`, color: catColor, border: `1px solid ${catColor}55` }}
        >
          {article.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-heading font-bold mb-2 leading-tight group-hover:text-[#0099CC] transition-colors"
          style={{
            fontSize: variant === 'large' ? '1.2rem' : '1rem',
            color: isDark ? '#f8f4ff' : '#1a0a2e',
          }}
        >
          {article.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{
            color: isDark ? 'rgba(248,244,255,0.55)' : 'rgba(75,0,130,0.65)',
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
          }}
        >
          {article.subtitle}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: isDark ? 'rgba(248,244,255,0.45)' : 'rgba(75,0,130,0.5)' }}>
              {article.author}
            </span>
            <span style={{ color: isDark ? 'rgba(248,244,255,0.2)' : 'rgba(75,0,130,0.2)' }}>·</span>
            <span className="flex items-center gap-1 text-xs" style={{ color: isDark ? 'rgba(248,244,255,0.4)' : 'rgba(75,0,130,0.5)' }}>
              <Clock size={10} /> {article.readTime}
            </span>
          </div>
          <ArrowRight
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: '#0099CC' }}
          />
        </div>
      </div>
    </motion.article>
  )
}

interface ArticleGridProps {
  articles: Article[]
  isDark: boolean
  title?: string
  subtitle?: ReactNode
}

export function ArticleGrid({ articles, isDark, title, subtitle }: ArticleGridProps) {
  const [featured, ...rest] = articles

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {(title || subtitle) && (
        <div className="mb-10">
          {title && (
            <h2
              className="font-heading font-bold mb-2"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: isDark ? '#f8f4ff' : '#1a0a2e' }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{ color: isDark ? 'rgba(248,244,255,0.5)' : 'rgba(75,0,130,0.6)', fontFamily: "'Lora', serif" }}>
              {subtitle}
            </p>
          )}
          <div className="mt-4 h-px w-24" style={{ background: 'linear-gradient(to right, #0099CC, transparent)' }} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <ArticleCard article={featured} isDark={isDark} variant="large" />
          </motion.div>
        )}
        {rest.slice(0, 4).map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
          >
            <ArticleCard article={article} isDark={isDark} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
