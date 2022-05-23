import clsx from 'clsx'
import Image from 'next/image'

type PhotoProps = {
  alt: string
  src: string
  description?: string
}

export default function Photo({ alt, src, description }: PhotoProps) {
  return (
    <div>
      <div className='relative aspect-[672/378] max-h-[378px] w-full'>
        <Image
          alt={alt}
          src={src}
          objectFit='cover'
          layout='fill'
          className='rounded-lg'
        />
      </div>
      <p
        className={clsx(
          'text-light-medium dark:text-dark-medium',
          description ? 'mt-2 -mb-1' : ''
        )}
      >
        {description}
      </p>
    </div>
  )
}
