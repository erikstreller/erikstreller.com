import PageContainer from '@/components/PageContainer'

export default function Custom404() {
  return (
    <PageContainer page='404'>
      <div className='section-spacing pb-80'>
        <h1 className='page-heading'>
          You found the <span className='text-teal-400'>404</span> page.
        </h1>
        <p className='page-description'>
          Was there something you where looking for? One reason could be it
          doesn&apos;t exist, at least not anymore.
        </p>
      </div>
    </PageContainer>
  )
}
