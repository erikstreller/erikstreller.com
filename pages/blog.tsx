import { allBlogs } from '@/.contentlayer/generated'
import Accent from '@/components/Accent'
import PageContainer from '@/components/PageContainer'
import { pick } from '@/utils/pick'
import clsx from 'clsx'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi'

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          <p className='text-sm text-light-minor dark:text-dark-minor md:text-base'>
            Dana {'&'} Erik
          </p>
        </div>
        <div className='mt-16 pb-80'>
          {posts.map((post, id) => (
            <Link key={id} href={`/blog/${post.slug}`}>
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
                        <Accent variant='yellow' className='dark:font-medium'>
                          33 views
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
          <p className='text-sm text-light-minor dark:text-dark-minor md:text-base'>
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
