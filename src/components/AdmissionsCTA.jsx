import Reveal from './Reveal'
import { APPLY_URL, contact } from '../data'
import s from '../styles/page.module.css'
export default function AdmissionsCTA() {
  return (
    <section id="admissions" className={`${s.section} ${s.band} ${s.cta}`}>
      <Reveal as="h2" className={s.h2}>Begin your journey at Tulas International School</Reveal>
      <Reveal className={s.intro}>Admissions are open for 2026-27. Selection is based on a written assessment and an interaction with the Principal.</Reveal>
      <Reveal className={s.actions}>
        <a className={s.btn} href={APPLY_URL}>Apply Now</a>
        <a className={`${s.btn} ${s.ghost}`} href="#contact">Enquire Now</a>
        <a className={`${s.btn} ${s.ghost}`} href={`tel:${contact.phone}`}>Schedule a Visit</a>
      </Reveal>
    </section>
  )
}
