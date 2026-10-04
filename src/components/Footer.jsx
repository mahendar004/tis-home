import Img from './Img'
import { assets, links, contact, socials, importantLinks } from '../data'
import s from '../styles/page.module.css'
export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.fGrid}>
        <div>
          <Img src={assets.logo} alt="Tulas International School logo" />
          <p>A CBSE co-ed boarding and day school in Dehradun, following the Modern Gurukul concept.</p>
        </div>
        <nav aria-label="Quick links"><h3>Quick links</h3><ul>{links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul></nav>
        <nav aria-label="Important links"><h3>Important links</h3><ul>{importantLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul></nav>
        <div><h3>Contact</h3><ul><li>{contact.address}</li><li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li><li><a href={`mailto:${contact.email}`}>{contact.email}</a></li></ul></div>
        <nav aria-label="Social media"><h3>Follow us</h3><ul>{socials.map(l => <li key={l.label}><a href={l.href} rel="noreferrer" target="_blank">{l.label}</a></li>)}</ul></nav>
      </div>
      <p className={s.copy}>© 2026 Tulas International School, Dehradun. Redesign concept for a frontend assessment; branding and content belong to TIS.</p>
    </footer>
  )
}
