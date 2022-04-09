import PageContainer from '@/components/PageContainer'

export default function blog() {
  return (
    <PageContainer page='Blog'>
      <div className='section-spacing'>
        <h1 className='page-heading'>Blog.</h1>
        <p className='page-description'>
          Many new adventures await us in Portugal, where we will live, work and
          dance together for the next few years. This blog is for family and
          friends and anyone who wants to follow us on our journey.
        </p>
        <p className='text-sm text-slate-400 dark:text-gray-500 md:text-base'>
          Dana {'&'} Erik
        </p>
      </div>
      <p className='section-spacing pb-80 text-rose-400'>Starting in May.</p>
    </PageContainer>
  )
}
