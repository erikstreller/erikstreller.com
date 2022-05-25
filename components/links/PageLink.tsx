import Link from 'next/link'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type PageLinkProps = {
  href: string
  className?: string
} & ComponentPropsWithoutRef<'a'>

export default function PageLink({
  href,
  className,
  children
}: PropsWithChildren<PageLinkProps>) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}
