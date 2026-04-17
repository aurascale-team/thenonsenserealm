import { NonsenseLogo } from './NonsenseLogo'
import { navItems } from '../../data/content'

interface FooterProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

export function Footer({ isDark, onNavigate }: FooterProps) {
  const mutedColor = isDark ? 'rgba(255,248,240,0.7)' : 'rgba(42,14,0,0.65)'
  const borderColor = isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.15)'

  return (
    <footer
      className="mt-24 border-t py-12 px-6"
      style={{
        borderColor,
        background: isDark ? 'rgba(26,9,0,0.9)' : 'rgba(255,248,240,0.9)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <NonsenseLogo size="md" />
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic' }}
          >
            A sci-fi &amp; fantasy literary magazine. Weird, wacky, and unashamedly so.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: '#00a896' }}>
            Navigate
          </h2>
          <ul className="space-y-1">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className="text-sm py-1 transition-opacity hover:opacity-70 min-h-[36px]"
                  style={{ color: mutedColor, fontFamily: "'Cinzel', serif" }}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onNavigate('copyright')}
                className="text-sm py-1 transition-opacity hover:opacity-70 min-h-[36px]"
                style={{ color: mutedColor, fontFamily: "'Cinzel', serif" }}
              >
                Copyright
              </button>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: '#c1440e' }}>
            Contact
          </h2>
          <div className="space-y-2">
            <a
              href="https://www.instagram.com/thenonsenserealm"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm py-1 transition-opacity hover:opacity-70"
              style={{ color: mutedColor, fontFamily: "'Cinzel', serif" }}
              aria-label="The Nonsense Realm on Instagram (opens in new tab)"
            >
              @thenonsenserealm
            </a>
            <a
              href="mailto:thenonsenserealmmagazine@gmail.com"
              className="block text-sm py-1 transition-opacity hover:opacity-70 break-all"
              style={{ color: mutedColor, fontFamily: "'Cinzel', serif" }}
            >
              thenonsenserealmmagazine@gmail.com
            </a>
          </div>
          <p
            className="text-xs mt-6"
            style={{ color: isDark ? 'rgba(255,248,240,0.35)' : 'rgba(42,14,0,0.4)' }}
          >
            © 2026 The Nonsense Realm Magazine
          </p>
        </div>
      </div>
    </footer>
  )
}
