import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section'
import { testimonials } from '../data'
import s from '../styles/page.module.css'
export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const t = testimonials[i]
  return (
    <Section id="testimonials" title="What parents say">
      <div className={s.quoteWrap} aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
            <blockquote className={s.quote}>“{t.quote}”</blockquote>
            <figcaption className={s.who}>{t.name}<span>{t.role}</span></figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className={s.ctrls}>
        <button className={s.arrow} onClick={() => setI((i - 1 + n) % n)} aria-label="Previous testimonial">←</button>
        <button className={s.arrow} onClick={() => setI((i + 1) % n)} aria-label="Next testimonial">→</button>
        {testimonials.map((x, k) => <button key={x.name} className={`${s.dot} ${k === i ? s.dotOn : ''}`} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} />)}
      </div>
    </Section>
  )
}
