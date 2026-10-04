import Section from './Section'
import Reveal from './Reveal'
import Img from './Img'
import { sports, moments } from '../data'
import s from '../styles/page.module.css'
export default function Activities() {
  return (
    <Section id="life" band title="Life at TIS" intro="16+ sports bring joy and discipline to every day, alongside arts, music, drama and events.">
      <ul className={s.chips}>
        {sports.map(sp => <li key={sp} className={s.chip}>{sp}</li>)}
      </ul>
      <div className={s.scroller} tabIndex={0} aria-label="Student life gallery">
        {moments.map((m, i) => (
          <Reveal key={m.title} index={i} className={s.moment} data-hover>
            <Img src={m.image} alt={`Students at TIS: ${m.title}`} /><span>{m.title}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
