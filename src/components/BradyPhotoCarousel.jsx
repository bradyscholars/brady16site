"use client"

import React from 'react'
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const BradyPhotoCarousel = () => {

    const [emblaRef] = useEmblaCarousel({loop : true}, [Autoplay()]);

    const images = [
        'blank.jpg',
        'blank.jpg',
        'blank.jpg',
    ]

    return (
        <div className='embla ' ref={emblaRef}>

            <div className='embla__container'>

                {
                    images.map((img, idx) => (
                        <div className='embla__slide object-contain flex items-center justify-center' key={idx}>
                            <img className='carousel-image ' src={`/images/${img}`} />
                        </div>
                    ))
                }

            </div>

        </div>
    );

  
}

export default BradyPhotoCarousel


// OLD VERSION WITH SHADCN UI
// return (
//     <Carousel 
//         opts={{
//             loop : true,

//         }}
//         className='h-[90%] max-h-[90%]'
//     >
//         <CarouselContent>
//             {
//                 images.map((img, idx) => (
//                     <CarouselItem key={idx}>
//                         <img className='w-full h-full object-cover' src={`/images/${img}`} />
//                     </CarouselItem>
//                 ))
//             }
//         </CarouselContent>

//         <CarouselPrevious />
//         <CarouselNext />
//     </Carousel>
//   )