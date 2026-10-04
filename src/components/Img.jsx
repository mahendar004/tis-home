import { useState } from 'react'
export default function Img({ src, alt, className, eager = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={className} role="img" aria-label={alt} style={{ background: 'linear-gradient(135deg,var(--ridge-near),var(--band))' }} />
  return <img className={className} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
}
