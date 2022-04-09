import PageContainer from '@/components/PageContainer'

export default function Custom500() {
  return (
    <PageContainer page='500'>
      <div className='section-spacing pb-80'>
        <h1 className='page-heading'>
          Server-side{' '}
          <span className='animate-flicker text-yellow-400'>error</span>.
        </h1>
        <p className='page-description'>I don't know what happened either.</p>
      </div>
    </PageContainer>
  )
}
