import { useState } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import Photo from './Photo'

type ImageSliderProps = {
  images: {
    alt: string
    src: string
  }[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [imageNumber, setImageNumber] = useState<number>(0)
  const imageCount = images.length - 1
  const visibleImage = images[imageNumber]

  function handleNext() {
    if (imageNumber >= imageCount) {
      setImageNumber(0)
    } else {
      setImageNumber(imageNumber + 1)
    }
  }

  function handlePrev() {
    if (imageNumber <= 0) {
      setImageNumber(imageCount)
    } else {
      setImageNumber(imageNumber - 1)
    }
  }

  return (
    <div>
      <div className='mb-1 flex justify-between'>
        <button onClick={handlePrev}>
          <div className='slide'>
            <FcPrevious /> Prev
          </div>
        </button>
        <button onClick={handleNext}>
          <div className='slide'>
            Next <FcNext />
          </div>
        </button>
      </div>
      <Photo alt={visibleImage.alt} src={visibleImage.src} />
    </div>
  )
}
