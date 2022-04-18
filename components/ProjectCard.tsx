import { ProjectCardProps } from '@/lib/types'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { FiArrowUpRight } from 'react-icons/fi'
import Accent from './Accent'
import NewTab from './NewTab'

export default function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme()

  return (
    <NewTab
      href={project.link}
      className={clsx(
        'group w-full rounded-xl transition',
        'border border-zinc-200 hover:scale-[1.01] dark:border-zinc-800'
      )}
    >
      <div
        className={clsx(
          'grid grid-cols-8 items-center gap-2 text-lg',
          'py-2 px-3 '
        )}
      >
        <Accent
          variant='blue'
          className={clsx(
            'col-span-1 w-fit text-slate-900',
            theme === 'dark' ? 'font-medium' : ''
          )}
        >
          {project.number}
        </Accent>
        <div className='animate-underline-blue group-hover:start-animate-underline col-span-6 flex w-fit items-center text-slate-900 dark:text-light'>
          <h4 className='font-medium tracking-tight'>{project.name}</h4>
          <FiArrowUpRight className='ml-2' />
        </div>
        <div className='col-span-1 flex space-x-4 justify-self-end'>
          {project.technologies.map((technology, id) => (
            <div key={id} className={technology.color}>
              {technology.icon}
            </div>
          ))}
        </div>
        <div className='col-span-1' />
        <div className='col-span-7 text-slate-500 dark:text-gray-400'>
          {project.description}
        </div>
      </div>
    </NewTab>
  )
}
