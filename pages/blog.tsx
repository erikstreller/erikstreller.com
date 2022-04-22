import { allBlogs } from '@/.contentlayer/generated'
import Accent from '@/components/Accent'
import PageContainer from '@/components/PageContainer'
import PostCard from '@/components/PostCard'
import { pick } from '@/utils/pick'
import { InferGetStaticPropsType } from 'next'

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer page='Blog'>
      <div className='section-spacing'>
        <h1 className='page-heading'>Blog.</h1>
        <p className='page-description'>
          Many new adventures await us in Portugal, where we will live, work and
          dance together for the next few years. This blog is for family and
          friends and anyone who wants to follow us on our journey.
        </p>
        <div className='flex justify-between'>
          <Accent variant='yellow' className='dark:font-medium'>
            Starting in May
          </Accent>
          <p className='text-sm text-light-minor dark:text-dark-minor md:text-base'>
            Dana {'&'} Erik
          </p>
        </div>
      </div>
      <div className='pb-4'>
        <h3 className='section-heading'>Preview</h3>
        <div className='pt-6'>
          {posts.map((post, id) => (
            <PostCard key={id} id={id} post={post} />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .map((blog) =>
      pick(blog, [
        'slug',
        'title',
        'summary',
        'puplishedAt',
        'readingTime',
        'image'
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.puplishedAt)) - Number(new Date(a.puplishedAt))
    )

  return { props: { posts } }
}
