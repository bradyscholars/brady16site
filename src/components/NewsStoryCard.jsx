"use client"
import React from 'react'

const NewsStoryCard = ({imgSrc, title, content, url}) => {

    function handleClick() {
        window.open(url, '_blank');
    }

  return (
    <div className=' flex flex-col gap-0 justify-center p-10 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer rounded-lg border' onClick={handleClick}>

        <img className='w-full h-[50%] object-cover mb-1 border' src={imgSrc} />

        <h3 className='mb-0'>{title}</h3>

        <p className=''>{content}</p>

        
    </div>
  )
}

export default NewsStoryCard