import { useTheme } from 'next-themes'
import Head from 'next/head'
import { PropsWithChildren, useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Footer from './Footer'
import NavItem from './NavItem'

const customMeta = {
  title: 'Erik Streller – Portfolio and Blog.',
  description:
    'Online portfolio and blog by Erik Streller, currently living on the shores of the Atlantic Ocean – learning, designing and creating.',
  type: 'website'
}

type PageContainerProps = {
  page?: string
} & Partial<typeof customMeta>

export default function PageContainer(
  props: PropsWithChildren<PageContainerProps>
) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  const meta = { ...customMeta, ...props }

  meta['title'] = props.page ? `${props.page} – Erik Streller` : meta.title

  useEffect(() => setMounted(true), [])

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='layout'>
        <nav className='flex items-center justify-between py-8 md:pb-16'>
          <div className='flex space-x-6'>
            <div className='space-x-6'>
              <NavItem href='/' text='Home' />
              <NavItem href='/blog' text='Blog' />
              <NavItem
                href='/about'
                text='About'
                className='hidden sm:inline'
              />
              <NavItem href='/colophon' text='Colophon' />
            </div>
          </div>
          <button
            aria-label='toggle theme'
            className='flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-400 transition-all hover:ring-2 dark:bg-gray-800'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {mounted &&
              (theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />)}
          </button>
        </nav>
      </div>
      <main className='layout'>{props.children}</main>
      <Footer />
    </div>
  )
}
