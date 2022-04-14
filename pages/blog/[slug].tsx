import Accent from '@/components/Accent'
import PageContainer from '@/components/PageContainer'
import type { Blog } from 'contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponents = {
  Image
}

export default function Post({ post }: { post: Blog }) {
  const MDXContent = useMDXComponent(post.body.code)

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return (
      <PageContainer page={post.title}>
        <Accent variant='yellow' className='text-2xl font-bold tracking-tight'>
          {post.title}
        </Accent>
        <div className='section-spacing prose mt-6 max-w-none pb-80 dark:prose-invert'>
          <MDXContent components={mdxComponents} />
        </div>
      </PageContainer>
    )
  } else {
    return (
      <PageContainer page='Coming soon'>
        <p className='section-spacing pb-80 text-rose-400'>Coming soon.</p>
      </PageContainer>
    )
  }
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  return { props: { post } }
}
