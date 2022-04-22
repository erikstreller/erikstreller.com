import fetcher from '@/lib/fetcher'
import { PostCardProps, Views } from '@/lib/types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi'
import useSWR from 'swr'
import Accent from './Accent'
import Spinner from './Spinner'

type WithID = { id: number } & PostCardProps

export default function PostCard({ id, post }: WithID) {
  const { data } = useSWR<Views>(`/api/views/${post.slug}`, fetcher)
  const views = data?.total

  function layout(id: number): string {
    if (id % 2 === 0) {
      return 'md:flex-row'
    } else {
      return 'md:flex-row-reverse'
    }
  }

  function textSide(id: number): string {
    if (id % 2 === 0) {
      return 'px-3 md:pl-3 md:pr-0'
    } else {
      return 'px-3 md:pr-3 md:pl-0'
    }
  }

  function pictureSide(id: number): string {
    if (id % 2 === 0) {
      return 'px-3 md:pr-[10px] md:pl-0'
    } else {
      return 'px-3 md:pl-[10px] md:pr-0'
    }
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <a className='w-full'>
        <div
          className={clsx(
            'mb-14 flex flex-col rounded-lg border border-light-card transition hover:scale-[1.01] dark:border-dark-card md:gap-4',
            layout(id)
          )}
        >
          <div
            className={clsx(
              'flex flex-col justify-between gap-3 py-2 md:w-1/2 md:gap-0',
              textSide(id)
            )}
          >
            <div className='flex flex-col'>
              <h4 className='mb-1 text-xl font-semibold tracking-tight'>
                {post.title}
              </h4>
              <p className='text-light-medium dark:text-dark-medium'>
                {post.summary}
              </p>
            </div>
            <div className='post-infos-container text-sm'>
              <div className='post-info-box'>
                <HiOutlineClock />
                <Accent variant='yellow' className='dark:font-medium'>
                  {post.readingTime.text}
                </Accent>
              </div>
              <div className='post-info-box'>
                <HiOutlineEye />
                <Accent
                  variant='yellow'
                  className='flex items-center gap-[6px] dark:font-medium'
                >
                  {views ? views.toLocaleString() : <Spinner />} views
                </Accent>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              '-mb-6 pt-[10px] drop-shadow-md md:w-1/2',
              pictureSide(id)
            )}
          >
            <Image
              alt={post.title}
              src={post.image}
              width={1200}
              height={630}
              className='rounded-lg'
            />
          </div>
        </div>
      </a>
    </Link>
  )
}
