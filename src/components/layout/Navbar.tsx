import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { NonsenseLogo } from './NonsenseLogo'
import { navItems } from '../../data/content'
import type { PageId } from '../../data/content'

interface NavbarProps {
  currentPage: PageId
  onNavigate: (page: string) => void
  isDark: boolean
  onToggleTheme: () => void
}

export function Navbar({ currentPage, onNavigate, isDark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const textMuted = isDark ? 'rgba(255,248,240,0.65)' : 'rgba(42,14,0,0.7)'
  const navBg = isDark ? 'rgba(26,9,0,0.88)' : 'rgba(255,248,240,0.92)'
  const borderColor = isDark ? 'rgba(193,68,14,0.3)' : 'rgba(193,68,14,0.18)'

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: navBg,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => onNavigate('home')} className="focus:outline-none">
          <NonsenseLogo size="sm" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative px-4 py-2 font-heading text-xs tracking-wider uppercase transition-colors duration-200"
              style={{ color: currentPage === item.id ? '#c1440e' : textMuted }}
            >
              {currentPage === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded"
                  style={{ background: 'rgba(193,68,14,0.1)', border: '1px solid rgba(193,68,14,0.3)' }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-heading tracking-wider transition-all duration-300"
            style={{
              background: isDark ? 'rgba(193,68,14,0.18)' : 'rgba(0,168,150,0.12)',
              border: `1px solid ${isDark ? 'rgba(193,68,14,0.4)' : 'rgba(0,168,150,0.35)'}`,
              color: isDark ? '#FFD700' : '#00a896',
            }}
          >
            {isDark ? <Moon size={12} /> : <Sun size={12} />}
            <span className="hidden sm:inline">{isDark ? 'Void' : 'Day'}</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: isDark ? '#fff8f0' : '#2a0e00' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: isDark ? 'rgba(26,9,0,0.97)' : 'rgba(255,248,240,0.98)',
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false) }}
                className="block w-full text-left px-6 py-3 font-heading text-xs tracking-widest uppercase border-b transition-colors"
                style={{
                  color: currentPage === item.id ? '#c1440e' : textMuted,
                  borderColor,
                  background: currentPage === item.id ? 'rgba(193,68,14,0.08)' : 'transparent',
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('copyright'); setMenuOpen(false) }}
              className="block w-full text-left px-6 py-3 font-heading text-xs tracking-widest uppercase"
              style={{ color: textMuted }}
            >
              Copyright
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
