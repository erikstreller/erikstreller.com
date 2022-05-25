import { ConvertPick } from '@/utils/pick'
import FeaturedPostCard from './FeaturedPostCard'
import PageLink from './links/PageLink'

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
      <PageLink href='/blog' className='see-more'>
        See more posts &rarr;
      </PageLink>
    </div>
  )
}
