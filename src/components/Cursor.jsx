import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import s from '../styles/page.module.css'
const HOVER = 'a, button, input, textarea, [data-hover]'
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 })
  const [active, setActive] = useState(false)
  const [fine] = useState(() => matchMedia('(pointer: fine)').matches)
  useEffect(() => {
    if (!fine) return
    const move = e => { x.set(e.clientX); y.set(e.clientY); setActive(!!e.target.closest?.(HOVER)) }
    addEventListener('pointermove', move)
    return () => removeEventListener('pointermove', move)
  }, [fine, x, y])
  if (!fine) return null
  return <motion.div className={s.cursor} style={{ x: sx, y: sy }} animate={{ scale: active ? 2.4 : 1 }} aria-hidden="true" />
}
