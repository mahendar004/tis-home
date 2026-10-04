import { useEffect, useState } from 'react'
const read = () => {
  try { const s = localStorage.getItem('theme'); if (s) return s } catch { /* storage unavailable */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
export default function useTheme() {
  const [theme, setTheme] = useState(read)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}
