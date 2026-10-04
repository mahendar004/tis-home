import Reveal from './Reveal'
import s from '../styles/page.module.css'
export default function Section({ id, title, intro, band = false, children }) {
  return (
    <section id={id} className={`${s.section} ${band ? s.band : ''}`}>
      <Reveal as="h2" className={s.h2}>{title}</Reveal>
      {intro && <Reveal className={s.intro}>{intro}</Reveal>}
      {children}
    </section>
  )
}
