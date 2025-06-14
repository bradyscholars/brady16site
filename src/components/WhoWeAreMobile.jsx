"use client"
import React from 'react'
import BradyPhotoCarousel from './BradyPhotoCarousel'

const WhoWeAreMobile = () => {
  return (
    <div className='who-we-are-section-mobile lg:hidden flex flex-col w-full items-center mb-24 px-4 sm:px-6 lg:px-10 py-8 md:hidden'>

        {/* header */}
        <h1 className='mb-6 mt-0 text-[2rem] sm:text-[2.5rem] font-bold text-center'>
            THE BRADY SCHOLARS
        </h1>

        {/* image carousel */}
        <div className='brady-photo-carousel-mobile w-full max-w-sm mb-6'>
            {/* <BradyPhotoCarousel /> */}
            <img className='w-full object-cover rounded-lg shadow-md' src='/images/brady_scholars.png' />

        </div>

        {/* paragraph */}
        <div className='who-we-are-copy-mobile w-full max-w-lg text-center'>
            <p>
            The Brady Scholars is a three-year program at Northwestern aiming to connect the study of ethics to community service and civic engagement. The program includes a series of classes on moral and political philosophy, a study-abroad component where students are encouraged to consider ethics in a global and comparative context, and a senior capstone project. The Brady Scholars 16s cohort (graduating June 2026) has chosen to address food insecurity in Evanston’s 5th Ward for their senior capstone project.
            </p>
            <a className='text-lg text-[rgb(19, 36, 14)] underline' href="https://www.instagram.com/brady_scholars_16s/" target={"_blank"}>Visit us on Instagram.</a>

        </div>

    </div>
  )
}

export default WhoWeAreMobile
