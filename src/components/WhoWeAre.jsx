import React from 'react'
import BradyPhotoCarousel from './BradyPhotoCarousel'

const WhoWeAre = () => {
  return (
    <div className='who-we-are-section flex w-full justify-between items-center mb-24 px-10'>

        <div className='who-we-are-copy w-[45%]'>
            <h1 className='mb-10 '>
                THE BRADY SCHOLARS
            </h1>

            <p>
            The Brady Scholars is a three-year program at Northwestern aiming to connect the study of ethics to community service and civic engagement. The program includes a series of classes on moral and political philosophy, a study-abroad component where students are encouraged to consider ethics in a global and comparative context, and a senior capstone project. The Brady Scholars 16s cohort (graduating June 2026) has chosen to address food insecurity in Evanston’s 5th Ward for their senior capstone project.
            </p>
        </div>

        <div className='brady-photo-carousel w-[45%] h-full'>
            <BradyPhotoCarousel />
        </div>
        
    </div>
  )
}

export default WhoWeAre