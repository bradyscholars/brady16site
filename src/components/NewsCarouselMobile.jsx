import React from 'react'
import NewsStoryCard from './NewsStoryCard'

const NewsCarouselMobile = () => {

    const newsStories = [
        {
            imgSrc : '/images/news1.jpg',
            title : "Suburban Chicago couple's market and ice cream parlor feeds their community",
            url : "https://www.cbsnews.com/chicago/news/c-w-ice-market-evanston/"
        },
        {
            imgSrc : '/images/news2.png',
            title : "‘They serve the community unselfishly’: C&W Market expands help for those in need",
            url : "https://evanstonroundtable.com/2022/02/23/they-serve-the-community-unselfishly-cw-market-expands-help-for-those-in-need/"
        },
        {
            imgSrc : '/images/news3.jpeg',
            title : "C&W Foundation brings food, jobs and growth to Evanston residents, students",
            url : "https://dailynorthwestern.com/2023/01/19/lateststories/cw-foundation-brings-food-jobs-and-growth-to-evanston-residents-students/"
        },
        {
            imgSrc : '/images/news4.png',
            title : "C&W Market Foundation to host Cocktails for a Cause fundraiser to support community food insecurity",
            url : "https://evanstonroundtable.com/2024/04/08/cw-market-foundation-to-host-cocktails-for-a-cause-fundraiser-to-support-community-food-insecurity/"
        },
        {
            imgSrc : "/images/news5.png",
            title : "C&W Market expands food pantry operation with help from Northwestern, Rotary Club of Evanston",
            url : "https://www.chicagotribune.com/2022/06/10/cw-market-expands-food-pantry-operation-with-help-from-northwestern-rotary-club-of-evanston/n"
        },
        {
            imgSrc : "/images/news6.png",
            title : "Sweet dream delivered: C&W Market opens ice cream parlor",
            url : "https://evanstonroundtable.com/2023/06/24/a-dream-delivered-cw-market-opens-ice-cream-parlor/"
        }
    ]

    return (
        <div className="news-carousel-mobile w-full overflow-x-auto py-4 ">
            <div className="inline-flex space-x-4 px-4 justify-center">
            {newsStories.map((story, idx) => (
                <div
                key={idx}
                className="inline-block flex-shrink-0 w-64"
                >
                <NewsStoryCard
                    imgSrc={story.imgSrc}
                    title={story.title}
                    url={story.url}
                />
                </div>
            ))}
            </div>
        </div>
    )
}

export default NewsCarouselMobile
