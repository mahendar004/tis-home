import Section from './Section'
import Reveal from './Reveal'
import { stats } from '../data'
import s from '../styles/page.module.css'
export default function About() {
  return (
    <Section id="about" title="An old Gurukul, taught the modern way" intro="Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust. It follows the Modern Gurukul concept: a co-ed residential school that brings the old Gurukul system together with a modern approach to develop mind, body and soul.">
      <div className={s.stats}>
        {stats.map((st, i) => (
          <Reveal key={st.label} index={i} className={s.stat}><strong>{st.value}</strong><span>{st.label}</span></Reveal>
        ))}
      </div>
    </Section>
  )
}
