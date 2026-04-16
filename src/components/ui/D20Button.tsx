import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { volumes } from '../../data/content'

interface D20ButtonProps {
  isDark: boolean
}

export function D20Button({ isDark: _isDark }: D20ButtonProps) {
  const [tooltip, setTooltip] = useState(false)

  const handleRoll = () => {
    const random = volumes[Math.floor(Math.random() * volumes.length)]
    setTooltip(true)
    setTimeout(() => setTooltip(false), 3000)
    console.log('Random volume:', random.title)
  }

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-48 p-3 rounded-xl text-xs text-center"
            style={{
              background: 'rgba(26, 10, 0, 0.95)',
              border: '1px solid rgba(0, 168, 150, 0.5)',
              color: '#fff8f0',
              boxShadow: '0 0 20px rgba(0, 168, 150, 0.3)',
            }}
          >
            Check our Instagram for the latest volume updates!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleRoll}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
        className="w-14 h-14 flex items-center justify-center rounded-full text-xl font-bold"
        style={{
          background: 'linear-gradient(135deg, #7a3a00, #c1440e)',
          boxShadow: '0 0 20px rgba(193, 68, 14, 0.6), 0 4px 16px rgba(0,0,0,0.4)',
          color: '#FFD700',
          border: '2px solid rgba(255, 215, 0, 0.4)',
        }}
        title="Roll for a random article"
      >
        {/* d20 SVG */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <polygon
            points="14,2 26,9 26,19 14,26 2,19 2,9"
            stroke="#FFD700"
            strokeWidth="1.5"
            fill="rgba(255,215,0,0.1)"
          />
          <polygon
            points="14,6 22,11 22,17 14,22 6,17 6,11"
            stroke="#FFD700"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <text x="14" y="17" textAnchor="middle" fill="#FFD700" fontSize="8" fontWeight="bold">20</text>
        </svg>
      </motion.button>
    </div>
  )
}
