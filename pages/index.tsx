import { allBlogs } from '@/.contentlayer/generated'
import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import PageContainer from '@/components/PageContainer'
import Projects from '@/components/Projects'
import { pick } from '@/utils/pick'
import type { InferGetStaticPropsType } from 'next'

export default function Home({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Hero />
      <Blog featuredPosts={posts} />
      <Projects />
    </PageContainer>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .slice(0, 3)
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
