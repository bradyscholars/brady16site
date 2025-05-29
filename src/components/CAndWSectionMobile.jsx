import React from 'react'
import BigHeader from './BigHeader'
import BradyPhotoCarousel from './BradyPhotoCarousel'
import NewsCarousel from './NewsCarousel'

const CAndWSectionMobile = () => {
  return (
    <div className='c-and-w-section flex md:hidden flex-col w-full items-center mb-48'>

        {/* <div className="candw-delineator" id="candw" /> */}
        {/* <BigHeader text={"C&W FOUNDATION"}/> */}

        <div className='c-and-w-copy w-full flex flex-col items-center px-4 sm:px-6 lg:px-10 py-8 gap-6 md:flex-row md:justify-between'>

            {/* header */}
            <h1 className='order-1 w-full md:order-none text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-center md:text-left'>
                THE C&W FOUNDATION
            </h1>

            {/* image */}
            <div className='b-and-w-photo order-2 md:order-none w-full max-w-sm'>
                {/* <img className='w-full object-cover rounded-lg shadow-md' src='/images/c_and_w_primary.png' /> */}
                <BradyPhotoCarousel />
            </div>

            {/* paragraph */}
            <div className='c-and-w-copy-text order-3 md:order-none w-full max-w-lg text-center md:text-left'>
                <p>
                Long-time Evanston residents Clarence and Wendy Weaver own C&W Market and Ice Cream Parlor, a convenience store and ice cream parlor located in Evanston’s 5th ward. In addition, the Weavers founded the C&W Market Foundation, a non-profit established to support their convenience store and to focus on community workforce development. From the onset of their business in 2014, the Weavers have intended to create a safe haven that serves the community both by alleviating food insecurity and creating service opportunities. 
                <br /> <br /> Today, the store offers an assortment of foodstuffs as well as catering services. In spite of—and in response to—the disturbance of COVID-19, the Weavers continued to address food insecurity impacting local neighborhood families and senior citizens. These efforts began with weekly grocery deliveries to 25 senior citizens and has continually expanded alongside community needs. Now, the Weavers and their community partners serve over 220 families on a weekly basis.
                </p>
            </div>

        </div>

        <NewsCarousel />
        
    </div>
  )
}

export default CAndWSectionMobile
