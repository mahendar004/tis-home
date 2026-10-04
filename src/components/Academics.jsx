import Section from './Section'
import Reveal from './Reveal'
import { academics } from '../data'
import s from '../styles/page.module.css'
export default function Academics() {
  return (
    <Section id="academics" title="CBSE learning from Class IV to XII" intro="Every stage builds on the last, with small classes and mentors who know each student.">
      <div className={s.grid}>
        {academics.map((a, i) => (
          <Reveal key={a.title} index={i} className={s.card} data-hover>
            <div className={s.range}>{a.range}</div>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <a className={s.link} href="https://tis.edu.in/">Learn more</a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
