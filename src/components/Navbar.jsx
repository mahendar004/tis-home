import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import Img from './Img'
import { links, assets, APPLY_URL } from '../data'
import s from '../styles/page.module.css'
export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={s.header}>
      <div className={s.bar}>
        <a href="#top" className={s.brand}><Img src={assets.logo} alt="" /><span>Tulas International School</span></a>
        <nav className={s.nav} aria-label="Primary">
          {links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <a className={`${s.btn} ${s.small} ${s.applyTop}`} href={APPLY_URL}>Apply Now</a>
        <ThemeToggle theme={theme} onToggle={onToggle} />
        <button className={s.burger} onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">{open ? '✕' : '☰'}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" className={s.mobileMenu} aria-label="Mobile" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }}>
            {links.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
            <a href={APPLY_URL}>Apply Now</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
