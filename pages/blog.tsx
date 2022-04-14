import { allBlogs } from '@/.contentlayer/generated'
import PageContainer from '@/components/PageContainer'
import { pick } from '@/utils/pick'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export default function blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return (
      <PageContainer page='Blog'>
        <div className='section-spacing'>
          <h1 className='page-heading'>Blog.</h1>
          <p className='page-description'>
            Many new adventures await us in Portugal, where we will live, work
            and dance together for the next few years. This blog is for family
            and friends and anyone who wants to follow us on our journey.
          </p>
          <p className='text-sm text-slate-400 dark:text-gray-500 md:text-base'>
            Dana {'&'} Erik
          </p>
        </div>
        <p className='section-spacing text-rose-400'>Starting in May.</p>
        <div className='mt-16 pb-80'>
          {posts.map((post, id) => (
            <Link key={id} href={`/blog/${post.slug}`}>
              <a>
                <h2 className='mb-1 text-xl font-semibold'>{post.title}</h2>
                <p className='mb-6'>{post.summary}</p>
              </a>
            </Link>
          ))}
        </div>
      </PageContainer>
    )
  } else {
    return (
      <PageContainer page='Blog'>
        <div className='section-spacing'>
          <h1 className='page-heading'>Blog.</h1>
          <p className='page-description'>
            Many new adventures await us in Portugal, where we will live, work
            and dance together for the next few years. This blog is for family
            and friends and anyone who wants to follow us on our journey.
          </p>
          <p className='text-sm text-slate-400 dark:text-gray-500 md:text-base'>
            Dana {'&'} Erik
          </p>
        </div>
        <p className='section-spacing pb-80 text-rose-400'>Starting in May.</p>
      </PageContainer>
    )
  }
}

export function getStaticProps() {
  const posts = allBlogs
    .map((blog) => pick(blog, ['slug', 'title', 'summary', 'puplishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.puplishedAt)) - Number(new Date(a.puplishedAt))
    )

  return { props: { posts } }
}
