import Accent from '@/components/Accent'
import PageContainer from '@/components/PageContainer'
import type { Blog } from 'contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi'

const mdxComponents = {
  Image
}

export default function Post({ post }: { post: Blog }) {
  const MDXContent = useMDXComponent(post.body.code)

  const infos = [
    {
      text: post.readingTime.text,
      icon: <HiOutlineClock />
    },
    { text: '33 views', icon: <HiOutlineEye /> }
  ]

  return (
    <PageContainer page={post.title}>
      <article className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
          {post.title}
        </h2>
        <div className='flex w-full flex-col gap-2 md:flex-row md:justify-between'>
          <div className='text-light-medium dark:text-dark-medium'>
            {format(parseISO(post.puplishedAt), 'dd MMMM yyyy')}
          </div>
          <div className='post-infos-container'>
            {infos.map((info, id) => (
              <div key={id} className='post-info-box'>
                {info.icon}
                <Accent variant='yellow' className='dark:font-medium'>
                  {info.text}
                </Accent>
              </div>
            ))}
          </div>
        </div>
        <div className='-mb-1 md:py-2'>
          <Image
            alt={post.title}
            src={post.image}
            width={1200}
            height={630}
            priority
            className='rounded-lg'
          />
        </div>
        <p>{post.summary}.</p>
      </article>
      <div className='section-spacing prose mt-6 max-w-none pb-80 dark:prose-invert'>
        <MDXContent components={mdxComponents} />
      </div>
    </PageContainer>
  )
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
