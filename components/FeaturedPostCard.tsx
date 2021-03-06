import fetcher from '@/lib/fetcher'
import { Views } from '@/lib/types'
import Link from 'next/link'
import { HiOutlineEye } from 'react-icons/hi'
import useSWR from 'swr'
import Spinner from './Spinner'

export default function FeaturedPostCard({
  title,
  summary,
  slug
}: {
  title: string
  summary: string
  slug: string
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total

  return (
    <Link href={`/blog/${slug}`}>
      <a className='yellow-card-color w-full rounded-xl bg-gradient-to-bl p-[2px] transition hover:scale-[1.01] md:min-h-[216px] md:w-1/3 '>
        <div className='flex h-full flex-col justify-between rounded-[10px] bg-light py-2 px-3 dark:bg-coal'>
          <div className='mb-6 flex flex-col sm:mb-10'>
            <h4 className='mb-1 w-full text-lg font-medium tracking-tight'>
              {title}
            </h4>
            <span className='text-light-medium dark:text-dark-medium'>
              {summary}
            </span>
          </div>
          <div className='flex min-h-[24px] items-center gap-2 opacity-80 '>
            <HiOutlineEye />
            <span className='opacity-90'>
              {views ? views.toLocaleString() : <Spinner />}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}
