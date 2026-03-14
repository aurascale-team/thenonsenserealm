import { NonsenseLogo } from './NonsenseLogo'

interface FooterProps {
  isDark: boolean
  onNavigate: (page: string) => void
}

export function Footer({ isDark, onNavigate }: FooterProps) {
  return (
    <footer
      className="mt-24 border-t py-12 px-6"
      style={{
        borderColor: isDark ? 'rgba(75, 0, 130, 0.3)' : 'rgba(75, 0, 130, 0.15)',
        background: isDark ? 'rgba(10, 6, 18, 0.8)' : 'rgba(248, 244, 255, 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <NonsenseLogo size="md" />
          <p className="mt-4 text-sm leading-relaxed" style={{ color: isDark ? 'rgba(248, 244, 255, 0.5)' : 'rgba(75, 0, 130, 0.6)' }}>
            A digital magazine dedicated to the surreal, the fantastical, and the beautifully absurd. Published on whatever day feels right.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: '#0099CC' }}>Navigate</h4>
          <ul className="space-y-2">
            {[['home', 'The Gateway'], ['archives', 'The Archives'], ['den', 'The Den'], ['community', 'Community']].map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className="text-sm transition-colors hover:text-[#0099CC]"
                  style={{ color: isDark ? 'rgba(248, 244, 255, 0.6)' : 'rgba(75, 0, 130, 0.7)' }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: '#FFD700' }}>The Realm</h4>
          <p className="text-sm" style={{ color: isDark ? 'rgba(248, 244, 255, 0.5)' : 'rgba(75, 0, 130, 0.6)' }}>
            Vol. VII — The Year of the Fractured Sky
          </p>
          <p className="text-xs mt-2" style={{ color: isDark ? 'rgba(248, 244, 255, 0.3)' : 'rgba(75, 0, 130, 0.4)' }}>
            © 2026 The Nonsense Realm. All nonsense reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
