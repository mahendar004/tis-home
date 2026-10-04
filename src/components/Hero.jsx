import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Img from './Img'
import { assets, APPLY_URL } from '../data'
import s from '../styles/page.module.css'
const words = ['Tulas', 'International', 'School']
export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const far = useTransform(scrollYProgress, [0, 1], [0, 60])
  const near = useTransform(scrollYProgress, [0, 1], [0, 140])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  return (
    <section id="top" ref={ref} className={s.hero}>
      <div className={s.heroText}>
        <p className={s.kicker}>CBSE co-ed boarding and day school, Dehradun. Classes IV to XII.</p>
        <h1 className={s.h1}>
          {words.map((w, i) => (
            <motion.span key={w} className={s.word} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.16, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
          ))}
        </h1>
        <p className={s.lead}>The Modern Gurukul: an old Gurukul in a modern school, developing mind, body and soul since 2012.</p>
        <div className={s.actions}>
          <a className={s.btn} href={APPLY_URL}>Apply Now</a>
          <a className={`${s.btn} ${s.ghost}`} href="#campus">Discover Our Campus</a>
        </div>
      </div>
      <motion.div className={s.heroImg} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}>
        <motion.div style={{ scale, height: '100%' }}><Img className={s.fill} src={assets.campus} alt="Tulas International School campus in Dehradun" eager /></motion.div>
      </motion.div>
      <svg className={s.ridges} viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
        <motion.path style={{ y: far }} d="M0 240 L180 140 L320 210 L520 90 L720 200 L930 110 L1120 210 L1300 130 L1440 190 V420 H0Z" fill="var(--ridge-far)" />
        <motion.path style={{ y: near }} d="M0 320 L240 230 L420 300 L640 200 L860 310 L1060 240 L1260 320 L1440 270 V420 H0Z" fill="var(--ridge-near)" />
      </svg>
    </section>
  )
}
