import { Hero } from '../components/sections/Hero'
import { Ticker } from '../components/sections/Ticker'
import { ArticleGrid } from '../components/sections/ArticleGrid'
import { articles } from '../data/content'

interface HomePageProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

export function HomePage({ isDark, onNavigate }: HomePageProps) {
  const featured = articles.filter((a) => a.featured)

  return (
    <div>
      <Hero isDark={isDark} onNavigate={onNavigate} />
      <Ticker isDark={isDark} />
      <ArticleGrid
        articles={featured}
        isDark={isDark}
        title="Current Issue Highlights"
        subtitle={
          <span>
            Vol. VII — <em>The Year of the Fractured Sky</em>
          </span>
        }
      />

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div
          className="rounded-2xl p-10 text-center relative overflow-hidden"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(75,0,130,0.3) 0%, rgba(0,153,204,0.15) 100%)'
              : 'linear-gradient(135deg, rgba(75,0,130,0.08) 0%, rgba(0,153,204,0.06) 100%)',
            border: `1px solid ${isDark ? 'rgba(75,0,130,0.4)' : 'rgba(75,0,130,0.2)'}`,
          }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #4B0082 0%, transparent 70%)',
            }}
          />
          <h2
            className="font-heading font-bold mb-3"
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: isDark ? '#f8f4ff' : '#1a0a2e' }}
          >
            Dive Into the Archives
          </h2>
          <p
            className="mb-6 max-w-lg mx-auto"
            style={{ color: isDark ? 'rgba(248,244,255,0.6)' : 'rgba(75,0,130,0.7)', fontFamily: "'Lora', serif" }}
          >
            Seven volumes of carefully curated nonsense, indexed by era and impossibility.
          </p>
          <button
            onClick={() => onNavigate('archives')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0099CC, #4B0082)',
              color: '#f8f4ff',
              boxShadow: '0 0 20px rgba(0, 153, 204, 0.3)',
            }}
          >
            Enter the Archives
          </button>
        </div>
      </section>
    </div>
  )
}
