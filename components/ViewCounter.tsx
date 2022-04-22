import fetcher from '@/lib/fetcher'
import { Views } from '@/lib/types'
import { useEffect } from 'react'
import useSWR from 'swr'
import Spinner from './Spinner'

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

  return <>{views ? views.toLocaleString() : <Spinner />}</>
}
