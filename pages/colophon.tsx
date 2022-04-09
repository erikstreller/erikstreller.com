import NewTab from '@/components/NewTab'
import PageContainer from '@/components/PageContainer'

export default function colophon() {
  return (
    <PageContainer page='Colophon'>
      <div className='section-spacing pb-80'>
        <h1 className='page-heading'>Colophon.</h1>
        <p className='page-description'>
          Designed and developed by Erik Streller.
        </p>
        <p className='page-description'>
          This website uses{' '}
          <NewTab href={links.next} className={linkColor}>
            Next.js
          </NewTab>{' '}
          as a framework. All pages are statically generated and styled with{' '}
          <NewTab href={links.tailwind} className={linkColor}>
            TailwindCSS
          </NewTab>
          . For the design a combination of{' '}
          <NewTab href={links.excalidraw} className={linkColor}>
            Excalidraw
          </NewTab>{' '}
          and{' '}
          <NewTab href={links.figma} className={linkColor}>
            Figma
          </NewTab>{' '}
          is used.
        </p>
        <p className='page-description'>
          It is deployed on{' '}
          <NewTab href={links.vercel} className={linkColor}>
            Vercel
          </NewTab>{' '}
          and the{' '}
          <NewTab href={links.source} className='text-blue-500'>
            Source Code
          </NewTab>{' '}
          can be found on{' '}
          <NewTab href={links.github} className={linkColor}>
            GitHub
          </NewTab>
          .
        </p>
      </div>
    </PageContainer>
  )
}

const links = {
  next: 'https://nextjs.org/',
  tailwind: 'https://tailwindcss.com/',
  excalidraw: 'https://excalidraw.com/',
  figma: 'https://figma.com/',
  vercel: 'https://vercel.com/',
  github: 'https://github.com/',
  source: 'https://github.com/erikstreller/erikstreller.com'
}

const linkColor = 'text-dark dark:text-light'
