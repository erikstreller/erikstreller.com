import clsx from 'clsx'
import { IoNewspaperSharp } from 'react-icons/io5'
import { SiGithub } from 'react-icons/si'

export default function Hero() {
  return (
    <div className='section-spacing'>
      <h1 className='page-heading'>Erik Streller.</h1>
      <p className='page-description max-w-md'>
        Mechanical Engineer - engineering not only gears and plants. Exploring
        web-development, learning technologies {'&'} building projects.
      </p>
      <div className='flex space-x-5 text-sm md:text-base'>
        {links.map((link, id) => (
          <a
            key={id}
            className={clsx(
              'flex items-center space-x-2',
              'text-slate-400 hover:text-black dark:text-gray-500 dark:hover:text-light'
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
