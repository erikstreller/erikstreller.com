import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className='section-spacing'>
      <h3 className='section-heading'>Projects</h3>
      <div className='flex flex-col gap-6 pt-6'>
        {projects.map((project, id) => (
          <ProjectCard project={project} key={id} />
        ))}
      </div>
    </div>
  )
}

export const color = {
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
    link: 'https://erikstreller.github.io/space-intro/'
  }
]
