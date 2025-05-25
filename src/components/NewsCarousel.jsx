import React, { startTransition } from 'react'
import NewsStoryCard from './NewsStoryCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const NewsCarousel = () => {
    
    const newsStories = [
        {
            imgSrc : '/images/blank.jpg',
            title : "News Story",
            content : "A news story about how lorem, and ipsum, these dolor sit amet. Truly, madly, deeply.",
            url : "https://www.google.com"
        },
        {
            imgSrc : '/images/blank.jpg',
            title : "News Story",
            content : "A news story about how lorem, and ipsum, these dolor sit amet. Truly, madly, deeply.",
            url : "https://www.google.com"
        },
        {
            imgSrc : '/images/blank.jpg',
            title : "News Story",
            content : "A news story about how lorem, and ipsum, these dolor sit amet. Truly, madly, deeply.",
            url : "https://www.google.com"
        },
        {
            imgSrc : '/images/blank.jpg',
            title : "News Story",
            content : "A news story about how lorem, and ipsum, these dolor sit amet. Truly, madly, deeply.",
            url : "https://www.google.com"
        },
    ]


  return (
    <div className='news-story-carousel w-[80%] overflow-visible relative'>
        <Carousel
            opts={{
                loop : true,
                // align : "start"
            }}
            className="w-full  p-10 "
        >
            <CarouselContent className="overflow-visible">

                {
                    newsStories.map((story, idx) => (
                        <CarouselItem className="basis-1/3  overflow-visible relative" key={idx}>
                            <NewsStoryCard imgSrc={story.imgSrc} title={story.title} content={story.content} url={story.url} />
                        </CarouselItem>
                    ))
                }

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default NewsCarousel