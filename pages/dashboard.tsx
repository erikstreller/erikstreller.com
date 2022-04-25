import PageContainer from '@/components/PageContainer'
import Spinner from '@/components/Spinner'
import fetcher from '@/lib/fetcher'
import { Views } from '@/lib/types'
import Link from 'next/link'
import { HiOutlineEye } from 'react-icons/hi'
import useSWR from 'swr'

export default function Dashboard() {
  const { data } = useSWR<Views>('/api/views', fetcher)
  const blogViews = data?.total

  return (
    <PageContainer page='Dashboard'>
      <div className='section-spacing pb-80'>
        <h1 className='page-heading pb-6'>Dashboard.</h1>
        <Link href='/blog'>
          <a className='group flex w-full rounded-xl border border-light-card hover:scale-[1.01] dark:border-dark-card sm:w-1/2'>
            <div className='flex w-full flex-col px-3 py-2'>
              <div className='mb-1 flex min-h-[28px] items-center text-xl font-semibold tracking-tight'>
                {blogViews ? blogViews.toLocaleString() : <Spinner />}
              </div>
              <div className='flex items-center justify-between text-light-medium dark:text-dark-medium'>
                <p>Blog Views</p>
                <div>
                  <HiOutlineEye size={20} />
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </PageContainer>
  )
}
