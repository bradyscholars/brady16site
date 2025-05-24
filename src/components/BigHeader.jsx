import React from 'react'

const BigHeader = ({text, id=""}) => {
  return (
    <h1 className='home-page-header text-[4.5rem] flex items-center text-center w-full font-extrabold z-10' id={id}>
        {text}
    </h1>
  )
}

export default BigHeader