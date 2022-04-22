import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ComponentPropsWithoutRef } from 'react'

type NavItemProps = {
  href: string
  text: string
  className?: string
} & ComponentPropsWithoutRef<'a'>

export default function NavItem({
  href,
  text,
  className,
  ...rest
}: NavItemProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        {...rest}
        className={clsx(
          isActive
            ? 'font-bold text-gray-800 dark:text-gray-200'
            : 'rounded-lg font-normal text-gray-600 transition-all hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800',
          '-ml-2 px-3 py-2',
          className
        )}
      >
        {text}
      </a>
    </Link>
  )
}
