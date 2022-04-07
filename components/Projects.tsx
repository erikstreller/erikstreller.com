import { FiArrowUpRight } from 'react-icons/fi'
import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import NewTab from './NewTab'

export default function Projects() {
  return (
    <div className='section-spacing'>
      <h3 className='section-heading'>Projects</h3>
      <p className='section-description mb-8'>Learn - Practice - Repeat</p>
      <div className='flex flex-col space-y-8'>
        {projects.map((project, id) => (
          <NewTab key={id} href={project.link} className='group'>
            <div className='grid grid-cols-8 items-center gap-2 text-lg transition-all hover:scale-[1.01] md:text-xl'>
              <div className='col-span-1 text-slate-400 dark:text-gray-500'>
                {project.number}
              </div>
              <h4 className='col-span-6 flex items-center text-slate-900 dark:text-light'>
                {project.name}
                <FiArrowUpRight className='ml-2' />
              </h4>
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
        ))}
      </div>
    </div>
  )
}

const color = {
  typescript: 'text-blue-500',
  react: 'text-cyan-400',
  tailwind: 'text-emerald-500',
  chakra: 'text-teal-300'
}

const projects = [
  {
    number: '01',
    name: 'Pokédex',
    description: 'Explore the first 151 Pokémon and discover the glitch',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Typescript', icon: <SiTypescript />, color: color.typescript },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: color.tailwind }
    ],
    link: 'https://pokedex-one-gamma.vercel.app/'
  },
  {
    number: '02',
    name: 'Data Fetching',
    description: 'Visualizing four data fetching strategies in Next.js',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Typescript', icon: <SiTypescript />, color: color.typescript },
      { name: 'Chakra', icon: <SiChakraui />, color: color.chakra }
    ],
    link: 'https://nextjs-data-fetching-lac.vercel.app/'
  },
  {
    number: '03',
    name: 'Space Intro',
    description: 'About my plans and a short introduction',
    technologies: [
      { name: 'React', icon: <SiReact />, color: color.react },
      { name: 'Typescript', icon: <SiTypescript />, color: color.typescript },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: color.tailwind }
    ],
    link: 'https://erikstreller.github.io/portfolio/'
  }
]
