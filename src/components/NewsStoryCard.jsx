"use client"
import React from 'react'

const NewsStoryCard = ({imgSrc, title, content, url}) => {

    function handleClick() {
        window.open(url, '_blank');
    }

  return (
    <div className="news-card-padding py-10 px-2 relative">
      <div className=' flex flex-col gap-0 justify-center p-6 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer rounded-lg border border-gray-100 z-10 shadow-md shadow-blue-300' onClick={handleClick}>

          {/* <div className='img-container w-full h-[30%] object-contain'> */}
          <img className='h-[200px] object-cover mb-1 border border-gray-100 ' src={imgSrc} />
          {/* </div> */}

          <h3 className='my-0 mt-2'>{title}</h3>

          <p className='my-0 mt-1 text-sm'>{content}</p>

          
      </div>
    </div>
  )
}

export default NewsStoryCard