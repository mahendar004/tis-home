import Section from './Section'
import Reveal from './Reveal'
import Img from './Img'
import { facilities } from '../data'
import s from '../styles/page.module.css'
export default function Facilities() {
  return (
    <Section id="campus" band title="A campus built for boarding life" intro="Learning, sport and rest all happen on one safe, green campus.">
      <div className={s.bento}>
        {facilities.map((f, i) => (
          <Reveal key={f.title} index={i} className={`${s.tile} ${f.image ? s.tileBig : ''}`} data-hover>
            {f.image && <Img src={f.image} alt={f.title} />}
            <div><h3>{f.title}</h3><p>{f.text}</p></div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
