import Footer from '@/components/Footer'
import GetInvolvedForm from '@/components/GetInvolvedForm'
import React from 'react'

const GetInvolvedPage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center px-5 py-16 md:px-24 md:py-32 relative'>

      <GetInvolvedForm />

      <Footer />

    </div>
  )
}

export default GetInvolvedPage