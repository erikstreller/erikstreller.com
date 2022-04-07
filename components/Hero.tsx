import clsx from 'clsx'
import { IoNewspaperSharp } from 'react-icons/io5'
import { SiGithub } from 'react-icons/si'

export default function Hero() {
  return (
    <div>
      <h1 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-light md:text-5xl'>
        Erik Streller.
      </h1>
      <p className='mb-4 max-w-md text-slate-600 dark:text-gray-500 md:text-lg'>
        Mechanical Engineer - engineering not only gears and plants. Exploring
        web-development, learning technologies {'&'} building projects.
      </p>
      <div className='flex space-x-5 text-sm md:text-base'>
        {links.map((link, id) => (
          <a
            key={id}
            className={clsx(
              'flex items-center space-x-2',
              'text-slate-500 hover:text-black dark:text-gray-400 dark:hover:text-light'
            )}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

const links = [
  { icon: <IoNewspaperSharp />, name: 'Resume' },
  { icon: <SiGithub />, name: 'GitHub' }
]
