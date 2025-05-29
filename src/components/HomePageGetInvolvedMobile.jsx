"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardContent, CardTitle } from './ui/card'

const HomePageGetInvolvedMobile = () => {

    const router = useRouter();

    function handleClick() {
        router.push('/get-involved');
    }

  return (

    <div className='about-the-project-section-full w-full px-4 lg:px-10 py-8 flex flex-col items-center md:hidden'>
      
      <h1 className='m-0 p-0 font-black text-[2.5rem] sm:text-[3rem] md:text-[6rem] transform w-full mx-auto text-center  '>
        OUR PROJECT
      </h1>
      <h5 className='text-gray-600 m-0 p-0 mb-8 md:ml-4 text-center '>
        Brady Scholars 16
      </h5>

      <div className='about-the-project-copy grid grid-cols-1 gap-6 items-center justify-items-center md:grid-cols-12 md:grid-rows-3 md:gap-4 md:items-end'>

        <div className='image-for-some-reason col-span-1 w-full max-w-sm mx-auto order-1 md:order-none md:col-span-4 md:row-span-2'>
          <img className='object-cover w-full h-auto rounded-lg shadow-md' src="/images/c_and_w_primary.png" />

        </div>

        <div className='project-card-1 col-span-1 w-full max-w-sm mx-auto order-2 md:order-none md:col-span-4 md:row-span-3'>
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>
                <h1 className='m-0 text-[1.6rem] sm:text-[1.8rem] text-center md:text-left'>
                  Food Insecurity in the 5th Ward
                </h1>
              </CardTitle>
            </CardHeader>

            <CardContent className='text-sm sm:text-base text-center md:text-left'>
              This project aims to increase C&W's long-term capacity to fight food insecurity in a more sustainable manner, by providing Evanston residents with year-round access to grocery-store quality goods, with an emphasis on produce and healthy protein options. We hope to maximize C&W's organizational capacity to store and distribute grocery goods by renovating and expanding the market's refrigeration, ventilation, and storage space.
            </CardContent>
          </Card>
        </div>

        <div className='project-card-2 col-span-1 w-full max-w-sm mx-auto order-3 md:order-none md:col-span-4 md:row-span-3'>
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>
                <h1 className='m-0 text-[1.6rem] sm:text-[1.8rem] text-center md:text-left'>
                  The C&W Market Foundation
                </h1>
              </CardTitle>
            </CardHeader>

            <CardContent className='text-sm sm:text-base text-center md:text-left'>
              is dedicated to combating food insecurity in Evanston's 5th Ward and surrounding areas. Currently, the products offered by C&W's convenience store are limited to shelf items, processed foods, and a very small supply of produce and hygiene products. Additionally, their distribution efforts are centered around a small basement food pantry and bi-weekly food drive.
            </CardContent>
          </Card>
        </div>

        <div className='get-involved-button col-span-1 w-full max-w-xs mx-auto order-4 md:order-none md:col-span-4 md:row-span-1 md:row-start-3 md:col-start-9'>
          <Button className='bg-green-800 hover:bg-green-900 shadow-lg px-8 py-8 sm:px-12 sm:py-8 rounded-full w-full flex justify-center' onClick={handleClick}>
            <p className='text-white text-lg sm:text-xl m-0 p-0 font-bold'>
              Get Involved →
            </p>
          </Button>
        </div>

      </div>

    </div>
    
  )
}

export default HomePageGetInvolvedMobile
