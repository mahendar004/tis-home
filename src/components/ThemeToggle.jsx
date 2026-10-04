import { motion } from 'framer-motion'
import s from '../styles/page.module.css'
export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button className={s.toggle} onClick={onToggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} aria-pressed={dark}>
      <motion.span className={s.knob} animate={{ x: dark ? 26 : 0, rotate: dark ? 360 : 0 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
        {dark ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
