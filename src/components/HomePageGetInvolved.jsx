"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardContent, CardTitle } from './ui/card'

const HomePageGetInvolved = () => {

    const router = useRouter();

    function handleClick() {
        router.push('/get-involved');
    }

  return (

    <div className='about-the-project-section-full w-full px-10 hidden lg:block'>

      <h1 className='m-0 p-0 font-black text-[3rem] md:text-[6rem] transform w-2/3 scale-x-[113%] origin-left '>OUR PROJECT</h1>
      <h5 className='text-gray-600 m-0 p-0 mb-10 md:ml-4'>Brady Scholars 16</h5>

      <div className='about-the-project-copy grid grid-cols-12 grid-rows-3 gap-4 items-end '>

        <div className='project-card-1 h-full col-span-4 row-span-3'>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <h1 className='m-0 text-[1.8rem]'>Food Insecurity in the 5th Ward</h1>
              </CardTitle>
            </CardHeader>

            <CardContent>
              This project aims to increase C&W's long-term capacity to fight food insecurity in a more sustainable manner, by providing Evanston residents with year-round access to grocery-store quality goods, with an emphasis on produce and healthy protein options.  We hope to maximize C&W's organizational capacity to store and distribute grocery goods by renovating and expanding the market's refrigeration, ventilation, and storage space.
            </CardContent>
          </Card>
        </div>

        <div className='project-card-2 h-full col-span-4 row-span-3'>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <h1 className='m-0 text-[1.8rem]'>The C&W Market Foundation</h1> 
              </CardTitle>
            </CardHeader>

            <CardContent>
              is dedicated to combating food insecurity in Evanston's 5th Ward and surrounding areas. Currently, the products offered by C&W's convenience store are limited to shelf items, processed foods, and a very small supply of produce and hygiene products. Additionally, their distribution efforts are centered around a small basement food pantry and bi-weekly food drive.
            </CardContent>
          </Card>
        </div>

        <div className='image-for-some-reason col-span-4 row-span-2'>

          <img className='object-cover' src="/images/c_and_w_primary.png" />

        </div>

        <div className='get-involved-button col-span-4 row-span-1 row-start-3 col-start-9  w-full h-full  flex justify-center items-center '>
          <Button className='bg-green-800 hover:bg-green-900 shadow-lg   px-12 py-8 rounded-full' onClick={handleClick}>
              <p className='text-white text-xl m-0 p-0 font-bold'>Get Involved →</p>
          </Button>
        </div>


      </div>

    </div>
    
  )
}

export default HomePageGetInvolved


// deprecated -- old
// <div className='get-involved-home-page-call-to-action flex flex-col items-center px-10 mb-24'>

// <p className='mb-0'>
// The C&W Market Foundation is dedicated to combating food insecurity in Evanston's 5th Ward and surrounding areas. Currently, the products offered by C&W's convenience store are limited to shelf items, processed foods, and a very small supply of produce and hygiene products. Additionally, their distribution efforts are centered around a small basement food pantry and bi-weekly food drive.
// </p>

// <p className=''>
// This project aims to increase C&W's long-term capacity to fight food insecurity in a more sustainable manner, by providing Evanston residents with year-round access to grocery-store quality goods, with an emphasis on produce and healthy protein options. Consistent produce consumption has many health benefits, including, but not limited to, lowered blood pressure and risk of heart disease and diabetes. Ultimately, this project aims to maximize C&W's organizational capacity to store and distribute grocery goods by renovating and expanding the market's refrigeration, ventilation, and storage space.
// </p>

{/* <Button className='bg-blue-500 hover:bg-blue-600 shadow-lg  px-10 py-6 rounded-full mt-10' onClick={handleClick}>
    <p className='text-white text-lg m-0 p-0 font-medium'>Get Involved</p>
</Button> */}

// </div>