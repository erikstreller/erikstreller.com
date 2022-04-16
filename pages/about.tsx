import Accent from '@/components/Accent'
import PageContainer from '@/components/PageContainer'

export default function About() {
  function nameColor() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return (
        <Accent variant='pink' className='font-semibold'>
          Erik Streller
        </Accent>
      )
    } else {
      return (
        <Accent variant='yellow' className='font-semibold'>
          Erik Streller.
        </Accent>
      )
    }
  }

  return (
    <PageContainer page='About'>
      <div className='section-spacing'>
        <h1 className='page-heading'>About.</h1>
        <p className='-mt-4 mb-4 text-lg text-slate-900 dark:text-light md:text-xl'>
          {nameColor()}
        </p>
        <p className='page-description'>
          Hi, I&apos;m Erik. I started learning C# during my studies, and
          shortly after came Python and my job as a research assistant at the
          university. It was great to automate the steps in our data analysis. I
          then went on to use Python for my diploma thesis to analyze hundreds
          of data collected from my welding experiments. The next step was to
          visualize the data by presenting the results in a variety of different
          graphs.
        </p>
        <p className='page-description'>
          A short time later, my interest in front-end development grew. I
          started learning HTML and CSS, followed by React, JavaScript, and
          TypeScript. I enjoy learning something new and mastering technologies
          (even if it takes a lot of time and work).
        </p>
        <p className='page-description pb-40'>
          Currently, my favorite framework is Next.js with Typescript and
          TailwindCSS. I like the flexibility in styling and the typesafty that
          this tech stack offers. It is a great experience and a lot of fun to
          use.
        </p>
      </div>
    </PageContainer>
  )
}
