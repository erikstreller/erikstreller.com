import clsx from 'clsx'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type NewTabProps = {
  href: string
  className?: string
} & ComponentPropsWithoutRef<'a'>

export default function NewTab({
  href,
  className,
  children
}: PropsWithChildren<NewTabProps>) {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      className={clsx(className)}
    >
      {children}
    </a>
  )
}
