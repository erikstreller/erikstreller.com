import Link from 'next/link'
import FeaturedPostCard from './FeaturedPostCard'

export default function Blog() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const featuredPosts = [
      {
        title: 'The beautiful achitecture of Lisbon',
        description: "A trip through the diversity of Lisbon's architecture",
        views: '12'
      },
      {
        title: "The Ocean and it's misteries",
        description: "About the Atlantic Ocean and it's wide shoreline",
        views: '34'
      },
      {
        title: 'A week in Porto with wine',
        description: "Porto is famous for it's wine and surfing",
        views: '6'
      }
    ]

    return (
      <div className='section-spacing'>
        <h3 className='section-heading'>Featured Posts</h3>
        <div className='mb-4 flex flex-col gap-6 pt-6 md:flex-row'>
          {featuredPosts.map((post, id) => (
            <FeaturedPostCard post={post} key={id} />
          ))}
        </div>
        <Link href='/blog'>
          <a className='text-light-minor transition-colors hover:text-coal dark:text-dark-minor dark:hover:text-light'>
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
          Writing about our adventures in Portugal.
        </p>
        <Link href='/blog'>
          <a className='text-light-minor transition-colors hover:text-coal dark:text-dark-minor dark:hover:text-light'>
            See preview &rarr;
          </a>
        </Link>
      </div>
    )
  }
}
