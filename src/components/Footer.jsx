"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {

    const router = useRouter();

    function navToHome() {
        router.push("/");
    }

  return (
    <div className='site-footer absolute bottom-0 mb-10 w-full flex items-center justify-center'>
 
        <div className='actual-site-footer w-[40%] py-2 bg-white rounded-md shadow-md px-8 flex justify-between items-center border border-gray-100'>

            <div className='brady-copyright '>
                <p className='font-bold text-sm my-0'>© The Brady Scholars, 2025</p>
            </div>

            <div className='links flex gap-5 items-center justify-center '>
                <a className='email-link text-gray-500 text-sm' href='mailto:bradyscholars16@gmail.com' target={"_blank"}>Email</a>
                <a className='home-link text-gray-500 text-sm cursor-pointer' onClick={navToHome}>Home</a>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
