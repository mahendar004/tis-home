import Section from './Section'
import Reveal from './Reveal'
import { reasons } from '../data'
import s from '../styles/page.module.css'
export default function WhyTIS() {
  return (
    <Section id="why" title="Why families choose TIS">
      <div className={s.grid}>
        {reasons.map((r, i) => (
          <Reveal key={r.title} index={i} className={s.card}>
            <div className={s.icon} aria-hidden="true">{r.icon}</div>
            <h3>{r.title}</h3><p>{r.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
