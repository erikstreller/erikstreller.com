import Image from 'next/image'

type PhotoProps = {
  alt: string
  src: string
  width: number
  height: number
  description?: string
}

export default function Photo({
  alt,
  src,
  width,
  height,
  description
}: PhotoProps) {
  return (
    <div>
      <Image alt={alt} src={src} width={width} height={height} />
      <p className='mt-0 text-light-medium dark:text-dark-medium'>
        {description}
      </p>
    </div>
  )
}
