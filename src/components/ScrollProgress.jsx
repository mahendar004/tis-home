import { motion, useScroll, useSpring } from 'framer-motion'
import s from '../styles/page.module.css'
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 })
  return <motion.div className={s.progress} style={{ scaleX }} aria-hidden="true" />
}
