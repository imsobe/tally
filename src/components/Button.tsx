import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

/** Themed button. `variant` picks the visual weight; everything else is a normal <button>. */
export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button className={`btn btn-${variant} ${className}`} {...rest} />
}
