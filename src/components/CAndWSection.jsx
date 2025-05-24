import React from 'react'
import BigHeader from './BigHeader'
import NewsCarousel from './NewsCarousel'


const CAndWSection = () => {
  return (
    <div className='c-and-w-section flex flex-col w-full items-center mb-24' id="candw">

        {/* <div className="candw-delineator" id="candw" /> */}
        <BigHeader text={"C&W FOUNDATION"}/>

        <div className='c-and-w-copy w-full flex justify-between items-center px-10 '>

            <div className='c-and-w-copy w-[45%]'>
                <h1 className='mb-10 '>
                    C&W
                </h1>

                <p className=''>
                Long-time Evanston residents Clarence and Wendy Weaver own C&W Market and Ice Cream Parlor, a convenience store and ice cream parlor located in Evanston’s 5th ward. In addition, the Weavers founded the C&W Market Foundation, a non-profit established to support their convenience store and to focus on community workforce development. From the onset of their business in 2014, the Weavers have intended to create a safe haven that serves the community both by alleviating food insecurity and creating service opportunities. 
                <br /> <br /> Today, the store offers an assortment of foodstuffs as well as catering services. In spite of—and in response to—the disturbance of COVID-19, the Weavers continued to address food insecurity impacting local neighborhood families and senior citizens. These efforts began with weekly grocery deliveries to 25 senior citizens and has continually expanded alongside community needs. Now, the Weavers and their community partners serve over 220 families on a weekly basis.
                </p>
            </div>

            <div className='b-and-w-photo w-[45%] h-full'>
                <img className='w-full object-cover ' src='/images/blank.jpg' />
            </div>

        </div>


        {/* <NewsStoryCard imgSrc={'/images/blank.jpg'} title={"News Story"} content={"A news story about how lorem, and ipsum, these dolor sit amet. Truly, madly, deeply."} url={"https://www.google.com"} /> */}

        <NewsCarousel />
        
    </div>
  )
}

export default CAndWSection