import clsx from 'clsx'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export type AccentProps = {
  variant: 'blue' | 'yellow' | 'pink' | 'green'
} & ComponentPropsWithoutRef<'span'>

export default function Accent({
  children,
  variant,
  className
}: PropsWithChildren<AccentProps>) {
  let gradient

  switch (variant) {
    case 'blue':
      gradient = 'from-aqua/50 to-azure/50 dark:from-aqua dark:to-azure'
      break
    case 'yellow':
      gradient = 'from-bee/50 to-curcuma/50 dark:from-bee dark:to-curcuma'
      break
    case 'pink':
      gradient = 'from-mind/50 to-lavender/50 dark:from-mind dark:to-lavender'
      break
    case 'green':
      gradient = 'from-grass/50 to-aqua/50 dark:from-grass dark:to-aqua'
      break
  }

  return (
    <span
      className={clsx(
        className,
        'bg-gradient-to-bl dark:bg-clip-text dark:text-transparent',
        gradient
      )}
    >
      {children}
    </span>
  )
}
