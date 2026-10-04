import { useState } from 'react'
import Section from './Section'
import { contact } from '../data'
import s from '../styles/page.module.css'
const fields = [
  { name: 'name', label: 'Name', type: 'text', check: v => v.trim().length > 1 || 'Enter your name.' },
  { name: 'email', label: 'Email', type: 'email', check: v => /^\S+@\S+\.\S+$/.test(v) || 'Enter a valid email address.' },
  { name: 'phone', label: 'Phone', type: 'tel', check: v => /^\+?[0-9\s-]{10,14}$/.test(v) || 'Enter a phone number with at least 10 digits.' },
  { name: 'message', label: 'Message', type: 'textarea', check: v => v.trim().length >= 10 || 'Write at least 10 characters.' },
]
export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const submit = e => {
    e.preventDefault()
    const found = {}
    fields.forEach(f => { const r = f.check(values[f.name]); if (r !== true) found[f.name] = r })
    setErrors(found)
    setSent(Object.keys(found).length === 0)
  }
  const set = name => e => setValues({ ...values, [name]: e.target.value })
  return (
    <Section id="contact" title="Visit the campus or send an enquiry">
      <div className={s.contactGrid}>
        <div>
          <address className={s.info}>
            <span>{contact.address}</span>
            <a href={`tel:${contact.phone}`}>Admissions helpline: {contact.phone}</a>
            <span>Landline: {contact.landlines.join(', ')}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
          <iframe className={s.map} title="Map showing Tulas International School" src={contact.map} loading="lazy" />
        </div>
        <form className={s.form} onSubmit={submit} noValidate>
          {fields.map(f => (
            <label key={f.name} className={s.field}>{f.label}
              {f.type === 'textarea'
                ? <textarea rows="4" value={values[f.name]} onChange={set(f.name)} aria-invalid={!!errors[f.name]} />
                : <input type={f.type} value={values[f.name]} onChange={set(f.name)} aria-invalid={!!errors[f.name]} />}
              {errors[f.name] && <span className={s.err} role="alert">{errors[f.name]}</span>}
            </label>
          ))}
          <button className={s.btn} type="submit">Send enquiry</button>
          {sent && <p className={s.ok} role="status">Thank you. This demo form sends nothing, but your details passed validation.</p>}
        </form>
      </div>
    </Section>
  )
}
