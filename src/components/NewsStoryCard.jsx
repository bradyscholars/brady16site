"use client"
import React from 'react'

const NewsStoryCard = ({imgSrc, title, content, url}) => {

    function handleClick() {
        window.open(url, '_blank');
    }

  return (
    <div className="news-card-padding py-10 px-2 relative">
      <div className=' flex flex-col gap-0 justify-center p-6 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer rounded-lg border z-10 ' onClick={handleClick}>

          <img className='w-full h-[40%] object-cover mb-1 border' src={imgSrc} />

          <h3 className='mb-0'>{title}</h3>

          <p className=''>{content}</p>

          
      </div>
    </div>
  )
}

export default NewsStoryCard