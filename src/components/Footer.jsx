"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {

    const router = useRouter();

    function navToHome() {
        router.push("/");
    }

    function navToInsta() {
        window.open("https://www.instagram.com/brady_scholars_16s/", '_blank', 'noopener,noreferrer')
    }

  return (
    <div className='site-footer absolute bottom-0 mb-10 w-full flex items-center justify-center'>
 
        <div className='actual-site-footer w-[90%] md:w-[40%] py-2 bg-white rounded-md shadow-md px-8 flex justify-between items-center border border-gray-100'>

            <div className='brady-copyright '>
                <p className='font-bold text-sm my-0 '>© 2025 <span className="text-green-800">The Brady Scholars</span></p>
            </div>

            <div className='links flex gap-5 items-center justify-center '>
                {/* <img src="/vectors/instagram.svg" onClick={navToInsta} className="cursor-pointer fill-gray-500 flex-shrink-0" /> */}
                <svg
                    onClick={navToInsta}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-[1.25rem] w-auto cursor-pointer fill-gray-500 hidden md:block"
                >
                    <path
                        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                    />
                </svg>
                <a className='email-link text-gray-500 text-sm' href='mailto:bradyscholars16@gmail.com' target={"_blank"}>Email</a>
                <a className='home-link text-gray-500  text-sm cursor-pointer object-scale-down' onClick={navToHome}>Home</a>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
