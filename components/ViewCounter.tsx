import fetcher from '@/lib/fetcher'
import { Views } from '@/lib/types'
import { useEffect } from 'react'
import useSWR from 'swr'

export default function ViewCounter({ slug }: { slug: string }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    } else {
      const registerView = () =>
        fetch(`/api/views/${slug}`, {
          method: 'POST'
        })

      registerView()
    }
  }, [slug])

  return (
    <>
      {views ? (
        new Number(views).toLocaleString()
      ) : (
        <svg
          className='h-[14px] w-[14px] animate-spin-fast text-light-medium dark:text-dark-medium'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='3'
          />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      )}
    </>
  )
}
