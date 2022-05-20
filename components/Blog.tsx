import { ConvertPick } from '@/utils/pick'
import Link from 'next/link'
import FeaturedPostCard from './FeaturedPostCard'

type FeaturedPostCardProps = {
  featuredPosts: ConvertPick<{
    slug: string
    title: string
    summary: string
    puplishedAt: string
    readingTime: any
    image: string
  }>[]
}

export default function Blog({ featuredPosts }: FeaturedPostCardProps) {
  return (
    <div className='section-spacing'>
      <h3 className='section-heading'>Featured Posts</h3>
      <div className='mb-4 flex flex-col gap-6 pt-6 md:flex-row'>
        {featuredPosts.map((post, id) => (
          <FeaturedPostCard
            title={post.title}
            summary={post.summary}
            slug={post.slug}
            key={id}
          />
        ))}
      </div>
      <Link href='/blog'>
        <a className='text-light-minor transition-colors hover:text-coal dark:text-dark-minor dark:hover:text-light'>
          See more posts &rarr;
        </a>
      </Link>
    </div>
  )
}
