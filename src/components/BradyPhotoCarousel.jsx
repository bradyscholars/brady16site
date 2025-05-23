import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const BradyPhotoCarousel = () => {

    const images = [
        'blank.jpg',
        'blank.jpg',
        'blank.jpg',
    ]

  return (
    <Carousel 
        opts={{
            loop : true,

        }}
        className='h-[90%] max-h-[90%]'
    >
        <CarouselContent>
            {
                images.map((img, idx) => (
                    <CarouselItem key={idx}>
                        <img className='w-full h-full object-cover' src={`/images/${img}`} />
                    </CarouselItem>
                ))
            }
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default BradyPhotoCarousel