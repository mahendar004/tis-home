import { motion, useReducedMotion } from 'framer-motion'
export default function Reveal({ children, index = 0, as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: Math.min(index, 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >{children}</Tag>
  )
}
