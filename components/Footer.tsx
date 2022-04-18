import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { color } from './Projects'

export default function Footer() {
  const { pathname } = useRouter()

  return (
    <footer className='layout'>
      <div className='h-[1px] w-full bg-slate-200 dark:bg-gray-800' />
      <div className='flex flex-col space-y-2 py-12'>
        {headerGroup.map(({ text, href }, id) => (
          <Link key={id} href={href}>
            <a
              className={clsx(
                pathname === href
                  ? 'text-teal-400'
                  : clsx(
                      styling.textColor,
                      'transition-opacity hover:opacity-60'
                    ),
                'w-fit'
              )}
            >
              <p>{text}</p>
            </a>
          </Link>
        ))}
        <div className='flex items-center space-x-2 pt-6'>
          <span className={styling.textColor}>
            <span className='text-teal-400'>{new Date().getFullYear()}</span>{' '}
            Erik Streller
          </span>
          <SiNextdotjs size={styling.iconSize} />
          <SiTypescript size={styling.iconSize} className={color.typescript} />
          <SiTailwindcss size={styling.iconSize} className={color.tailwind} />
        </div>
      </div>
    </footer>
  )
}

const styling = {
  iconSize: 15,
  textColor: 'text-light-medium dark:text-dark-medium'
}

const headerGroup = [
  { href: '/', text: 'Home' },
  { href: '/blog', text: 'Blog' },
  { href: '/about', text: 'About' },
  { href: '/colophon', text: 'Colophon' }
]
