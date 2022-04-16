import clsx from 'clsx'
import Image from 'next/image'
import { IoNewspaperSharp } from 'react-icons/io5'
import { SiGithub } from 'react-icons/si'
import Accent from './Accent'
import NewTab from './NewTab'

export default function Hero() {
  function headingColor() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return (
        <>
          Erik Streller<Accent variant='pink'>.</Accent>
        </>
      )
    } else {
      return <Accent variant='yellow'>Erik Streller.</Accent>
    }
  }

  return (
    <div className='section-spacing flex flex-col-reverse sm:flex-row sm:justify-between'>
      <div className='flex flex-col'>
        <h1 className='page-heading'>{headingColor()}</h1>
        <p className='page-description sm:max-w-[376px] md:max-w-md'>
          Mechanical Engineer – engineering not only gears and plants. Exploring
          web-development, learning technologies {'&'} building projects.
        </p>
        <div className='flex space-x-5 text-sm md:text-base'>
          {links.map((link, id) => (
            <NewTab
              key={id}
              href={link.link}
              className={clsx(
                'flex items-center space-x-2 transition-colors',
                'text-slate-400 hover:text-black dark:text-gray-500 dark:hover:text-light'
              )}
            >
              {link.icon}
              <span>{link.name}</span>
            </NewTab>
          ))}
        </div>
      </div>
      <div className='mb-[28px] w-[100px] md:w-auto'>
        <Image
          alt='Erik Streller'
          width={125}
          height={125}
          quality={100}
          src='/static/images/avatar.png'
          priority
          className='brightness-105'
        />
      </div>
    </div>
  )
}

const links = [
  {
    icon: <IoNewspaperSharp />,
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1BccPi6rtEVRF-Jb_kI1EInnP2EI7SBc-/view?usp=sharing'
  },
  {
    icon: <SiGithub />,
    name: 'GitHub',
    link: 'https://github.com/erikstreller'
  }
]
