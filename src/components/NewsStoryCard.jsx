"use client"
import React from 'react'

const NewsStoryCard = ({imgSrc, title, content, url}) => {

    function handleClick() {
        window.open(url, '_blank');
    }

  return (
    <div className="news-card-padding py-10 px-2 relative">
      <div className='flex flex-col gap-0 justify-center p-6 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer rounded-lg border border-gray-100 z-10 overflow-hidden shadow-md shadow-green-700' onClick={handleClick}>

          {/* <div className='img-container w-full h-[30%] object-contain'> */}
          <img className='h-[150px] object-cover mb-1 border border-gray-100 ' src={imgSrc} />
          {/* </div> */}

          {/* <h3 className='my-0 mt-2'>{title}</h3> */}

          <h3 className='my-0 mt-1 max-w-full text-base overflow-hidden overflow-ellipsis text-nowrap whitespace-nowrap'>{content}</h3>

          
      </div>
    </div>
  )
}

export default NewsStoryCard