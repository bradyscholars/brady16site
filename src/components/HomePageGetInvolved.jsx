"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

const HomePageGetInvolved = () => {

    const router = useRouter();

    function handleClick() {
        router.push('/get-involved');
    }

  return (
    <div className='get-involved-home-page-call-to-action flex flex-col items-center px-10 mb-24'>

        <p className='mb-0'>
        The C&W Market Foundation is dedicated to combating food insecurity in Evanston's 5th Ward and surrounding areas. Currently, the products offered by C&W's convenience store are limited to shelf items, processed foods, and a very small supply of produce and hygiene products. Additionally, their distribution efforts are centered around a small basement food pantry and bi-weekly food drive.
        </p>

        <p className=''>
        This project aims to increase C&W's long-term capacity to fight food insecurity in a more sustainable manner, by providing Evanston residents with year-round access to grocery-store quality goods, with an emphasis on produce and healthy protein options. Consistent produce consumption has many health benefits, including, but not limited to, lowered blood pressure and risk of heart disease and diabetes. Ultimately, this project aims to maximize C&W's organizational capacity to store and distribute grocery goods by renovating and expanding the market's refrigeration, ventilation, and storage space.
        </p>

        <Button className='bg-blue-500 hover:bg-blue-600 shadow-lg  px-10 py-6 rounded-full mt-10' onClick={handleClick}>
            <p className='text-white text-lg m-0 p-0 font-medium'>Get Involved</p>
        </Button>
      
    </div>
  )
}

export default HomePageGetInvolved
