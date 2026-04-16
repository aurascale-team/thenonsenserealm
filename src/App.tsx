import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { D20Button } from './components/ui/D20Button'
import { DoorIntro } from './components/ui/DoorIntro'
import { HomePage } from './pages/HomePage'
import { VolumesPage } from './pages/VolumesPage'
import { EditorsPage } from './pages/EditorsPage'
import { AboutPage } from './pages/AboutPage'
import { SubmissionsPage } from './pages/SubmissionsPage'
import { CopyrightPage } from './pages/CopyrightPage'
import type { PageId } from './data/content'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export default function App() {
  const [entered, setEntered] = useState(false)
  const [page, setPage] = useState<PageId>('home')
  const [isDark, setIsDark] = useState(true)

  const navigate = (p: string) => {
    setPage(p as PageId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <DoorIntro onComplete={() => setEntered(true)} />

      <motion.div
        className="min-h-screen transition-colors duration-500"
        style={{
          background: isDark ? '#1a0900' : '#fff8f0',
          color: isDark ? '#fff8f0' : '#2a0e00',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {isDark && (
          <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 15% 10%, rgba(193,68,14,0.12) 0%, transparent 45%),
                radial-gradient(ellipse at 85% 80%, rgba(0,168,150,0.07) 0%, transparent 45%)
              `,
            }}
          />
        )}

        <div className="relative z-10">
          <Navbar
            currentPage={page}
            onNavigate={navigate}
            isDark={isDark}
            onToggleTheme={() => setIsDark(!isDark)}
          />

          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeInOut' }}
              >
                {page === 'home'        && <HomePage       isDark={isDark} onNavigate={navigate} />}
                {page === 'volumes'     && <VolumesPage    isDark={isDark} />}
                {page === 'editors'     && <EditorsPage    isDark={isDark} />}
                {page === 'about'       && <AboutPage      isDark={isDark} onNavigate={navigate} />}
                {page === 'submissions' && <SubmissionsPage isDark={isDark} />}
                {page === 'copyright'   && <CopyrightPage  isDark={isDark} />}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer isDark={isDark} onNavigate={navigate} />
        </div>

        <D20Button isDark={isDark} />
      </motion.div>
    </>
  )
}
