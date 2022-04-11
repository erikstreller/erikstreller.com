import clsx from 'clsx'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type AccentProps = {
  variant: 'blue' | 'yellow'
} & ComponentPropsWithoutRef<'span'>

export default function Accent({
  children,
  variant,
  className
}: PropsWithChildren<AccentProps>) {
  let gradient

  switch (variant) {
    case 'yellow':
      gradient = 'from-yellow-400 to-red-400'
      break
    case 'blue':
      gradient = 'from-teal-400 to-sky-400'
      break
  }

  return (
    <span
      className={clsx(
        className,
        'bg-gradient-to-tr bg-clip-text text-transparent',
        gradient
      )}
    >
      {children}
    </span>
  )
}
