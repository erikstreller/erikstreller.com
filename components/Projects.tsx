import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import NewTab from './links/NewTab'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div className='section-spacing'>
      <h3 className='section-heading'>Featured Projects</h3>
      <div className='mb-4 flex flex-col gap-6 pt-6'>
        {projects.map((project, id) => (
          <ProjectCard project={project} key={id} />
        ))}
      </div>
      <NewTab href='https://github.com/erikstreller' className='see-more'>
        See more projects &rarr;
      </NewTab>
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
    name: 'StayTuned',
    description: 'Listen to the current top music albums of iTunes',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Typescript', icon: <SiTypescript />, color: color.typescript },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: color.tailwind }
    ],
    link: 'https://staytuned-seven.vercel.app'
  },
  {
    number: '02',
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
  // {
  //   number: '04',
  //   name: 'Data Fetching',
  //   description: 'Visualizing four data fetching strategies in Next.js',
  //   technologies: [
  //     { name: 'Next.js', icon: <SiNextdotjs /> },
  //     { name: 'Typescript', icon: <SiTypescript />, color: color.typescript },
  //     { name: 'Chakra', icon: <SiChakraui />, color: color.chakra }
  //   ],
  //   link: 'https://nextjs-data-fetching-lac.vercel.app/'
  // }
]
