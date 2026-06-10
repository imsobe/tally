import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

/** Generic surface container — the white rounded panel everything sits on. */
export function Card({ children, className = '' }: CardProps) {
  return <section className={`card ${className}`}>{children}</section>
}
