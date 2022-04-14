import Link from 'next/link'

export default function Blog() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const featuredPosts = [
      {
        title: "Porto, it's culture and a lot of port wine",
        views: '12'
      },
      {
        title:
          'In the middle of Lisbons beautiful colored city and a peak at the Atlantic Ocean',
        views: '34'
      },
      {
        title: 'A calm place - the Algarve - where your mind can fload',
        views: '6'
      }
    ]

    return (
      <div className='section-spacing'>
        <h3 className='section-heading'>Featured Posts</h3>
        <p className='section-description'>
          Writing about our odyssey in Portugal.
        </p>
        <div className='mb-4 flex flex-col gap-6 pt-6 md:flex-row'>
          {featuredPosts.map((post, id) => (
            <Link key={id} href='/'>
              <a className='yellow-card-color w-full rounded-xl bg-gradient-to-bl p-[2px] transition hover:scale-[1.01] md:w-1/3'>
                <div className='flex h-full flex-col justify-between rounded-[10px] bg-light py-2 px-3 text-dark dark:bg-dark dark:text-light'>
                  <h4 className='mb-6 w-full text-lg font-medium tracking-tight sm:mb-10'>
                    {post.title}
                  </h4>
                  <div className='opacity-80'>{post.views}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <Link href='/blog'>
          <a className='text-slate-400 transition-colors hover:text-black dark:text-gray-500 dark:hover:text-light'>
            See more posts &rarr;
          </a>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='section-spacing'>
        <h3 className='section-heading'>Blog</h3>
        <p className='section-description'>
          Writing about our odyssey in Portugal.
        </p>
        <Link href='/blog'>
          <a className='text-slate-400 transition-colors hover:text-black dark:text-gray-500 dark:hover:text-light'>
            Coming soon &rarr;
          </a>
        </Link>
      </div>
    )
  }
}
